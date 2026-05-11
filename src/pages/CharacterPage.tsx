import { useState, useEffect } from 'react';
import { RACES, CLASSES, SUBCLASSES, ALIGNMENTS, BACKGROUNDS, PERSONALITY_TRAITS, IDEALS, BONDS, FLAWS, SKILLS, generateName, getRandomItem, getCharacterModifiers, generateRelevantSkills } from '../data';
import { RefreshCw, Shield, Swords, Sparkles, Pencil, Check, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function CharacterPage() {
  const [char, setChar] = useState(() => {
    const saved = localStorage.getItem('dnd_character');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (!parsed.proficiencies) parsed.proficiencies = [];
      return parsed;
    }
    return {
      name: '?',
      race: '?',
      charClass: '?',
      subclass: '?',
      alignment: '?',
      background: '?',
      personality: '?',
      ideals: '?',
      bonds: '?',
      flaws: '?',
      proficiencies: [] as string[]
    };
  });
  const [customRace, setCustomRace] = useState(() => {
    return localStorage.getItem('dnd_customRace') || '';
  });
  const [stats, setStats] = useState<{ value: number; rolls: number[] }[]>(() => {
    const saved = localStorage.getItem('dnd_stats');
    if (saved) return JSON.parse(saved);
    return [];
  });
  const [isEditing, setIsEditing] = useState(true);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    localStorage.setItem('dnd_character', JSON.stringify(char));
  }, [char]);

  useEffect(() => {
    localStorage.setItem('dnd_customRace', customRace);
  }, [customRace]);

  const generate = () => {
    const newClass = getRandomItem(CLASSES);
    const subclasses = SUBCLASSES[newClass] || [];
    const newRace = getRandomItem(RACES.filter(r => r !== 'Custom...'));
    const newBackground = getRandomItem(BACKGROUNDS);

    const randomSkills = generateRelevantSkills(newClass, newBackground, newRace);

    setChar({
      name: generateName(),
      race: newRace,
      charClass: newClass,
      subclass: subclasses.length > 0 ? getRandomItem(subclasses) : 'None',
      alignment: getRandomItem(ALIGNMENTS),
      background: newBackground,
      personality: getRandomItem(PERSONALITY_TRAITS),
      ideals: getRandomItem(IDEALS),
      bonds: getRandomItem(BONDS),
      flaws: getRandomItem(FLAWS),
      proficiencies: randomSkills
    });
    setCustomRace('');
    setAnimateKey(k => k + 1);
  };

  // Generate on first load
  useEffect(() => {
    if (char.name === '?') {
      generate();
    }
  }, []);

  const handleChange = (field: keyof typeof char, value: string) => {
    setChar(prev => {
      const next = { ...prev, [field]: value };
      if (field === 'charClass') {
        const subclasses = SUBCLASSES[value] || [];
        next.subclass = subclasses.length > 0 ? subclasses[0] : 'None';
      }
      return next;
    });
  };

  const getDisplayRace = () => {
    if (char.race === 'Custom...') return customRace || 'Unknown Race';
    return char.race;
  };

  const toggleProficiency = (skillName: string) => {
    if (!isEditing) return;
    setChar(prev => {
      const profs = prev.proficiencies || [];
      const newProfs = profs.includes(skillName) 
        ? profs.filter(p => p !== skillName)
        : [...profs, skillName];
      return { ...prev, proficiencies: newProfs };
    });
  };

  const modifiers = getCharacterModifiers(char);
  const getSkillBonus = (skill: typeof SKILLS[0]) => {
    if (stats.length === 0) return '?';
    const baseValue = stats[skill.statIndex].value;
    const finalValue = baseValue + modifiers.statMods[skill.statIndex];
    let bonus = Math.floor((finalValue - 10) / 2);
    const isProficient = (char.proficiencies || []).includes(skill.name);
    if (isProficient) {
      bonus += 2; // +2 for level 1 proficiency
    }
    return bonus >= 0 ? `+${bonus}` : `${bonus}`;
  };

  return (
    <div className="p-4 space-y-6 text-[#3d2b1f]">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black uppercase tracking-tight text-[#5c4033]">Hero</h2>
        <div className="flex gap-2">
          {isEditing && (
            <button
              onClick={generate}
              className="flex items-center gap-2 bg-[#e8dfc5] hover:bg-[#c4b494] text-[#5c4033] px-3 py-2 rounded-full text-[10px] sm:text-xs font-bold transition-colors active:scale-95 uppercase tracking-wide font-sans shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reroll
            </button>
          )}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 bg-[#708238] hover:bg-[#5a6b2d] text-white px-4 py-2 rounded-full text-xs font-bold transition-colors active:scale-95 uppercase tracking-wide font-sans shadow-sm"
          >
            {isEditing ? <><Check className="w-3.5 h-3.5" /> Save</> : <><Pencil className="w-3.5 h-3.5" /> Edit</>}
          </button>
        </div>
      </div>

      <motion.div
        key={animateKey}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 150 }}
        className="bg-[#5c4033] text-[#f2ead3] rounded-3xl p-6 shadow-xl relative overflow-hidden"
      >
        {/* Background design */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 text-[#fffcf0]/10 pointer-events-none">
          <Shield className="w-48 h-48" strokeWidth={1} />
        </div>

        <div className="relative z-10 space-y-6">
          <div>
            <p className="font-sans font-bold text-xs tracking-widest uppercase mb-1 opacity-60">Name</p>
            {isEditing ? (
              <input 
                type="text" 
                value={char.name} 
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full bg-[#4a3428] border border-[#3d2b1f] text-white text-2xl font-black px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#708238] font-serif"
              />
            ) : (
              <h3 className="text-3xl font-black px-1 leading-tight">{char.name}</h3>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#4a3428] rounded-2xl p-4 border border-[#3d2b1f] shadow-inner">
              <p className="font-sans text-[10px] font-bold tracking-widest uppercase mb-1.5 flex items-center gap-1.5 opacity-60 text-[#a68b6d]">
                <Sparkles className="w-3 h-3 text-[#f2ead3]" /> Race
              </p>
              {isEditing ? (
                <div className="space-y-2">
                  <select 
                    value={char.race} 
                    onChange={(e) => handleChange('race', e.target.value)}
                    className="w-full bg-[#5c4033] border border-[#3d2b1f] text-white text-sm font-medium px-2 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#708238]"
                  >
                    {RACES.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                  {char.race === 'Custom...' && (
                    <input 
                      type="text"
                      placeholder="Type custom race..."
                      value={customRace}
                      onChange={(e) => setCustomRace(e.target.value)}
                      className="w-full bg-[#5c4033] border border-[#3d2b1f] text-white text-sm font-medium px-2 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#708238]"
                    />
                  )}
                </div>
              ) : (
                <p className="font-medium text-lg text-[#fffcf0]">{getDisplayRace()}</p>
              )}
            </div>
            
            <div className="bg-[#4a3428] rounded-2xl p-4 border border-[#3d2b1f] shadow-inner">
              <p className="font-sans text-[10px] font-bold tracking-widest uppercase mb-1.5 flex items-center gap-1.5 opacity-60 text-[#a68b6d]">
                <Swords className="w-3 h-3 text-[#f2ead3]" /> Class
              </p>
              {isEditing ? (
                <div className="space-y-2">
                  <select 
                    value={char.charClass} 
                    onChange={(e) => handleChange('charClass', e.target.value)}
                    className="w-full bg-[#5c4033] border border-[#3d2b1f] text-white text-sm font-medium px-2 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#708238]"
                  >
                    {CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {(SUBCLASSES[char.charClass] || []).length > 0 && (
                    <select 
                      value={char.subclass} 
                      onChange={(e) => handleChange('subclass', e.target.value)}
                      className="w-full bg-[#5c4033] border border-[#3d2b1f] text-[#a68b6d] text-xs font-medium px-2 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#708238]"
                    >
                      {SUBCLASSES[char.charClass].map(sc => <option key={sc} value={sc}>{sc}</option>)}
                    </select>
                  )}
                </div>
              ) : (
                <div className="leading-tight">
                  <p className="font-medium text-lg text-[#fffcf0]">{char.charClass}</p>
                  <p className="font-sans text-xs text-[#a68b6d] mt-0.5">{char.subclass}</p>
                </div>
              )}
            </div>
            
            <div className="bg-[#4a3428] rounded-2xl p-4 border border-[#3d2b1f] shadow-inner">
              <p className="font-sans text-[10px] font-bold tracking-widest uppercase mb-1.5 opacity-60 text-[#a68b6d]">Background</p>
              {isEditing ? (
                <select 
                  value={char.background} 
                  onChange={(e) => handleChange('background', e.target.value)}
                  className="w-full bg-[#5c4033] border border-[#3d2b1f] text-white text-xs font-medium px-2 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#708238]"
                >
                  {BACKGROUNDS.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              ) : (
                <p className="font-medium text-sm text-[#fffcf0]">{char.background}</p>
              )}
            </div>
            <div className="bg-[#4a3428] rounded-2xl p-4 border border-[#3d2b1f] shadow-inner">
              <p className="font-sans text-[10px] font-bold tracking-widest uppercase mb-1.5 opacity-60 text-[#a68b6d]">Alignment</p>
              {isEditing ? (
                <select 
                  value={char.alignment} 
                  onChange={(e) => handleChange('alignment', e.target.value)}
                  className="w-full bg-[#5c4033] border border-[#3d2b1f] text-white text-xs font-medium px-2 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#708238]"
                >
                  {ALIGNMENTS.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              ) : (
                <p className="font-medium text-sm text-[#fffcf0]">{char.alignment}</p>
              )}
            </div>
          </div>

          {/* Traits Section */}
          <div className="space-y-3 pt-2">
            <div className="bg-[#4a3428] rounded-2xl p-4 border border-[#3d2b1f] shadow-inner">
               <p className="font-sans text-[10px] font-bold tracking-widest uppercase mb-1.5 opacity-60 text-[#a68b6d]">Personality Trait</p>
               {isEditing ? (
                 <textarea 
                   value={char.personality} 
                   onChange={(e) => handleChange('personality', e.target.value)}
                   className="w-full bg-[#5c4033] border border-[#3d2b1f] text-[#f2ead3] text-sm font-medium px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#708238] min-h-[60px]"
                 />
               ) : (
                 <p className="font-medium text-sm text-[#fffcf0]">{char.personality}</p>
               )}
            </div>
            
            <div className="bg-[#4a3428] rounded-2xl p-4 border border-[#3d2b1f] shadow-inner">
               <p className="font-sans text-[10px] font-bold tracking-widest uppercase mb-1.5 opacity-60 text-[#a68b6d]">Ideal</p>
               {isEditing ? (
                 <textarea 
                   value={char.ideals} 
                   onChange={(e) => handleChange('ideals', e.target.value)}
                   className="w-full bg-[#5c4033] border border-[#3d2b1f] text-[#f2ead3] text-sm font-medium px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#708238] min-h-[60px]"
                 />
               ) : (
                 <p className="font-medium text-sm text-[#fffcf0]">{char.ideals}</p>
               )}
            </div>

            <div className="bg-[#4a3428] rounded-2xl p-4 border border-[#3d2b1f] shadow-inner">
               <p className="font-sans text-[10px] font-bold tracking-widest uppercase mb-1.5 opacity-60 text-[#a68b6d]">Bond</p>
               {isEditing ? (
                 <textarea 
                   value={char.bonds} 
                   onChange={(e) => handleChange('bonds', e.target.value)}
                   className="w-full bg-[#5c4033] border border-[#3d2b1f] text-[#f2ead3] text-sm font-medium px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#708238] min-h-[60px]"
                 />
               ) : (
                 <p className="font-medium text-sm text-[#fffcf0]">{char.bonds}</p>
               )}
            </div>

            <div className="bg-[#4a3428] rounded-2xl p-4 border border-[#3d2b1f] shadow-inner">
               <p className="font-sans text-[10px] font-bold tracking-widest uppercase mb-1.5 opacity-60 text-[#a68b6d]">Flaw</p>
               {isEditing ? (
                 <textarea 
                   value={char.flaws} 
                   onChange={(e) => handleChange('flaws', e.target.value)}
                   className="w-full bg-[#5c4033] border border-[#3d2b1f] text-[#f2ead3] text-sm font-medium px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#708238] min-h-[60px]"
                 />
               ) : (
                 <p className="font-medium text-sm text-[#fffcf0]">{char.flaws}</p>
               )}
            </div>
          </div>

          {/* Skills Section */}
          <div className="pt-2">
            <div className="bg-[#4a3428] rounded-2xl p-4 border border-[#3d2b1f] shadow-inner">
               <p className="font-sans text-[10px] font-bold tracking-widest uppercase mb-3 opacity-60 text-[#a68b6d] flex items-center justify-between">
                 Skills
                 {stats.length === 0 && <span className="text-[#9d4b31] italic">Roll stats to see bonuses</span>}
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                 {SKILLS.map(skill => {
                   const isProf = (char.proficiencies || []).includes(skill.name);
                   return (
                     <div 
                       key={skill.name} 
                       onClick={() => toggleProficiency(skill.name)}
                       className={`flex items-center justify-between p-2 rounded-xl border ${isEditing ? 'cursor-pointer hover:bg-[#5c4033]' : ''} ${isProf ? 'bg-[#708238]/20 border-[#708238]/50' : 'bg-[#5c4033]/50 border-transparent'} transition-colors`}
                     >
                       <div className="flex items-center gap-2">
                         <Star className={`w-4 h-4 ${isProf ? 'fill-[#708238] text-[#708238]' : 'text-[#3d2b1f]'}`} />
                         <span className={`text-sm font-medium ${isProf ? 'text-[#f2ead3]' : 'text-[#a68b6d]'}`}>{skill.name}</span>
                         <span className="text-[9px] text-[#a68b6d] bg-[#3d2b1f]/50 px-1.5 py-0.5 rounded font-sans tracking-wider">{skill.stat}</span>
                       </div>
                       <span className={`text-sm font-bold font-sans ${isProf ? 'text-[#708238]' : 'text-[#a68b6d]'}`}>{getSkillBonus(skill)}</span>
                     </div>
                   );
                 })}
               </div>
            </div>
          </div>
        </div>
      </motion.div>

      <p className="text-[#8b7d6b] text-sm text-center px-4 leading-relaxed italic">
        {isEditing ? "Customize your character's origins, or let fate decide." : "Destiny awaits your next adventure. Head to "}
        {!isEditing && <strong className="text-[#5c4033] font-bold">Stats</strong>}
        {!isEditing && " to roll their abilities!"}
      </p>
    </div>
  );
}
