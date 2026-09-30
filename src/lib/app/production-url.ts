import {
  PROJECT_APP_ORIGIN,
  PROJECT_GITHUB_SLUG,
  PROJECT_GITHUB_URL,
} from "@/lib/brand/project-identity";

/** Canonical deployment when env vars are unset (local dev). */
export const REPODIET_PRODUCTION_FALLBACK_URL = PROJECT_APP_ORIGIN;

export const REPODIET_GITHUB_REPO_URL = PROJECT_GITHUB_URL;

export { PROJECT_GITHUB_SLUG };
