import { Button } from '@/components/ui/button'
import { ChevronRight, Rocket, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import DisplayCards from '@/components/ui/display-cards'

export default function Etape2() {
    return (
        <section className="relative">
            <div className="relative z-10 py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
                        <div className="flex min-h-[400px] w-full items-center justify-start">
                            <div className="w-full max-w-lg">
                                <div className="ml-0 [&>div]:!place-items-start">
                                    <DisplayCards cards={[
                                    {
                                        icon: <Rocket className="size-4 text-blue-300" />,
                                        title: "Innovation",
                                        description: "Solutions révolutionnaires",
                                        date: "En cours",
                                        iconClassName: "text-blue-500",
                                        titleClassName: "text-white",
                                        className:
                                            "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                                    },
                                    {
                                        icon: <Users className="size-4 text-blue-300" />,
                                        title: "Collaboration",
                                        description: "Équipes connectées",
                                        date: "Temps réel",
                                        iconClassName: "text-blue-500",
                                        titleClassName: "text-white",
                                        className:
                                            "[grid-area:stack] translate-x-10 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                                    },
                                    {
                                        icon: <Zap className="size-4 text-blue-300" />,
                                        title: "Performance",
                                        description: "Vitesse d'exécution",
                                        date: "Optimisé",
                                        iconClassName: "text-blue-500",
                                        titleClassName: "text-white",
                                        className:
                                            "[grid-area:stack] translate-x-20 translate-y-20 hover:translate-y-10",
                                    },
                                ]} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <h2 
                                className="text-white text-4xl font-extralight"
                                style={{ fontFamily: 'var(--font-inter-display)' }}
                            >
                                Une approche collaborative pour révolutionner l&apos;innovation.
                            </h2>
                            <p 
                                className="text-gray-300 font-extralight leading-relaxed"
                                style={{ fontFamily: 'var(--font-inter-display)' }}
                            >
                                Nos outils permettent aux équipes de collaborer efficacement, d&apos;accélérer le développement et de créer des solutions innovantes qui transforment les industries.
                            </p>
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="gap-1 pr-1.5 border-white/20 text-white hover:bg-white/10 hover:text-white font-normal"
                                style={{ fontFamily: 'var(--font-inter-display)' }}>
                                <Link href="#">
                                    <span>Découvrir nos solutions</span>
                                    <ChevronRight className="size-3 text-blue-400" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 