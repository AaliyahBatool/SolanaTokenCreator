// import {
//   getOrCreateAssociatedTokenAccount,
//   mintTo,
// } from "@solana/spl-token";
// import {
//   useWallet,
//   useConnection,
// } from "@solana/wallet-adapter-react";
// import { useState } from "react";
// import { Keypair, PublicKey } from "@solana/web3.js";

// export const TokenMintForm = ({ mint }: { mint: Keypair }) => {
//   const { publicKey, sendTransaction } = useWallet();
//   const { connection } = useConnection();

//   const [amount, setAmount] = useState("1");
//   const [decimals, setDecimals] = useState("0");

//   const handleMint = async () => {
//     if (!publicKey) {
//       alert("Please connect your wallet first.");
//       return;
//     }

//     try {
//       // 1. Create or get associated token account for receiver
//       const tokenAccount = await getOrCreateAssociatedTokenAccount(
//         connection,
//         mint, // payer (mint authority in this context)
//         mint.publicKey,
//         publicKey
//       );

//       // 2. Convert amount and decimals to BigInt
//       const amountToMint = BigInt(amount) * 10n ** BigInt(decimals);

//       // 3. Mint the tokens
//       await mintTo(
//         connection,
//         mint,
//         mint.publicKey,
//         tokenAccount.address,
//         mint.publicKey, // signer
//         amountToMint
//       );

//       alert(`✅ Successfully minted ${amount} token(s)!`);
//     } catch (err) {
//       console.error("Mint error:", err);
//       alert("❌ Minting failed: " + err.message);
//     }
//   };

//   return (
//     <div className="p-4 border rounded-md max-w-md mx-auto bg-white shadow">
//       <h2 className="text-xl font-semibold mb-2">Mint Tokens</h2>
//       <input
//         type="number"
//         className="border px-2 py-1 mb-2 w-full"
//         placeholder="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <input
//         type="number"
//         className="border px-2 py-1 mb-2 w-full"
//         placeholder="Decimals (e.g. 0)"
//         value={decimals}
//         onChange={(e) => setDecimals(e.target.value)}
//       />
//       <button
//         onClick={handleMint}
//         className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
//       >
//         Mint Token
//       </button>
//     </div>
//   );
// };
