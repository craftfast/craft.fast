/**
 * Client-side auth for marketing website (www)
 *
 * Points to the shared accounts service for session checking.
 * In production, requires cookie domain to be set to `.craft.fast`
 * for cross-subdomain session sharing.
 */

import { createAuthClient } from "better-auth/react";

const ACCOUNTS_URL =
    process.env.NEXT_PUBLIC_ACCOUNTS_URL || "http://localhost:3003";

export const authClient = createAuthClient({
    baseURL: ACCOUNTS_URL,
    fetchOptions: {
        credentials: "include",
    },
});

export const { useSession, signOut } = authClient;
