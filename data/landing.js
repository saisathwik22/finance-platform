import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "1K+",
    label: "Active Users",
  },
  {
    value: "$2M+",
    label: "Transactions Tracked",
  },
  {
    value: "99%",
    label: "Uptime",
  },
  {
    value: "4.9/5",
    label: "User Rating",
  },
];

export const featuresData = [
  {
    icon: <BarChart3 className='h-8 w-8 text-blue-600' />,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: <Receipt className='h-8 w-8 text-blue-600' />,
    title: "Smart Receipt Scanner",
    description: "Auto data extraction from receipts using AI technology",
  },
  {
    icon: <PieChart className='h-8 w-8 text-blue-600' />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligence",
  },
  {
    icon: <CreditCard className='h-8 w-8 text-blue-600' />,
    title: "Multi-Account support",
    description: "Manage multiple accounts and credit cards at one place",
  },
  {
    icon: <Globe className='h-8 w-8 text-blue-600' />,
    title: "Multi-Currency",
    description: "Support for multiple currencies with real-time conversion",
  },
  {
    icon: <Zap className='h-8 w-8 text-blue-600' />,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations",
  },
];

// Working
export const howItWorksData = [
  {
    icon: <CreditCard className='h-8 w-8 text-blue-600' />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className='h-8 w-8 text-blue-600' />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className='h-8 w-8 text-blue-600' />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

export const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote:
      "FundFlow has transformed how I manage my business finances. The AI insights have helped me identify cost-saving oppurtunities I never knew existed.",
  },
  {
    name: "Micheal Chen",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "The receipt scanning feature saves me hours each month. Now I can focus on my work instead of manual data entry and expense tracking.",
  },
  {
    name: "Emily Rodriguez",
    role: "Financial Advisor",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    quote:
      "I recommend FundFlow to all my clients. The multi-currency support and detailed analytics make it perfect for international investors.",
  },
];
