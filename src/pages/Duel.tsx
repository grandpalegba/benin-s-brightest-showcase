import { useState, useMemo } from "react";
import { talents } from "@/data/talents";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const categories = [...new Set(talents.map((t) => t.category))];

const getDuelPairs = () => {
  const pairs: { category: string; talent1: typeof talents[0]; talent2: typeof talents[0] }[] = [];
  categories.forEach((cat) => {
    const catTalents = talents.filter((t) => t.category === cat);
    if (catTalents.length >= 2) {
      pairs.push({ category: cat, talent1: catTalents[0], talent2: catTalents[1] });
    }
  });
  return pairs;
};

const Duel = () => {
  const pairs = useMemo(getDuelPairs, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [totalPoints, setTotalPoints] = useState(1250);
  const [validated, setValidated] = useState(false);

  const pair = pairs[currentIndex];
  if (!pair) return null;

  const leftPercent = sliderValue;
  const rightPercent = 100 - sliderValue;

  const handleValidate = () => {
    setValidated(true);
    setTotalPoints((p) => p + Math.abs(sliderValue - 50) * 10);
  };

  const goTo = (dir: -1 | 1) => {
    const next = currentIndex + dir;
    if (next >= 0 && next < pairs.length) {
      setCurrentIndex(next);
      setSliderValue(50);
      setValidated(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center text-[#1a1c1c]">
      {/* Category pill */}
      <div className="mt-8 mb-10 md:mb-16">
        <span className="bg-[#1a1c1c] text-white px-8 py-3 md:px-12 md:py-4 rounded-full font-display text-sm md:text-lg font-bold tracking-[0.2em] uppercase">
          {pair.category}
        </span>
      </div>

      {/* Navigation arrows + Duel grid */}
      <div className="flex items-center w-full max-w-5xl px-4 mb-8 md:mb-12">
        <button
          onClick={() => goTo(-1)}
          disabled={currentIndex === 0}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-20 transition-opacity"
          aria-label="Duel précédent"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <div className="flex-1 grid grid-cols-2 gap-4 md:gap-10">
          {/* Candidate 1 */}
          <CandidateCard
            talent={pair.talent1}
            percent={leftPercent}
            dotColor="#006b3f"
          />
          {/* Candidate 2 */}
          <CandidateCard
            talent={pair.talent2}
            percent={rightPercent}
            dotColor="#ffd31a"
          />
        </div>

        <button
          onClick={() => goTo(1)}
          disabled={currentIndex === pairs.length - 1}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-20 transition-opacity"
          aria-label="Duel suivant"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Voting track */}
      <div className="w-full max-w-lg md:max-w-2xl px-6 mb-6">
        <div className="relative w-full h-6 md:h-8 rounded-full overflow-visible">
          {/* Green + Yellow track */}
          <div className="absolute inset-0 flex rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-200"
              style={{ width: `${leftPercent}%`, backgroundColor: "#006b3f" }}
            />
            <div
              className="h-full transition-all duration-200"
              style={{ width: `${rightPercent}%`, backgroundColor: "#ffd31a" }}
            />
          </div>
          {/* Red cursor */}
          <input
            type="range"
            min={0}
            max={100}
            value={sliderValue}
            onChange={(e) => !validated && setSliderValue(Number(e.target.value))}
            disabled={validated}
            className="duel-slider absolute inset-0 w-full h-full appearance-none bg-transparent cursor-pointer z-10 disabled:cursor-default"
          />
        </div>
      </div>

      {/* Points */}
      <div className="flex flex-col items-center gap-4 mb-10">
        <h3 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="tracking-widest">{totalPoints}</span> PTS
        </h3>
        <button
          onClick={handleValidate}
          disabled={validated}
          className="bg-[#1a1c1c] text-white px-12 py-4 md:px-20 md:py-5 rounded-full font-display text-base md:text-xl font-bold tracking-widest uppercase hover:bg-zinc-700 transition-colors active:scale-95 duration-200 disabled:opacity-50"
        >
          {validated ? "VALIDÉ ✓" : "JE VALIDE"}
        </button>
      </div>

      {/* Duel counter */}
      <p className="text-sm text-gray-400 mb-8 font-sans">
        Duel {currentIndex + 1} / {pairs.length}
      </p>

      {/* Custom slider styles */}
      <style>{`
        .duel-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #bd0020;
          border: 4px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .duel-slider::-moz-range-thumb {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #bd0020;
          border: 4px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .duel-slider::-webkit-slider-runnable-track {
          background: transparent;
        }
        .duel-slider::-moz-range-track {
          background: transparent;
        }
        @media (min-width: 768px) {
          .duel-slider::-webkit-slider-thumb {
            width: 36px;
            height: 36px;
          }
          .duel-slider::-moz-range-thumb {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </div>
  );
};

const CandidateCard = ({
  talent,
  percent,
  dotColor,
}: {
  talent: typeof talents[0];
  percent: number;
  dotColor: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative group cursor-pointer w-full aspect-[3/4] mb-4 md:mb-6">
      <div className="w-full h-full rounded-2xl overflow-hidden relative">
        <img
          alt={talent.name}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          src={talent.image}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-md rounded-full p-3 md:p-5 group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 md:w-10 md:h-10 text-white fill-white" />
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2 mb-1">
      <span
        className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full"
        style={{ backgroundColor: dotColor }}
      />
      <h2 className="font-display font-bold text-lg md:text-2xl tracking-wider uppercase">
        {talent.name.split(" ")[0]}
      </h2>
    </div>
    <div className="font-display text-2xl md:text-4xl font-extrabold">
      {Math.round(percent)}%
    </div>
  </div>
);

export default Duel;
