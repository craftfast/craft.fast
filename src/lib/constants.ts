/**
 * Application constants for the marketing website
 */

export const APP = {
    NAME: "craft",
    DOMAIN: ".fast",
    FULL_NAME: "craft.fast",
} as const;

export const LINKS = {
    GITHUB: "https://github.com/craftfast",
    GITHUB_REPO: "https://github.com/craftfast/craft",
    TWITTER: "https://x.com/craftdotfast",
    TWITTER_SUDHEER: "https://x.com/sudheerdotai",
    DISCORD: "https://discord.gg/YvPKxcCV",
    LINKEDIN: "https://linkedin.com/company/craftdotfast",
    YOUTUBE: "https://www.youtube.com/channel/UCImqQGc8t8t0koAsw7pscnQ",
    CAL_URL: "https://cal.com/craftfast/debug-with-sudheer",
    SUDHEER_WEBSITE: "https://sudheer.ai?utm_source=craft.fast&utm_medium=referral",
} as const;

export const EMAILS = {
    SUPPORT: "support@craft.fast",
    SALES: "sales@craft.fast",
    ENTERPRISE: "sales@craft.fast",
    LEGAL: "legal@craft.fast",
    HELLO: "hello@craft.fast",
    PRIVACY: "privacy@craft.fast",
    DPO: "dpo@craft.fast",
} as const;

/** Base URL for the main app */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.craft.fast";
/** Base URL for the accounts service (auth + billing) - now part of main app */
export const ACCOUNTS_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.craft.fast";
/** Base URL for the marketing website */
export const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL || "https://craft.fast";
/** Base URL for the docs pages (route in www) */
export const DOCS_URL = WEBSITE_URL + "/docs";
/** Base URL for the blog pages (route in www) */
export const BLOG_URL = WEBSITE_URL + "/blog";
