import { useState, useEffect } from 'react';
import { Dices, TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';
import { getCharacterModifiers } from '../data';

export default function StatsPage() {
  const [stats, setStats] = useState<{ value: number; rolls: number[] }[]>(() => {
    const saved = localStorage.getItem('dnd_stats');
    if (saved) return JSON.parse(saved);
    return [];
  });
  const [method, setMethod] = useState<'4d6' | 'standard'>(() => {
    return (localStorage.getItem('dnd_stats_method') as '4d6' | 'standard') || '4d6';
  });
  const [character, setCharacter] = useState<any>(() => {
    const saved = localStorage.getItem('dnd_character');
    try {
      if (saved) return JSON.parse(saved);
    } catch {}
    return null;
  });

  useEffect(() => {
    localStorage.setItem('dnd_stats', JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem('dnd_stats_method', method);
  }, [method]);

  const generateStats = () => {
    if (method === 'standard') {
      setStats([
        { value: 15, rolls: [] },
        { value: 14, rolls: [] },
        { value: 13, rolls: [] },
        { value: 12, rolls: [] },
        { value: 10, rolls: [] },
        { value: 8, rolls: [] },
      ]);
      return;
    }

    const newStats = [];
    for (let i = 0; i < 6; i++) {
      const rolls = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
      ];
      rolls.sort((a, b) => b - a); // Descending
      const top3 = rolls.slice(0, 3);
      const sum = top3.reduce((a, b) => a + b, 0);
      newStats.push({ value: sum, rolls: rolls });
    }
    setStats(newStats);
  };

  const modifiers = character ? getCharacterModifiers(character) : { statMods: [0,0,0,0,0,0], buffs: [], debuffs: [] };
  const statNames = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

  return (
    <div className="p-4 space-y-6 text-[#3d2b1f]">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black uppercase tracking-tight text-[#5c4033]">Ability Scores</h2>
        <div className="flex bg-[#fffcf0] rounded-full p-1 border border-[#c4b494] shadow-sm">
           <button
             className={`px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-200 font-sans ${method === '4d6' ? 'bg-[#708238] text-white shadow' : 'text-[#8b7d6b] hover:text-[#5c4033]'}`}
             onClick={() => setMethod('4d6')}
           >
             4d6 drop 1
           </button>
           <button
             className={`px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-200 font-sans ${method === 'standard' ? 'bg-[#708238] text-white shadow' : 'text-[#8b7d6b] hover:text-[#5c4033]'}`}
             onClick={() => setMethod('standard')}
           >
             Standard
           </button>
        </div>
      </div>

      <button
        onClick={generateStats}
        className="w-full h-16 flex items-center justify-center gap-3 bg-[#fffcf0] hover:bg-[#f9f5e8] active:bg-[#e8dfc5] text-[#5c4033] rounded-2xl border-2 border-[#c4b494] font-black active:scale-[0.98] transition-all shadow-sm uppercase tracking-widest font-sans"
      >
        <Dices className="w-5 h-5 text-[#708238]" />
        Generate Array
      </button>

      {stats.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, i) => {
            const mod = modifiers.statMods[i];
            const finalValue = stat.value + mod;
            const dndMod = Math.floor((finalValue - 10) / 2);
            const dndModStr = dndMod >= 0 ? `+${dndMod}` : `${dndMod}`;

            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 200, damping: 15 }}
                key={i + '-' + stat.value}
                className="bg-[#fffcf0] border border-[#c4b494] rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden"
              >
                <p className="text-[#8b7d6b] font-sans text-[10px] font-bold tracking-widest uppercase mb-1">{statNames[i]}</p>
                
                <div className="flex items-center justify-center relative w-full">
                  <p className="text-4xl font-black text-[#3d2b1f]">{finalValue}</p>
                  {mod !== 0 && (
                    <span className={`absolute right-2 sm:right-6 top-1 text-[10px] font-bold ${mod > 0 ? 'text-[#708238]' : 'text-[#9d4b31]'}`}>
                      {mod > 0 ? `+${mod}` : mod}
                    </span>
                  )}
                </div>
                
                <p className={`text-xs font-bold mt-0.5 ${dndMod >= 0 ? 'text-[#708238]' : 'text-[#9d4b31]'}`}>
                  {dndModStr}
                </p>
                
                <div className="h-4 mt-1.5 flex items-center">
                  {stat.rolls.length > 0 && (
                    <div className="text-[9px] text-[#8b7d6b] font-sans tracking-widest flex gap-1 bg-[#f9f5e8] border border-[#e8dfc5] px-1.5 py-[1px] rounded-full">
                      {stat.rolls.map((r, ri) => (
                        <span key={ri} className={ri === 3 ? 'line-through opacity-40 text-[#9d4b31]' : 'text-[#5c4033] font-bold'}>
                          {r}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {stats.length > 0 && (modifiers.buffs.length > 0 || modifiers.debuffs.length > 0) && (
        <div className="space-y-3 pt-4">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a68b6d] pl-1 font-sans text-center">Character Influences</h3>
          {modifiers.buffs.map((buff, i) => (
             <div key={'buff-'+i} className="bg-[#f9f5e8] border border-[#708238]/30 p-3 flex flex-col justify-center rounded-xl shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#708238]/60"></div>
                <div className="flex items-start gap-3 pl-2">
                  <TrendingUp className="w-4 h-4 text-[#708238] mt-0.5 flex-shrink-0" />
                  <p className="text-xs font-medium text-[#3d2b1f] leading-relaxed">{buff}</p>
                </div>
             </div>
          ))}
          {modifiers.debuffs.map((debuff, i) => (
             <div key={'debuff-'+i} className="bg-[#f9f5e8] border border-[#9d4b31]/30 p-3 flex flex-col justify-center rounded-xl shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#9d4b31]/60"></div>
                <div className="flex items-start gap-3 pl-2">
                  <TrendingDown className="w-4 h-4 text-[#9d4b31] mt-0.5 flex-shrink-0" />
                  <p className="text-xs font-medium text-[#3d2b1f] leading-relaxed">{debuff}</p>
                </div>
             </div>
          ))}
        </div>
      )}

      {stats.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-[#8b7d6b] space-y-4">
           <div className="bg-[#fffcf0] border border-[#e8dfc5] p-4 rounded-full shadow-sm">
              <Dices className="w-8 h-8 text-[#c4b494]" />
           </div>
           <p className="text-center px-8 text-sm italic">
             Roll to create your core attributes. <br/> Assign them to any skill you like!
           </p>
        </div>
      )}
    </div>
  );
}
