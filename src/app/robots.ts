import type { MetadataRoute } from "next";

/**
 * Generates /robots.txt via Next.js App Router convention.
 *
 * Welcomes both classic search crawlers and modern AI / answer-engine
 * crawlers so the portfolio shows up in knowledge-panel and AI-overview
 * answers about Dhanesh Mekalthuru.
 */
export default function robots(): MetadataRoute.Robots {
  const aiAgents = [
    "GPTBot",
    "ClaudeBot",
    "anthropic-ai",
    "Claude-Web",
    "PerplexityBot",
    "Google-Extended",
    "Applebot-Extended",
    "CCBot",
    "Bytespider",
    "FacebookBot",
    "Amazonbot",
    "DuckAssistBot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      ...aiAgents.map((agent) => ({
        userAgent: agent,
        allow: [
          "/",
          "/llms.txt",
          "/llms-full.txt",
          "/llms-small.txt",
          "/ai.txt",
        ],
        disallow: ["/api/", "/_next/"],
      })),
    ],
    sitemap: "https://portfolio.ecodrix.com/sitemap.xml",
    host: "https://portfolio.ecodrix.com",
  };
}
