import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'

export default function Manifesto() {
    return (
        <section className="relative min-h-screen">
            <div className="relative z-10 py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-white max-w-2xl text-balance text-4xl font-extralight" style={{ fontFamily: 'var(--font-inter-display)' }}>Manifesto</h2>
                    </div>
                    <div className="mt-16 flex justify-center">
                        <div className="w-full max-w-2xl text-center">
                            <div className="max-w-xl">
                                <Quote className="fill-orange-400 stroke-orange-400 mx-auto size-8 drop-shadow-lg" />
                                <blockquote className="mt-6">
                                    <p 
                                        className="text-white text-xl font-extralight leading-relaxed"
                                        style={{ fontFamily: 'var(--font-inter-display)' }}
                                    >
                                        Using Tailark has been like unlocking a secret design superpower. It&apos;s the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.
                                    </p>
                                    <footer className="mt-6 flex flex-col items-center justify-center">
                                        <Avatar className="ring-white/20 size-12 border border-white/10 shadow-lg ring-1">
                                            <AvatarImage
                                                src="https://avatars.githubusercontent.com/u/68236786?v=4"
                                                alt="Théo Balick"
                                            />
                                            <AvatarFallback className="bg-orange-600 text-white">T</AvatarFallback>
                                        </Avatar>
                                        <cite 
                                            className="text-white mt-2 text-lg font-normal"
                                            style={{ fontFamily: 'var(--font-inter-display)' }}
                                        >
                                            Théo Balick
                                        </cite>
                                        <span 
                                            className="text-gray-400 font-extralight"
                                            style={{ fontFamily: 'var(--font-inter-display)' }}
                                        >
                                            @theo_b
                                        </span>
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