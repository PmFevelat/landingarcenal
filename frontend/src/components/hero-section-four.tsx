import React from 'react'
import Link from 'next/link'
import { RainbowButton } from '@/components/magicui/rainbow-button'

export default function HeroSection() {
    return (
        <main className="[--color-primary:var(--color-indigo-500)] relative">
            
            <section className="overflow-hidden relative z-10 flex items-center justify-center min-h-screen pt-16">
                    <div className="w-full">
                        <div className="relative z-10 mx-auto max-w-5xl px-6 -mt-48">
                            <div className="relative text-center">
                                <h1 className="mx-auto max-w-2xl text-balance text-4xl md:text-5xl text-white font-extralight" style={{ fontFamily: 'var(--font-inter-display)' }}>Build Stunning Websites That Drive Results</h1>

                                <p className="text-gray-200 mx-auto my-6 max-w-2xl text-balance text-xl font-extralight" style={{ fontFamily: 'var(--font-inter-display)' }}>Craft. Build. Ship Modern Websites With AI Support.</p>

                                <div className="flex flex-col items-center justify-center gap-3">
                                    <RainbowButton
                                        asChild
                                        size="lg"
                                        className="!bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] !text-black font-normal"
                                        style={{ fontFamily: 'var(--font-inter-display)' }}>
                                        <Link href="/meetings">
                                            <span className="text-nowrap">Prendre rendez-vous</span>
                                        </Link>
                                    </RainbowButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}
