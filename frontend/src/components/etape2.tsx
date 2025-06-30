import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight, Rocket, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

// Composant CardDecorator pour les angles orangés
const CardDecorator = () => (
    <>
        <span className="absolute -left-px -top-px block size-2 border-l-2 border-t-2 border-orange-400"></span>
        <span className="absolute -right-px -top-px block size-2 border-r-2 border-t-2 border-orange-400"></span>
        <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-orange-400"></span>
        <span className="absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 border-orange-400"></span>
    </>
)

// Composant FeatureCard avec style uniforme
interface FeatureCardProps {
    children: ReactNode
    className?: string
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
    <Card className={cn('group relative rounded-none shadow-none bg-black/50 border-white/10 backdrop-blur-sm', className)}>
        <CardDecorator />
        {children}
    </Card>
)

export default function Etape2() {
    return (
        <section className="relative">
            <div className="relative z-10 py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
                        <div className="flex min-h-[400px] w-full items-center justify-start">
                            <div className="w-full max-w-lg">
                                <div className="ml-0 [&>div]:!place-items-start">
                                    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
                                        {/* Card Innovation - arrière */}
                                        <FeatureCard className="[grid-area:stack] w-[22rem] h-36 -skew-y-[8deg] select-none flex flex-col justify-between px-4 py-3 transition-all duration-700 hover:-translate-y-10">
                                            <div className="flex items-center gap-2">
                                                <span className="relative inline-block rounded-full bg-blue-800 p-1">
                                                    <Rocket className="size-4 text-blue-300" />
                                                </span>
                                                <h3 className="text-white text-lg font-medium" style={{ fontFamily: 'var(--font-inter-display)' }}>Innovation</h3>
                                            </div>
                                            <p className="text-gray-300 text-lg whitespace-nowrap">Solutions révolutionnaires</p>
                                        </FeatureCard>

                                        {/* Card Collaboration - milieu */}
                                        <FeatureCard className="[grid-area:stack] w-[22rem] h-36 -skew-y-[8deg] select-none flex flex-col justify-between px-4 py-3 translate-x-16 translate-y-10 transition-all duration-700 hover:-translate-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="relative inline-block rounded-full bg-blue-800 p-1">
                                                    <Users className="size-4 text-blue-300" />
                                                </span>
                                                <h3 className="text-white text-lg font-medium" style={{ fontFamily: 'var(--font-inter-display)' }}>Collaboration</h3>
                                            </div>
                                            <p className="text-gray-300 text-lg whitespace-nowrap">Équipes connectées</p>
                                        </FeatureCard>

                                        {/* Card Performance - avant */}
                                        <FeatureCard className="[grid-area:stack] w-[22rem] h-36 -skew-y-[8deg] select-none flex flex-col justify-between px-4 py-3 translate-x-32 translate-y-20 transition-all duration-700 hover:translate-y-10">
                                            <div className="flex items-center gap-2">
                                                <span className="relative inline-block rounded-full bg-blue-800 p-1">
                                                    <Zap className="size-4 text-blue-300" />
                                                </span>
                                                <h3 className="text-white text-lg font-medium" style={{ fontFamily: 'var(--font-inter-display)' }}>Performance</h3>
                                            </div>
                                            <p className="text-gray-300 text-lg whitespace-nowrap">Vitesse d'exécution</p>
                                        </FeatureCard>
                                    </div>
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
                                className="gap-1 pr-1.5 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white font-normal"
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