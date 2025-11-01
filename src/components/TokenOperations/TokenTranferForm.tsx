// import { useState } from 'react';
// import { useConnection, useWallet } from '@solana/wallet-adapter-react';
// import { getOrCreateAssociatedTokenAccount, transfer } from '@solana/spl-token';
// import { PublicKey, Transaction } from '@solana/web3.js';
// import { useTokenContext } from '../../contexts/TokenContext';
// import { useNotificationStore } from '../../stores/useNotificationStore';

// export function TokenTransferForm() {
//   const { connection } = useConnection();
//   const { publicKey, sendTransaction } = useWallet();
//   const { mintAddress, decimals } = useTokenContext();
//   const [recipient, setRecipient] = useState('');
//   const [amount, setAmount] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const { notify } = useNotificationStore();

//   const handleTransfer = async () => {
//     if (!publicKey || !mintAddress) {
//       notify('error', 'Wallet not connected or token not selected');
//       return;
//     }

//     if (!recipient || !PublicKey.isOnCurve(recipient)) {
//       notify('error', 'Invalid recipient address');
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const mint = new PublicKey(mintAddress);
//       const toWallet = new PublicKey(recipient);

//       const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
//         connection,
//         publicKey,
//         mint,
//         publicKey
//       );

//       const toTokenAccount = await getOrCreateAssociatedTokenAccount(
//         connection,
//         publicKey,
//         mint,
//         toWallet
//       );

//       const transaction = new Transaction().add(
//         await transfer(
//           connection,
//           publicKey,
//           fromTokenAccount.address,
//           toTokenAccount.address,
//           publicKey,
//           BigInt(Number(amount) * BigInt(10 ** decimals))
//         )
//       );

//       const signature = await sendTransaction(transaction, connection);
//       await connection.confirmTransaction(signature, 'confirmed');
//       notify('success', 'Transfer completed successfully!');
//     } catch (error) {
//       notify('error', `Transfer failed: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="card bg-base-200 shadow-xl">
//       <div className="card-body">
//         <h2 className="card-title">Transfer Tokens</h2>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Token Mint Address</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter token mint address"
//             className="input input-bordered"
//             value={mintAddress}
//             onChange={(e) => setMintAddress(e.target.value)}
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Recipient Address</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter recipient wallet address"
//             className="input input-bordered"
//             value={recipient}
//             onChange={(e) => setRecipient(e.target.value)}
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Amount</span>
//           </label>
//           <input
//             type="number"
//             placeholder="Enter amount to send"
//             className="input input-bordered"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//         </div>
//         <div className="card-actions justify-end mt-4">
//           <button
//             onClick={handleTransfer}
//             className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
//             disabled={isLoading || !mintAddress || !recipient || !amount}
//           >
//             {isLoading ? 'Processing...' : 'Transfer'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }