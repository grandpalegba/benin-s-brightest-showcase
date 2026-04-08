import { talents } from "@/data/talents";
import TalentCard from "@/components/TalentCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border py-12 text-center">
        <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">
          🎭 Les 32 Talents
        </h1>
        <p className="mx-auto mt-3 max-w-xl font-sans text-lg text-muted-foreground">
          BeninEase — Célébrer la diversité et le génie béninois
        </p>
      </header>

      {/* Grid */}
      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {talents.map((talent) => (
            <TalentCard key={talent.name} talent={talent} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center font-sans text-sm text-muted-foreground">
        © 2026 BeninEase — Tous droits réservés
      </footer>
    </div>
  );
};

export default Index;
