import { Quote } from 'lucide-react'

export default function Manifesto() {
    return (
        <section className="relative min-h-screen">
            <div className="relative z-10 py-16 md:py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-white max-w-2xl text-balance text-4xl font-extralight" style={{ fontFamily: 'var(--font-inter-display)' }}>Manifesto</h2>
                    </div>
                    <div className="mt-16 flex justify-center">
                        <div className="w-full max-w-2xl text-center">
                            <div className="mx-auto max-w-xl">
                                <Quote className="fill-orange-400 stroke-orange-400 mx-auto size-8 drop-shadow-lg" />
                                <blockquote className="mt-6">
                                    <p 
                                        className="text-white text-xl font-extralight leading-relaxed"
                                        style={{ fontFamily: 'var(--font-inter-display)' }}
                                    >
                                        Using Tailark has been like unlocking a secret design superpower. It&apos;s the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.
                                    </p>
                                    <footer className="mt-6 flex justify-center">
                                        <cite 
                                            className="text-white text-lg font-normal"
                                            style={{ fontFamily: 'var(--font-inter-display)' }}
                                        >
                                            L&apos;équipe Arcenal
                                        </cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 