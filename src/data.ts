export const RACES = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling', 'Aasimar', 'Goliath', 'Tabaxi', 'Custom...'];
export const CLASSES = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
export const SUBCLASSES: Record<string, string[]> = {
  Barbarian: ['Berserker', 'Totem Warrior', 'Ancestral Guardian', 'Storm Herald', 'Zealot', 'Beast', 'Wild Magic'],
  Bard: ['Lore', 'Valor', 'Glamour', 'Swords', 'Whispers', 'Creation', 'Eloquence'],
  Cleric: ['Knowledge', 'Life', 'Light', 'Nature', 'Tempest', 'Trickery', 'War', 'Death', 'Forge', 'Grave', 'Order', 'Peace', 'Twilight'],
  Druid: ['Land', 'Moon', 'Dreams', 'Shepherd', 'Spores', 'Stars', 'Wildfire'],
  Fighter: ['Champion', 'Battle Master', 'Eldritch Knight', 'Arcane Archer', 'Cavalier', 'Samurai', 'Psi Warrior', 'Rune Knight'],
  Monk: ['Open Hand', 'Shadow', 'Four Elements', 'Drunken Master', 'Kensei', 'Sun Soul', 'Mercy', 'Astral Self'],
  Paladin: ['Devotion', 'Ancients', 'Vengeance', 'Conquest', 'Redemption', 'Glory', 'Watchers', 'Oathbreaker'],
  Ranger: ['Hunter', 'Beast Master', 'Gloom Stalker', 'Horizon Walker', 'Monster Slayer', 'Fey Wanderer', 'Swarmkeeper'],
  Rogue: ['Thief', 'Assassin', 'Arcane Trickster', 'Inquisitive', 'Mastermind', 'Scout', 'Swashbuckler', 'Phantom', 'Soulknife'],
  Sorcerer: ['Draconic', 'Wild Magic', 'Divine Soul', 'Shadow', 'Storm', 'Aberrant Mind', 'Clockwork Soul'],
  Warlock: ['Archfey', 'Fiend', 'Great Old One', 'Celestial', 'Hexblade', 'Fathomless', 'Genie'],
  Wizard: ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation', 'War Magic', 'Bladesinging', 'Scribes']
};
export const ALIGNMENTS = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
export const BACKGROUNDS = ['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Hermit', 'Noble', 'Outlander', 'Sage', 'Sailor', 'Soldier', 'Urchin'];

export const PERSONALITY_TRAITS = [
  'I idolize a particular hero of my faith, and constantly refer to that person\'s deeds and example.',
  'I can stare down a hell hound without flinching.',
  'I fall in and out of love easily, and am always pursuing someone.',
  'I have a joke for every occasion, especially occasions where humor is inappropriate.',
  'I am incredibly slow to trust. Those who seem the fairest often have the most to hide.',
  'I take great pains to always look my best and follow the latest fashions.',
  'I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.',
  'I place no stock in wealthy or well-mannered folk. Money and manners won\'t save you from a hungry owlbear.'
];

export const IDEALS = [
  'Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)',
  'Independence. I am a free spirit – no one tells me what to do. (Chaotic)',
  'Fairness. We all do the work, so we all share in the rewards. (Lawful)',
  'Charity. I always try to help those in need, no matter what the personal cost. (Good)',
  'Might. If I become strong, I can take what I want – what I deserve. (Evil)',
  'Knowledge. The path to power and self-improvement is through knowledge. (Neutral)',
  'Destiny. Nothing and no one can steer me away from my higher calling. (Any)'
];

export const BONDS = [
  'I would die to recover an ancient relic of my faith that was lost long ago.',
  'I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.',
  'I owe my life to the priest who took me in when my parents died.',
  'My ill-gotten gains go to support my family.',
  'Someone saved my life on the battlefield. To this day, I will never leave a friend behind.',
  'I am trying to pay off an old debt I owe to a generous benefactor.',
  'I will do anything to protect the temple where I served.'
];

export const FLAWS = [
  'I judge others harshly, and myself even more severely.',
  'I am blinded by my unrelenting pursuit of wealth.',
  'I flee from the scene when things go wrong.',
  'I have a weakness for the vices of the city, especially hard drink.',
  'I secretly believe that everyone is beneath me.',
  'I turn tail and run when things out in the wild look too dangerous.',
  'I am dogmatic in my thoughts and philosophy.',
  'I have an insatiable desire for carnal pleasures.'
];

