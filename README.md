# 🚀 Job Portal - Full Stack Application

A modern, full-featured job portal built with React, enabling seamless connections between job seekers and employers. This platform provides comprehensive job management, application tracking, and user authentication.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Repository](#repository)

## ✨ Features

### For Job Seekers
- 🔍 **Browse Jobs** - Search and filter through available job listings
- 💾 **Save Jobs** - Bookmark jobs for later viewing
- 📝 **Apply to Jobs** - Submit applications directly through the platform
- 📊 **Track Applications** - Monitor the status of submitted applications
- 👤 **User Profile** - Manage personal information and preferences

### For Employers
- ➕ **Post Jobs** - Create and publish job listings
- 🏢 **Company Management** - Add and manage company profiles
- 📈 **Manage Jobs** - View and edit posted job listings
- 📋 **Review Applications** - Access and review candidate applications
- ✅ **Application Management** - Track and update application statuses

### General Features
- 🔐 **Secure Authentication** - User authentication powered by Clerk
- 🎨 **Modern UI/UX** - Clean, responsive design with Tailwind CSS and Shadcn UI
- 🌓 **Theme Support** - Light and dark mode options
- 📱 **Responsive Design** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Vite for optimal speed

## 🛠️ Tech Stack

**Frontend:**
- React.js - UI library
- Vite - Build tool and development server
- Tailwind CSS - Utility-first CSS framework
- Shadcn UI - Re-usable component library

**Backend & Services:**
- Supabase - Backend as a Service (Database, Storage, Authentication)
- Clerk - User authentication and management

**Additional Tools:**
- React Router - Navigation
- Lucide React - Icon library

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Supabase account
- Clerk account

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Getting Your API Keys:

**Supabase:**
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project or select existing one
3. Navigate to Settings → API
4. Copy the Project URL and anon/public key

**Clerk:**
1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application or select existing one
3. Navigate to API Keys
4. Copy the Publishable key

## 📥 Installation

1. **Clone the repository**
```bash
git clone https://github.com/Abfoll/Job-Portal.git
cd Job-Portal
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your actual API keys
```

4. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to `http://localhost:5173`

## 💻 Usage

### For Job Seekers:
1. Sign up or log in to your account
2. Complete your onboarding profile
3. Browse available job listings
4. Save interesting jobs for later
5. Apply to jobs with your information
6. Track your application status

### For Employers:
1. Sign up or log in as a recruiter
2. Complete company onboarding
3. Add your company details
4. Post new job listings
5. Review incoming applications
6. Manage your posted jobs

## 📁 Project Structure

```
job-portal/
├── public/              # Static assets
├── src/
│   ├── api/            # API integration functions
│   ├── components/     # Reusable React components
│   │   └── ui/        # Shadcn UI components
│   ├── data/          # Static data files
│   ├── hooks/         # Custom React hooks
│   ├── layouts/       # Layout components
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   └── utils/         # Helper utilities
├── .env               # Environment variables
└── package.json       # Project dependencies
```

## 🔗 Repository

GitHub: [https://github.com/Abfoll/Job-Portal](https://github.com/Abfoll/Job-Portal)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Abfoll/Job-Portal/issues).

## 👨‍💻 Author

**Abfoll**
- GitHub: [@Abfoll](https://github.com/Abfoll)

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

**Built with ❤️ using React, Supabase, and Clerk**
