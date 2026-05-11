import { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { BookOpen, Sparkles, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import Markdown from 'react-markdown';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function StoryPage() {
  const [story, setStory] = useState(() => localStorage.getItem('dnd_story') || '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem('dnd_story', story);
  }, [story]);

  const generateStory = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const savedChar = localStorage.getItem('dnd_character');
      const customRace = localStorage.getItem('dnd_customRace') || '';
      
      let charDetails = "A mysterious adventurer";
      if (savedChar) {
        const char = JSON.parse(savedChar);
        const race = char.race === 'Custom...' ? customRace : char.race;
        const subclassText = char.subclass && char.subclass !== 'None' ? ` (${char.subclass})` : '';
        let traits = '';
        if (char.personality && char.personality !== '?') {
          traits += `\nPersonality: ${char.personality}\nIdeal: ${char.ideals}\nBond: ${char.bonds}\nFlaw: ${char.flaws}`;
        }
        charDetails = `${char.name}, a ${char.alignment} ${race} ${char.charClass}${subclassText}. Their background is ${char.background}.${traits}`;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are a creative Dungeon Master. Write a short, engaging, and atmospheric opening to a story (about 3-4 sentences, one paragraph) for a Dungeons & Dragons campaign featuring this character: ${charDetails}. Focus on their immediate surroundings, a compelling hook, and the mood. Set the scene as if they are about to embark on their adventure. Do not include any meta-text, just the story.`
      });

      setStory(response.text || 'The mists cloud your fate. Try rolling again.');
    } catch (err) {
      console.error(err);
      setError('The weave is disrupted. Failed to generate story.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 space-y-6 text-[#3d2b1f]">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black uppercase tracking-tight text-[#5c4033]">Backstory</h2>
      </div>

      <div className="bg-[#4a3428] rounded-3xl border-4 border-[#3d2b1f] flex flex-col p-6 relative shadow-inner overflow-hidden min-h-[300px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex flex-wrap gap-8 p-8 overflow-hidden items-center justify-center">
          <BookOpen className="w-32 h-32 rotate-12 text-white" />
          <Sparkles className="w-24 h-24 -rotate-12 text-white" />
        </div>
        
        <div className="relative z-10 flex flex-col h-full flex-1">
          <p className="text-[#a68b6d] font-bold mb-4 uppercase tracking-[0.2em] font-sans text-xs text-center">
            A New Beginning
          </p>

          <div className="flex-1 flex flex-col justify-center">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center text-[#f2ead3] space-y-4">
                <Loader2 className="w-8 h-8 animate-spin opacity-50" />
                <p className="font-sans text-xs uppercase tracking-widest opacity-60">Consulting the Oracles...</p>
              </div>
            ) : story ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#f2ead3] text-lg leading-relaxed italic border-l-2 border-[#708238] pl-4 py-2"
              >
                <div className="markdown-body text-[#f2ead3]">
                  <Markdown>{story}</Markdown>
                </div>
              </motion.div>
            ) : (
              <div className="text-center text-[#a68b6d] font-medium italic">
                <p>Your tale has yet to be written.</p>
              </div>
            )}
            
            {error && (
              <p className="text-[#9d4b31] font-bold mt-4 text-center text-sm font-sans uppercase tracking-widest bg-[#9d4b31]/10 py-2 rounded-lg">{error}</p>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={generateStory}
        disabled={isLoading}
        className="w-full h-16 flex items-center justify-center gap-3 bg-[#fffcf0] hover:bg-[#f9f5e8] active:bg-[#e8dfc5] text-[#5c4033] rounded-2xl border-2 border-[#c4b494] font-black active:scale-[0.98] transition-all shadow-sm uppercase tracking-widest font-sans disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Sparkles className="w-5 h-5 text-[#708238]" />
        {story ? 'Rewrite Destiny' : 'Generate Origin'}
      </button>

    </div>
  );
}
