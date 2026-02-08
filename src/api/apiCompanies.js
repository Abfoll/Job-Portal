import supabaseClient, { supabaseUrl } from "@/utils/supabase";
import { createClient } from "@supabase/supabase-js";

const anonClient = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
    global: {
      headers: {},
    },
  }
);

// Fetch Companies
export async function getCompanies(token) {
  const { data, error } = await anonClient.from("companies").select("*");

  if (error) {
    console.error("Error fetching Companies:", error);
    return null;
  }

  return data;
}

// Add Company
export async function addNewCompany(token, _, companyData) {
  // Use anon client for both storage and DB
  const storageClient = anonClient;

  // Validate file
  if (!companyData.logo || companyData.logo.size === 0) {
    throw new Error("Please select a valid image file");
  }

  const random = Math.floor(Math.random() * 90000);
  // Sanitize filename to avoid special characters
  const sanitizedName = companyData.name.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const fileName = `logo-${random}-${sanitizedName}`;

  let uploadSuccess = false;

  // Try method 1: Using anon Supabase client
  try {
    const { data: uploadData, error: storageError } = await storageClient.storage
      .from("company-logo")
      .upload(fileName, companyData.logo);

    if (!storageError) {
      uploadSuccess = true;
    } else {
      console.log("Method 1 failed, trying direct HTTP upload:", storageError.message);
    }
  } catch (err) {
    console.log("Method 1 error, trying fallback:", err.message);
  }

  // Try method 2: Direct HTTP upload with fetch (no JWT issues possible)
  if (!uploadSuccess) {
    try {
      const formData = new FormData();
      formData.append('file', companyData.logo);

      const uploadUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/company-logo/${fileName}`;
      
      const response = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      uploadSuccess = true;
    } catch (err) {
      console.error("Method 2 error:", err);
      throw new Error(`Error uploading Company Logo: ${err.message}`);
    }
  }

  if (!uploadSuccess) {
    throw new Error("Failed to upload company logo using all available methods");
  }

  const logo_url = `${supabaseUrl}/storage/v1/object/public/company-logo/${fileName}`;

  const { data, error } = await storageClient
    .from("companies")
    .insert([
      {
        name: companyData.name,
        logo_url: logo_url,
      },
    ])
    .select();

  if (error) {
    console.error("Database insert error:", error);
    throw new Error(`Error submitting Company: ${error.message || "Row-level security policy violation."}`);
  }

  return data;
}
