import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL!;

export const client = createPublicClient({
  chain: sepolia,
  transport: http(rpcUrl),
});
