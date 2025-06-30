import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'

const clientCases = [
    {
        id: 1,
        title: "Transformation digitale chez TechCorp",
        date: "Décembre 2024",
        category: "Fintech",
        description: "Automatisation complète du pipeline de développement"
    },
    {
        id: 2,
        title: "Innovation IA pour StartupLabs", 
        date: "Novembre 2024",
        category: "Healthcare",
        description: "Optimisation des diagnostics médicaux par intelligence artificielle"
    },
    {
        id: 3,
        title: "Migration cloud pour Enterprise Solutions",
        date: "Octobre 2024", 
        category: "E-commerce",
        description: "Modernisation de l'infrastructure et amélioration des performances"
    },
    {
        id: 4,
        title: "Plateforme DevOps pour MediaGroup",
        date: "Septembre 2024",
        category: "Media & Entertainment", 
        description: "Déploiement continu et gestion automatisée des environnements"
    },
    {
        id: 5,
        title: "Solution MLOps pour DataTech",
        date: "Août 2024",
        category: "Data Analytics",
        description: "Pipeline de machine learning en production avec monitoring avancé"
    },
    {
        id: 6,
        title: "Intégration API pour RetailChain",
        date: "Juillet 2024",
        category: "Retail",
        description: "Architecture microservices et optimisation des performances"
    }
]

export default function ClientsPage() {
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

            {/* Header */}
            <div className="relative z-10">
                <HeroHeader />
            </div>

            {/* Contenu principal */}
            <main className="relative z-10 pt-24">
                <div className="mx-auto max-w-5xl px-6 py-16">
                    {/* Titre de la page */}
                    <div className="mb-16">
                        <h1 
                            className="text-white text-6xl font-extralight"
                            style={{ fontFamily: 'var(--font-inter-display)' }}
                        >
                            Cas clients
                        </h1>
                    </div>

                    {/* Cas clients */}
                    <div className="space-y-0">
                        {clientCases.map((clientCase) => (
                            <article 
                                key={clientCase.id}
                                className="border-b border-white/10 py-8 group cursor-pointer hover:bg-white/5 transition-colors duration-300"
                            >
                                <div className="flex gap-8 items-center">
                                    {/* Vignette avec effet grainy */}
                                    <div className="flex-shrink-0">
                                        <div className="relative w-32 h-24 rounded-lg overflow-hidden bg-gradient-to-br from-orange-600 to-orange-800">
                                            {/* Logo Arcenal sur la vignette */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span 
                                                    className="text-white text-lg font-bold"
                                                    style={{ fontFamily: 'var(--font-inter-display)' }}
                                                >
                                                    A
                                                </span>
                                            </div>
                                            {/* Texture granuleuse sur la vignette */}
                                            <div 
                                                className="absolute inset-0 opacity-60 mix-blend-overlay"
                                                style={{
                                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.8'/%3E%3C/svg%3E")`,
                                                    backgroundSize: '80px 80px'
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Contenu du cas client */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-4 mb-2">
                                            <span 
                                                className="text-orange-400 text-sm font-normal uppercase tracking-wider"
                                                style={{ fontFamily: 'var(--font-inter-display)' }}
                                            >
                                                {clientCase.category}
                                            </span>
                                            <span 
                                                className="text-gray-500 text-sm font-extralight"
                                                style={{ fontFamily: 'var(--font-inter-display)' }}
                                            >
                                                {clientCase.date}
                                            </span>
                                        </div>
                                        <h2 
                                            className="text-white text-2xl font-extralight group-hover:text-orange-400 transition-colors duration-300 mb-2"
                                            style={{ fontFamily: 'var(--font-inter-display)' }}
                                        >
                                            {clientCase.title}
                                        </h2>
                                        <p 
                                            className="text-gray-400 text-sm font-extralight"
                                            style={{ fontFamily: 'var(--font-inter-display)' }}
                                        >
                                            {clientCase.description}
                                        </p>
                                    </div>

                                    {/* Flèche indicative */}
                                    <div className="flex-shrink-0">
                                        <svg 
                                            className="w-6 h-6 text-gray-600 group-hover:text-orange-400 transition-colors duration-300"
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <div className="relative z-10">
                <FooterSection />
            </div>
        </div>
    )
} 