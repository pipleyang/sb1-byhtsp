import React from 'react';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Cases } from './components/Cases';
import { Solutions } from './components/Solutions';
import { Team } from './components/Team';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Hero />
      <Products />
      <Cases />
      <Solutions />
      <Team />
      <Contact />
      
      <footer className="bg-gray-900 text-white py-8 px-6 text-center">
        <p className="text-sm text-gray-400">© 2024 三体网络科技有限公司. 保留所有权利.</p>
      </footer>
    </div>
  );
}

export default App;