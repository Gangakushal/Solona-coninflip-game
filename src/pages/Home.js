import React from 'react';
import Coinflip from '../components/Coinflip';


export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
          <header className="w-full p-4 bg-gray-900 shadow-lg">
            <h1 className="text-center text-3xl font-bold">Solana Coinflip Game</h1>
          </header>
          <main className="flex-grow flex items-center justify-center">
            <Coinflip />
          </main>
          <footer className="w-full p-4 bg-gray-900 text-center">
            <p>© 2024 Coinflip Game. Powered by Solana Blockchain.</p>
          </footer>
        </div>
      );
    };

  


