import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PublicKey, Transaction } from '@solana/web3.js';

const Coinflip = () => {
  const { publicKey, sendTransaction } = useWallet();
  const [betAmount, setBetAmount] = useState('');
  const [side, setSide] = useState('heads');
  const [result, setResult] = useState('');

  const handleCoinflip = async () => {
    if (!publicKey) {
      alert("Please connect your wallet!");
      return;
    }

    const outcome = Math.random() < 0.5 ? 'heads' : 'tails';

    if (outcome === side) {
      setResult('You won!');
      // Logic to send double tokens back
    } else {
      setResult('You lost!');
      // Logic to handle losing
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-4xl mb-8">Coinflip Game</h1>
      <WalletMultiButton className="mb-4" />
      {publicKey && (
        <div>
          <input
            type="number"
            placeholder="Bet Amount"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
            className="mb-4 p-2 rounded bg-gray-700"
          />
          <div className="mb-4">
            <button
              onClick={() => setSide('heads')}
              className={`p-2 rounded ${side === 'heads' ? 'bg-blue-500' : 'bg-gray-700'}`}
            >
              Heads
            </button>
            <button
              onClick={() => setSide('tails')}
              className={`ml-4 p-2 rounded ${side === 'tails' ? 'bg-blue-500' : 'bg-gray-700'}`}
            >
              Tails
            </button>
          </div>
          <button
            onClick={handleCoinflip}
            className="p-2 bg-green-500 rounded"
          >
            Flip Coin
          </button>
          {result && <div className="mt-4">{result}</div>}
        </div>
      )}
    </div>
  );
};

export default Coinflip;
