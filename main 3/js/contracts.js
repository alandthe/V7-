import { CONTRACT_ADDRESSES } from './config.js';

export const CatSwapDEX_ABI = [
  // Include your full ABI here from previous message
  // (All constructor, swap, liquidity, and view functions)
];

export const ERC20_ABI = [
  // Standard ERC20 ABI from previous message
];

export function getContract(address, abi, signer) {
  return new ethers.Contract(address, abi, signer);
}
