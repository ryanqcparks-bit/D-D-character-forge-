/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Dices, UserCircle2, Swords, BookOpen } from 'lucide-react';
import CharacterPage from './pages/CharacterPage';
import StatsPage from './pages/StatsPage';
import StoryPage from './pages/StoryPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<'character' | 'stats' | 'story'>('character');

  const NavItem = ({ tab, icon: Icon, label }: { tab: typeof activeTab, icon: any, label: string }) => {
    const isActive = activeTab === tab;
    return (
      <button
        onClick={() => setActiveTab(tab)}
        className={`flex flex-col items-center justify-center w-24 h-16 transition-all duration-300 relative ${
          isActive ? 'text-[#708238]' : 'text-[#8b7d6b] hover:text-[#5c4033]'
        }`}
      >
        {/* Highlight pill */}
        {isActive && (
          <div className="absolute inset-0 bg-[#708238]/10 rounded-2xl -z-10 transition-opacity" />
        )}
        <Icon className={`w-6 h-6 mb-1.5 transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`} />
        <span className="text-[10px] font-bold tracking-wide uppercase">{label}</span>
      </button>
    );
  };

  return (
    <div className="flex justify-center min-h-screen bg-[#3d2b1f] font-sans">
      <div className="w-full max-w-md bg-[#f2ead3] shadow-2xl min-h-screen flex flex-col relative overflow-hidden select-none">

        <header className="bg-[#f2ead3] border-b-2 border-[#c4b494] px-6 py-4 sticky top-0 z-20 flex flex-col">
           <h1 className="text-3xl font-black tracking-tight text-[#5c4033] font-serif uppercase tracking-widest text-center">CHARACTER FORGE</h1>
        </header>

        <main className="flex-1 overflow-y-auto pb-28 h-full scroll-smooth font-serif">
          {activeTab === 'character' && <CharacterPage />}
          {activeTab === 'stats' && <StatsPage />}
          {activeTab === 'story' && <StoryPage />}
        </main>

        <div className="absolute bottom-6 left-4 right-4 z-20">
          <nav className="bg-[#fffcf0] border-2 border-[#c4b494] rounded-3xl flex justify-around px-2 shadow-xl">
             <NavItem tab="character" icon={UserCircle2} label="Hero" />
             <NavItem tab="stats" icon={Swords} label="Stats" />
             <NavItem tab="story" icon={BookOpen} label="Story" />
          </nav>
        </div>

      </div>
    </div>
  );
}
