import { Sparkles, Crown, Rocket } from "lucide-react";
export const categories = [
  "Health & Wellness",
  "Fitness & Gym",
  "Real Estate & Property",
  "Education & E-Learning",
  "Restaurant & Food Service",
  "E-Commerce & Retail",
  "Professional Services (Lawyer, CA, Consultant)",
  "Home Services (Plumber, Electrician, Contractor)",
  "Beauty & Salon",
  "Healthcare & Medical Clinic",
  "Technology & IT Services",
  "Financial Services & Insurance",
  "Travel & Hospitality",
  "Event Planning & Photography",
  "Fashion & Apparel",
  "Automotive & Repair",
  "Personal Branding & Portfolio",
  "Agency (Marketing, Design, Development)",
  "Non-Profit & Community",
  "Other",
];

export const plans = [
  {
    name: "Starter",
    id: "starter-website",
    timeline: "within-2-days",
    price: "₹2,999",
    originalPrice: "₹4,999",
    highlight: false,
    badge: "Perfect for beginners",
    badgeVariant: "secondary" as const,
    icon: Sparkles,
    iconColor: "text-yellow-400",
    description: "Launch your online presence quickly and affordably",
    features: [
      {
        text: "3 Page Website",
        tooltip: "Home, About, Contact pages included",
      },
      {
        text: "Basic SEO Setup",
        tooltip: "Meta tags & sitemap configuration",
      },
      {
        text: "Free Hosting (Subdomain)",
        tooltip: "yoursite.ourplatform.com",
      },
      { text: "Mobile Responsive", tooltip: "Optimized for all devices" },
      {
        text: "WhatsApp Chat Button",
        tooltip: "Direct customer communication",
      },
      {
        text: "Fast Delivery (48 - 72 Hours)",
        tooltip: "Quick turnaround guaranteed",
      },
      { text: "1 Month Support", tooltip: "Email & chat support included" },
    ],
    cta: "Get Started",
    ctaSecondary: "Schedule Call",
    fbq: "Starter Schedule Call",
    fbqCta: "Starter CTA Click",
  },
  {
    name: "Pro",
    timeline: "within-7-days",
    id: "pro-website",
    price: "₹6,999",
    originalPrice: "₹9,999",
    highlight: true,
    badge: "Most Popular",
    badgeVariant: "default" as const,
    icon: Crown,
    iconColor: "text-orange-400",
    description: "Perfect for growing businesses ready to scale",
    features: [
      {
        text: "Up to 5 Pages (Home, About, Services, Contact, etc.)",
        tooltip: "Expandable page structure",
      },
      {
        text: "CMS Access (Self Edit)",
        tooltip: "Update content anytime yourself",
      },
      {
        text: "Free .com/.in Domain + 1 Year Hosting & SSL",
        tooltip: "Use your own domain name",
      },
      {
        text: "SEO Optimized Pages",
        tooltip: "Advanced on-page optimization",
      },
      {
        text: "WhatsApp Chat Button",
        tooltip: "Direct customer communication",
      },
      { text: "Blog or Basic E-commerce", tooltip: "Choose one integration" },
      { text: "2 Months Support", tooltip: "Priority support included" },
    ],
    cta: "Choose Pro",
    ctaSecondary: "Schedule Call",
    fbq: "Pro Schedule Call",
    fbqCta: "Pro CTA Click",
    savings: "Save 30%",
  },
  {
    name: "Growth",
    price: "₹14,999",
    timeline: "within-3-weeks",
    id: "growth-website",
    originalPrice: "₹19,999",
    highlight: false,
    badge: "Best for scaling",
    badgeVariant: "secondary" as const,
    icon: Rocket,
    iconColor: "text-blue-400",
    description: "Everything you need for serious online growth",
    features: [
      { text: "Up to 7 Pages", tooltip: "Full website structure" },
      {
        text: "Advanced SEO",
        tooltip: "Schema markup & performance optimization",
      },
      {
        text: "Analytics & Lead Forms",
        tooltip: "Track visitors & capture leads",
      },
      {
        text: "E-Commerce + Blog",
        tooltip: "Full featured online store & blog",
      },
      { text: "Custom UI + Slider", tooltip: "Unique design elements" },
      {
        text: "3 Months Support",
        tooltip: "Dedicated support & maintenance",
      },
    ],
    cta: "Scale Your Business",
    ctaSecondary: "Schedule Call",
    fbq: "Growth Schedule Call",
    fbqCta: "Growth CTA Click",
    savings: "Save 25%",
  },
];

export const timelineOptions = [
  { id: "within-2-days", label: "Within 2 Days", value: "within-2-days" },
  { id: "within-7-days", label: "Within 7 Days", value: "within-7-days" },
  { id: "within-2-weeks", label: "Within 2 Weeks", value: "within-2-weeks" },
  { id: "within-3-weeks", label: "Within 3 Weeks", value: "within-3-weeks" },
  { id: "within-1-month", label: "Within 1 Month", value: "within-1-month" },
  { id: "within-2-months", label: "Within 2 Months", value: "within-2-months" },
  {
    id: "flexible/not-sure",
    label: "Flexible / Not Sure",
    value: "flexible/not-sure",
  },
];

export const servicesOptions = [
  {
    name: "Starter Website",
    price: "₹2,999",
    value: "starter-website",
    originalPrice: "₹4,999",
    timeline: "within-2-days",
  },
  {
    name: "Pro Website",
    price: "₹6,999",
    value: "pro-website",
    originalPrice: "₹9,999",
    timeline: "within-7-days",
  },
  {
    name: "Growth Website",
    price: "₹14,999",
    value: "growth-website",
    originalPrice: "₹19,999",
    timeline: "within-3-weeks",
  },
  {
    name: "Custom Website",
    price: "Contact for Price",
    value: "custom-website",
    originalPrice: "Contact for Price",
    timeline: "flexible/not-sure",
  },
  {
    name: "Not Sure Yet",
    value: "not-sure-yet",
    price: "Contact for Price",
    originalPrice: "Contact for Price",
    timeline: "flexible/not-sure",
  },
];

export const defaultForm = {
  name: "",
  phone: "",
  email: "",
  title: "",
  categoryName: "",
  street: "",
  city: "",
  state: "",
  serviceSelected: servicesOptions[0].value,
  timeline: timelineOptions[0].value,
  purpose: "",
};

export const highlights = [
  {
    title: "3+",
    subtitle: "Years of Craft",
    description:
      "Building clean, scalable applications, AI automations, and high-converting systems.",
    icon: "🛠️",
    gradient: "from-purple-500 to-pink-500",
    color: "purple",
  },
  {
    title: "50+",
    subtitle: "Real Projects",
    description:
      "Web apps, automations, dashboards, landing pages, and open-source tools.",
    icon: "💼",
    gradient: "from-blue-500 to-cyan-500",
    color: "blue",
  },
  {
    title: "15+",
    subtitle: "Core Skills",
    description:
      "From full-stack engineering to SEO, ads, workflows, and AI integrations.",
    icon: "⚡",
    gradient: "from-green-500 to-emerald-500",
    color: "green",
  },
] as const;
