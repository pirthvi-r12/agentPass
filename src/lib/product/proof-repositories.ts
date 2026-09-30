/**
 * Canonical repository roles for RepoDiet product proof.
 * The E2E fixture is regression-only — never the primary customer proof.
 */

import {
  PROJECT_GITHUB_OWNER,
  PROJECT_GITHUB_REPO,
  PROJECT_GITHUB_URL,
} from "@/lib/brand/project-identity";
import { DEMO_REPO_NAME, DEMO_REPO_OWNER, DEMO_REPO_URL } from "@/lib/demo/constants";

export type ProofRepositoryRole =
  | "primary_complex_proof"
  | "dogfood_proof"
  | "regression_fixture_only";

export interface ProofRepository {
  role: ProofRepositoryRole;
  owner: string;
  name: string;
  url: string;
  purpose: string;
}

export const PRIMARY_PROOF: ProofRepository = {
  role: "primary_complex_proof",
  owner: PROJECT_GITHUB_OWNER,
  name: PROJECT_GITHUB_REPO,
  url: PROJECT_GITHUB_URL,
  purpose: "Primary proof — this deployment's application repository.",
};

export const AGENTPASS_DOGFOOD: ProofRepository = {
  role: "dogfood_proof",
  owner: PROJECT_GITHUB_OWNER,
  name: PROJECT_GITHUB_REPO,
  url: PROJECT_GITHUB_URL,
  purpose: "Dogfood proof — RepoDiet analyzes and cleans its own codebase.",
};

export const E2E_REGRESSION_FIXTURE: ProofRepository = {
  role: "regression_fixture_only",
  owner: DEMO_REPO_OWNER,
  name: DEMO_REPO_NAME,
  url: DEMO_REPO_URL,
  purpose:
    "Bundled demo fixture — timeouts, idempotency, and protected-path regression only. Not a customer success story.",
};

export const PROOF_REPOSITORIES: ProofRepository[] = [
  PRIMARY_PROOF,
  AGENTPASS_DOGFOOD,
  E2E_REGRESSION_FIXTURE,
];

export function isRegressionFixtureOnly(owner: string, name: string): boolean {
  return (
    owner.toLowerCase() === E2E_REGRESSION_FIXTURE.owner.toLowerCase() &&
    name.toLowerCase() === E2E_REGRESSION_FIXTURE.name.toLowerCase()
  );
}

export function isPrimaryComplexProof(owner: string, name: string): boolean {
  return (
    owner.toLowerCase() === PRIMARY_PROOF.owner.toLowerCase() &&
    name.toLowerCase() === PRIMARY_PROOF.name.toLowerCase()
  );
}

/** @deprecated Use PRIMARY_PROOF */
export const MERIDIAN_PROOF = PRIMARY_PROOF;
