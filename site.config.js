const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Zai Shi",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Startup Founder | ML Engineer",
    bio: "I love to build things with AI and code.",
    email: "",
    linkedin: "zaishi",
    github: "fomalhautb",
    instagram: "",
  },
  projects: [
    {
      name: `KM-BART`,
      href: "https://github.com/fomalhautb/KM-BART",
    },
    {
      name: `3D-RETR`,
      href: "https://github.com/fomalhautb/3D-RETR",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Zai's Blog",
    description: "welcome to Zai's blog",
  },

  // CONFIG configration (required)
  link: "https://personal-blog-weld-seven.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
