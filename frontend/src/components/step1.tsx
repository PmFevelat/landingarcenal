import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Step1() {
    return (
        <section className="relative">
            <div className="relative z-10 py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid gap-8 md:grid-cols-2 md:gap-16">
                        <h2 
                            className="text-white text-4xl font-extralight"
                            style={{ fontFamily: 'var(--font-inter-display)' }}
                        >
                            L&apos;écosystème Arcenal rassemble nos modèles, produits et plateformes.
                        </h2>
                        <div className="space-y-6">
                            <p 
                                className="text-gray-300 font-extralight leading-relaxed"
                                style={{ fontFamily: 'var(--font-inter-display)' }}
                            >
                                Arcenal évolue pour être plus que de simples modèles. Il soutient un écosystème complet — des produits aux API et plateformes aidant les développeurs et entreprises à innover.
                            </p>
                            <p 
                                className="text-gray-300 font-extralight leading-relaxed"
                                style={{ fontFamily: 'var(--font-inter-display)' }}
                            >
                                Arcenal. <span className="font-normal text-white">Il soutient un écosystème complet</span> — des produits pour innover. Notre plateforme offre des solutions intégrées qui transforment votre approche du développement avec l&apos;intelligence artificielle.
                            </p>
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="gap-1 pr-1.5 border-white/20 text-white hover:bg-white/10 hover:text-white font-normal"
                                style={{ fontFamily: 'var(--font-inter-display)' }}>
                                <Link href="#">
                                    <span>En savoir plus</span>
                                    <ChevronRight className="size-3 text-orange-400" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
