/**
 * Client-side auth for marketing website (www)
 *
 * Points to the main app's auth API (Better Auth is served from apps/app).
 */

import { createAuthClient } from "better-auth/react";

const APP_URL =
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const authClient = createAuthClient({
    baseURL: APP_URL,
    fetchOptions: {
        credentials: "include",
    },
});

export const { useSession, signOut } = authClient;
