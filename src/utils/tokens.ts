import { PublicKey } from '@solana/web3.js';

export function validateSolanaAddress(address: string): boolean {
  try {
    new PublicKey(address);
    return true;
  } catch {
    return false;
  }
}

export function formatTokenAmount(amount: number, decimals: number): string {
  return (amount / 10 ** decimals).toLocaleString(undefined, {
    maximumFractionDigits: decimals,
  });
}