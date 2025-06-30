import { Button } from '@/components/ui/button'
import { ChevronRight, Target, Code, Sparkles, Brain, Cpu, Database } from 'lucide-react'
import Link from 'next/link'
import { OrbitingCircles } from '@/components/magicui/orbiting-circles'

export default function Etape1() {
    return (
        <section className="relative">
            <div className="relative z-10 py-8 md:py-16">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 
                                className="text-white text-4xl font-extralight"
                                style={{ fontFamily: 'var(--font-inter-display)' }}
                            >
                                L&apos;écosystème Arcenal rassemble nos modèles, produits et plateformes.
                            </h2>
                            <p 
                                className="text-gray-300 font-extralight leading-relaxed"
                                style={{ fontFamily: 'var(--font-inter-display)' }}
                            >
                                Arcenal évolue pour être plus que de simples modèles. Il soutient un écosystème complet — des produits aux API et plateformes aidant les développeurs et entreprises à innover.
                            </p>
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="gap-1 pr-1.5 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white font-normal"
                                style={{ fontFamily: 'var(--font-inter-display)' }}>
                                <Link href="#">
                                    <span>En savoir plus</span>
                                    <ChevronRight className="size-3 text-orange-400" />
                                </Link>
                            </Button>
                        </div>
                        
                        <div className="relative h-[400px] w-full flex items-center justify-center">
                            <div className="relative w-full h-full [&_svg_circle]:!stroke-white [&_svg_circle]:!stroke-opacity-30">
                                {/* Première orbite - plus petite */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <OrbitingCircles
                                        className="size-[30px] border-none bg-transparent"
                                        duration={20}
                                        delay={0}
                                        radius={80}
                                        path={true}
                                    >
                                        <Target className="size-6 text-white" />
                                        <Code className="size-6 text-white" />
                                        <Sparkles className="size-6 text-white" />
                                    </OrbitingCircles>
                                </div>
                                
                                {/* Deuxième orbite - plus grande */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <OrbitingCircles
                                        className="size-[40px] border-none bg-transparent"
                                        duration={30}
                                        delay={10}
                                        radius={140}
                                        reverse={true}
                                        path={true}
                                    >
                                        <Brain className="size-7 text-orange-400" />
                                        <Cpu className="size-7 text-orange-400" />
                                        <Database className="size-7 text-orange-400" />
                                        <Sparkles className="size-7 text-orange-400" />
                                    </OrbitingCircles>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 