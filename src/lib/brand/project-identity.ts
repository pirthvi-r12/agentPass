import { DEMO_REPO_NAME, DEMO_REPO_OWNER, DEMO_REPO_URL } from "@/lib/demo/constants";

/** Override in `.env.local` — see `.env.example`. */
export const PROJECT_GITHUB_OWNER =
  process.env.NEXT_PUBLIC_GITHUB_OWNER?.trim() ||
  process.env.REPODIET_GITHUB_OWNER?.trim() ||
  "Pirthviraj";

export const PROJECT_GITHUB_REPO =
  process.env.NEXT_PUBLIC_GITHUB_REPO?.trim() ||
  process.env.REPODIET_GITHUB_REPO?.trim() ||
  "agentPass";

export const PROJECT_GITHUB_SLUG = `${PROJECT_GITHUB_OWNER}/${PROJECT_GITHUB_REPO}`;

export const PROJECT_GITHUB_URL = `https://github.com/${PROJECT_GITHUB_SLUG}`;

function resolveProjectAppOrigin(): string {
  const explicit =
    process.env.NEXT_PUBLIC_APP_URL?.trim() ||
    process.env.REPODIET_PRODUCTION_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
  return "http://localhost:3000";
}

export const PROJECT_APP_ORIGIN = resolveProjectAppOrigin();

/** Public example repo for API docs and tool manifest samples. */
export const PROJECT_EXAMPLE_REPO_URL = DEMO_REPO_URL;
export const PROJECT_EXAMPLE_REPO_SLUG = `${DEMO_REPO_OWNER}/${DEMO_REPO_NAME}`;
