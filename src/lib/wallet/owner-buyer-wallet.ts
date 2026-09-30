/**
 * OKX Agentic Wallet buyer address for owner@example.com.
 * Used as the default test-mode payer on Fix & PR (no on-chain transfer in trusted test quotes).
 * Override with NEXT_PUBLIC_REPODIET_OWNER_BUYER_WALLET when needed.
 */
export const REPODIET_OWNER_BUYER_WALLET =
  process.env.NEXT_PUBLIC_REPODIET_OWNER_BUYER_WALLET?.trim() ||
  "0x0000000000000000000000000000000000000000";