export const FIRST_NAMES = ['Aelar', 'Borin', 'Cora', 'Daven', 'Elysia', 'Fargrim', 'Gael', 'Hildr', 'Ilyana', 'Jorunn', 'Kael', 'Lyra', 'Morkal', 'Nia', 'Orin', 'Pelor', 'Quinn', 'Rael', 'Sariel', 'Tharivol', 'Uther', 'Vanya', 'Wulgar', 'Xylia', 'Yorick', 'Zasheir'];
export const LAST_NAMES = ['Amakiir', 'Battlehammer', 'Caskbone', 'Dawncaller', 'Evenwood', 'Frostbeard', 'Gemflower', 'Hornraven', 'Ironfist', 'Lighthollow', 'Moonbrook', 'Nightbreeze', 'Oakenheel', 'Proudmore', 'Riverdance', 'Shadowcloak', 'Thunderbrew', 'Underbough', 'Wildheart'];

export const SKILLS = [
  { name: 'Acrobatics', stat: 'DEX', statIndex: 1 },
  { name: 'Animal Handling', stat: 'WIS', statIndex: 4 },
  { name: 'Arcana', stat: 'INT', statIndex: 3 },
  { name: 'Athletics', stat: 'STR', statIndex: 0 },
  { name: 'Deception', stat: 'CHA', statIndex: 5 },
  { name: 'History', stat: 'INT', statIndex: 3 },
  { name: 'Insight', stat: 'WIS', statIndex: 4 },
  { name: 'Intimidation', stat: 'CHA', statIndex: 5 },
  { name: 'Investigation', stat: 'INT', statIndex: 3 },
  { name: 'Medicine', stat: 'WIS', statIndex: 4 },
  { name: 'Nature', stat: 'INT', statIndex: 3 },
  { name: 'Perception', stat: 'WIS', statIndex: 4 },
  { name: 'Performance', stat: 'CHA', statIndex: 5 },
  { name: 'Persuasion', stat: 'CHA', statIndex: 5 },
  { name: 'Religion', stat: 'INT', statIndex: 3 },
  { name: 'Sleight of Hand', stat: 'DEX', statIndex: 1 },
  { name: 'Stealth', stat: 'DEX', statIndex: 1 },
  { name: 'Survival', stat: 'WIS', statIndex: 4 }
];

export const generateName = () => {
  const first = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  const last = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
  return `${first} ${last}`;
};

export const getRandomItem = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const getRaceModifiers = (race: string): number[] => {
  // STR, DEX, CON, INT, WIS, CHA
  switch (race) {
    case 'Dragonborn': return [2, 0, 0, 0, 0, 1];
    case 'Dwarf': return [0, 0, 2, 0, 0, 0];
    case 'Elf': return [0, 2, 0, 0, 0, 0];
    case 'Gnome': return [0, 0, 0, 2, 0, 0];
    case 'Half-Elf': return [0, 1, 1, 0, 0, 2];
    case 'Halfling': return [0, 2, 0, 0, 0, 0];
    case 'Half-Orc': return [2, 0, 1, 0, 0, 0];
    case 'Human': return [1, 1, 1, 1, 1, 1];
    case 'Tiefling': return [0, 0, 0, 1, 0, 2];
    case 'Aasimar': return [0, 0, 0, 0, 1, 2];
    case 'Goliath': return [2, 0, 1, 0, 0, 0];
    case 'Tabaxi': return [0, 2, 0, 0, 0, 1];
    default: return [0, 0, 0, 0, 0, 0];
  }
};

