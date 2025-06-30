import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CtaSection() {
    return (
        <section className="relative">
            <div className="relative z-10 py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="space-y-6 text-center">
                        <h2 
                            className="text-white text-balance text-3xl font-extralight lg:text-4xl"
                            style={{ fontFamily: 'var(--font-inter-display)' }}
                        >
                            Et vous, quel futur allez-vous vous offrir ?
                        </h2>
                        <div className="flex justify-center">
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white font-normal px-8 py-3 text-base"
                                style={{ fontFamily: 'var(--font-inter-display)' }}>
                                <Link href="/meetings">Prendre rendez-vous</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
