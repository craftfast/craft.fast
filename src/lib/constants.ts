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
} as const;

export const EMAILS = {
    SUPPORT: "support@craft.fast",
    SALES: "sales@craft.fast",
    ENTERPRISE: "enterprise@craft.fast",
    LEGAL: "legal@craft.fast",
    HELLO: "hello@craft.fast",
    PRIVACY: "privacy@craft.fast",
    DPO: "dpo@craft.fast",
} as const;

/** Base URL for the main app */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://craft.fast";
/** Base URL for the docs site */
export const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL || "https://docs.craft.fast";
/** Base URL for the marketing website */
export const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL || "https://www.craft.fast";
