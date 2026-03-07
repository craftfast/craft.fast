import nextConfig from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
    ...nextConfig,
    ...nextTypescript,
    {
        ignores: ["node_modules/**", ".next/**"],
    },
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "prefer-const": "warn",
        },
    },
];

export default eslintConfig;
