import HeroSection from "@/components/hero-section-four";
import Etape1 from "@/components/etape1"; 
import Etape2 from "@/components/etape2";
import Etape3 from "@/components/etape3";
import FeaturesSection from "@/components/features-six";
import Manifesto from "@/components/manifesto";
import TeamSection from "@/components/team";
import CtaSection from "@/components/cta-section";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background unifié pour toute la page */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-orange-600/20 via-orange-800/15 to-black" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(255,140,0,0.3)_0%,rgba(255,100,0,0.15)_50%,transparent_100%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(255,120,0,0.2)_0%,transparent_70%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_40%_60%_at_20%_80%,rgba(255,100,0,0.15)_0%,transparent_70%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_70%_40%_at_30%_70%,rgba(255,120,0,0.12)_0%,rgba(255,100,0,0.08)_50%,transparent_100%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_50%_30%_at_70%_90%,rgba(255,140,0,0.1)_0%,transparent_80%)]" />
      {/* Texture granuleuse unifiée */}
      <div 
        className="fixed inset-0 opacity-35 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.6'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />
      
      {/* Header global - toujours visible et sticky */}
      <div className="sticky top-0 z-50 backdrop-blur-sm bg-black/20 border-b border-white/10">
        <HeroHeader />
      </div>
      
      {/* Contenu avec z-index pour être au-dessus du background */}
      <div className="relative z-10">
        <HeroSection />
        <Etape1 />  
        <Etape2 />
        <Etape3 />
        <FeaturesSection />
        <Manifesto />
        <TeamSection />
        <CtaSection />
        <FooterSection />
      </div>
    </div>
  );
}