export const getCharacterModifiers = (character: any) => {
  let statMods = [0, 0, 0, 0, 0, 0];
  let buffs: string[] = [];
  let debuffs: string[] = [];
  
  if (!character || character.name === '?') return { statMods, buffs, debuffs };

  // 1. Race
  const raceMods = getRaceModifiers(character.race);
  const statNames = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
  let raceModStrings = [];
  for (let i = 0; i < 6; i++) {
    statMods[i] += raceMods[i];
    if (raceMods[i] > 0) raceModStrings.push(`+${raceMods[i]} ${statNames[i]}`);
    if (raceMods[i] < 0) raceModStrings.push(`${raceMods[i]} ${statNames[i]}`);
  }
  if (raceModStrings.length > 0) {
    buffs.push(`Racial Heritage (${character.race}): ${raceModStrings.join(', ')}`);
  }

  // 2. Class
  switch (character.charClass) {
    case 'Barbarian': case 'Fighter': case 'Paladin':
      statMods[0] += 1; buffs.push(`Martial Focus (${character.charClass}): +1 STR`); break;
    case 'Rogue': case 'Ranger': case 'Monk':
      statMods[1] += 1; buffs.push(`Agility Focus (${character.charClass}): +1 DEX`); break;
    case 'Wizard':
      statMods[3] += 1; buffs.push(`Arcane Study (${character.charClass}): +1 INT`); break;
    case 'Cleric': case 'Druid':
      statMods[4] += 1; buffs.push(`Divine Connection (${character.charClass}): +1 WIS`); break;
    case 'Bard': case 'Sorcerer': case 'Warlock':
      statMods[5] += 1; buffs.push(`Charismatic Presence (${character.charClass}): +1 CHA`); break;
  }

  // 3. Background
  if (['Acolyte', 'Hermit', 'Sage'].includes(character.background)) {
    statMods[3] += 1; buffs.push(`Studious (${character.background}): +1 INT`);
  } else if (['Soldier', 'Outlander', 'Sailor', 'Folk Hero'].includes(character.background)) {
    statMods[2] += 1; buffs.push(`Hardy (${character.background}): +1 CON`);
  } else if (['Charlatan', 'Criminal', 'Entertainer', 'Urchin'].includes(character.background)) {
    statMods[1] += 1; buffs.push(`Street Smart (${character.background}): +1 DEX`);
  } else if (['Guild Artisan', 'Noble'].includes(character.background)) {
    statMods[5] += 1; buffs.push(`High Society (${character.background}): +1 CHA`);
  }

  // 4. Traits & Flaws
  if (character.personality && character.personality !== '?') {
    const pLower = character.personality.toLowerCase();
    if (pLower.includes('stare down') || pLower.includes('flinching')) {
      statMods[2] += 1; buffs.push(`Brave: +1 CON`);
    } else if (pLower.includes('faith') || pLower.includes('idolize') || pLower.includes('calm') || pLower.includes('trust')) {
      statMods[4] += 1; buffs.push(`Resolute: +1 WIS`);
    } else if (pLower.includes('love') || pLower.includes('joke') || pLower.includes('fashion') || pLower.includes('best')) {
      statMods[5] += 1; buffs.push(`Expressive: +1 CHA`);
    } else if (pLower.includes('owlbear') || pLower.includes('stock')) {
      statMods[4] += 1; buffs.push(`Pragmatic: +1 WIS`);
    } else {
      statMods[5] += 1; buffs.push(`Strong Personality: +1 CHA`);
    }
  }

  if (character.ideals && character.ideals !== '?') {
    const iLower = character.ideals.toLowerCase();
    if (iLower.includes('tradition') || iLower.includes('knowledge')) {
      statMods[3] += 1; buffs.push(`Driven by intellect: +1 INT`);
    } else if (iLower.includes('independence') || iLower.includes('free spirit')) {
      statMods[1] += 1; buffs.push(`Free Spirit: +1 DEX`);
    } else if (iLower.includes('fairness') || iLower.includes('charity') || iLower.includes('destiny')) {
      statMods[5] += 1; buffs.push(`Strong Conviction: +1 CHA`);
    } else if (iLower.includes('might') || iLower.includes('strong')) {
      statMods[0] += 1; buffs.push(`Might: +1 STR`);
    } else {
      statMods[4] += 1; buffs.push(`Idealistic: +1 WIS`);
    }
  }

  if (character.bonds && character.bonds !== '?') {
    const bLower = character.bonds.toLowerCase();
    if (bLower.includes('relic') || bLower.includes('priest')) {
      statMods[4] += 1; buffs.push(`Faithful Bond: +1 WIS`);
    } else if (bLower.includes('fleeced') || bLower.includes('debt')) {
      statMods[1] += 1; buffs.push(`On the Run: +1 DEX`);
    } else if (bLower.includes('family')) {
      statMods[2] += 1; buffs.push(`Provider: +1 CON`);
    } else if (bLower.includes('battlefield') || bLower.includes('protect')) {
      statMods[0] += 1; buffs.push(`Protector: +1 STR`);
    } else {
      statMods[2] += 1; buffs.push(`Strong Ties: +1 CON`);
    }
  }

  if (character.flaws && character.flaws !== '?') {
    const flawLower = character.flaws.toLowerCase();
    if (flawLower.includes('drink') || flawLower.includes('carnal')) {
      statMods[2] -= 1; debuffs.push(`Vice: -1 CON`);
    } else if (flawLower.includes('flee') || flawLower.includes('run') || flawLower.includes('turn tail')) {
      statMods[4] -= 1; debuffs.push(`Cowardice: -1 WIS`);
    } else if (flawLower.includes('wealth')) {
      statMods[4] -= 1; debuffs.push(`Greed: -1 WIS`);
    } else if (flawLower.includes('judge') || flawLower.includes('beneath me') || flawLower.includes('dogmatic')) {
      statMods[5] -= 1; debuffs.push(`Abrasive: -1 CHA`);
    } else {
      statMods[5] -= 1; debuffs.push(`Personal Flaw: -1 CHA`);
    }
  }

  return { statMods, buffs, debuffs };
};

