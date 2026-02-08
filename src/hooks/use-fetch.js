import { useSession } from "@clerk/clerk-react";
import { useState } from "react";

const useFetch = (cb, options = {}) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const { session } = useSession();

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      let supabaseAccessToken = null;
      
      // Try to get Clerk token, but don't fail if it doesn't work
      if (session) {
        try {
          supabaseAccessToken = await session.getToken({
            template: "supabase",
          });
        } catch (tokenError) {
          console.log("Note: Could not retrieve Supabase token from Clerk:", tokenError);
          // Continue without the token - the API will use anon key
          supabaseAccessToken = null;
        }
      }
      
      const response = await cb(supabaseAccessToken, options, ...args);
      setData(response);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn };
};

export default useFetch;
