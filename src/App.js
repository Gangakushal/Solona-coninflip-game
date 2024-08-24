import React from 'react';
import Coinflip from './components/Coinflip';
import Home from './pages/Home';
import logo from './assets/images/logo.png';

document.title = "Solana-coinflip-game...";
let link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = logo;

export default function App() {
  return (
    <div className="App">
      <Coinflip />
      <Home/>
    </div>
  );
}