export const CLASS_SKILLS: Record<string, string[]> = {
  Barbarian: ['Animal Handling', 'Athletics', 'Intimidation', 'Nature', 'Perception', 'Survival'],
  Bard: ['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'],
  Cleric: ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion'],
  Druid: ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival'],
  Fighter: ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival'],
  Monk: ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth'],
  Paladin: ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion'],
  Ranger: ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival'],
  Rogue: ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand', 'Stealth'],
  Sorcerer: ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion'],
  Warlock: ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion'],
  Wizard: ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion']
};

export const CLASS_SKILL_COUNTS: Record<string, number> = {
  Bard: 3, Ranger: 3, Rogue: 4
};

export const BACKGROUND_SKILLS: Record<string, string[]> = {
  Acolyte: ['Insight', 'Religion'],
  Charlatan: ['Deception', 'Sleight of Hand'],
  Criminal: ['Deception', 'Stealth'],
  Entertainer: ['Acrobatics', 'Performance'],
  'Folk Hero': ['Animal Handling', 'Survival'],
  'Guild Artisan': ['Insight', 'Persuasion'],
  Hermit: ['Medicine', 'Religion'],
  Noble: ['History', 'Persuasion'],
  Outlander: ['Athletics', 'Survival'],
  Sage: ['Arcana', 'History'],
  Sailor: ['Athletics', 'Perception'],
  Soldier: ['Athletics', 'Intimidation'],
  Urchin: ['Sleight of Hand', 'Stealth']
};

export const RACE_SKILLS: Record<string, string[]> = {
  Elf: ['Perception'],
  'Half-Orc': ['Intimidation'],
  Tabaxi: ['Perception', 'Stealth'],
  Goliath: ['Athletics']
};

export const generateRelevantSkills = (charClass: string, background: string, race: string): string[] => {
  const skills = new Set<string>();

  // Background Skills
  if (BACKGROUND_SKILLS[background]) {
    BACKGROUND_SKILLS[background].forEach(s => skills.add(s));
  }

  // Race Skills
  let extraRandomSkills = 0;
  if (RACE_SKILLS[race]) {
    RACE_SKILLS[race].forEach(s => skills.add(s));
  }
  if (race === 'Half-Elf') {
    extraRandomSkills += 2;
  }
  if (race === 'Human') {
    extraRandomSkills += 1;
  }

  // Class Skills
  const classSkillOptions = CLASS_SKILLS[charClass] || SKILLS.map(s => s.name);
  const count = CLASS_SKILL_COUNTS[charClass] || 2;
  const availableClassSkills = classSkillOptions.filter(s => !skills.has(s)).sort(() => 0.5 - Math.random());
  
  for (let i = 0; i < count && i < availableClassSkills.length; i++) {
    skills.add(availableClassSkills[i]);
  }

  // Extra Random Skills (for specific races that get any free skill choice)
  const remainingSkills = SKILLS.map(s => s.name).filter(s => !skills.has(s)).sort(() => 0.5 - Math.random());
  for (let i = 0; i < extraRandomSkills && i < remainingSkills.length; i++) {
    skills.add(remainingSkills[i]);
  }

  return Array.from(skills);
};
