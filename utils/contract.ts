import abi from "../abi.json";
import { client } from "./client";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

export async function readMessage(): Promise<string> {
  const msg = await client.readContract({
    address: contractAddress,
    abi: abi as any,
    functionName: "message",
  });
  return msg as string;
}
