import Link from 'next/link'

export default function FooterSection() {
    return (
        <footer className="relative">
            {/* Background noir distinct pour le footer */}
            <div className="absolute inset-0 bg-black z-0" />
            
            <div className="relative z-10 py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                        {/* Services Section */}
                        <div>
                            <h3 
                                className="text-gray-400 text-sm font-extralight mb-6 tracking-wider uppercase"
                                style={{ fontFamily: 'var(--font-inter-display)' }}
                            >
                                Services
                            </h3>
                            <nav className="space-y-3">
                                <Link 
                                    href="/"
                                    className="block text-gray-500 hover:text-white transition-colors duration-200 font-extralight"
                                    style={{ fontFamily: 'var(--font-inter-display)' }}
                                >
                                    Accueil
                                </Link>
                            </nav>
                        </div>

                        {/* Entreprise Section */}
                        <div>
                            <h3 
                                className="text-gray-400 text-sm font-extralight mb-6 tracking-wider uppercase"
                                style={{ fontFamily: 'var(--font-inter-display)' }}
                            >
                                Entreprise
                            </h3>
                            <nav className="space-y-3">
                                <Link 
                                    href="/blog"
                                    className="block text-gray-500 hover:text-white transition-colors duration-200 font-extralight"
                                    style={{ fontFamily: 'var(--font-inter-display)' }}
                                >
                                    Blog
                                </Link>
                                <Link 
                                    href="/clients"
                                    className="block text-gray-500 hover:text-white transition-colors duration-200 font-extralight"
                                    style={{ fontFamily: 'var(--font-inter-display)' }}
                                >
                                    Clients
                                </Link>
                            </nav>
                        </div>

                        {/* Socials Section */}
                        <div>
                            <h3 
                                className="text-gray-400 text-sm font-extralight mb-6 tracking-wider uppercase"
                                style={{ fontFamily: 'var(--font-inter-display)' }}
                            >
                                Socials
                            </h3>
                            <nav className="space-y-3">
                                <Link 
                                    href="https://linkedin.com"
                                    target="_blank"
                                    className="block text-gray-500 hover:text-white transition-colors duration-200 font-extralight"
                                    style={{ fontFamily: 'var(--font-inter-display)' }}
                                >
                                    LinkedIn
                                </Link>
                            </nav>
                        </div>
                    </div>

                    {/* Ligne de séparation */}
                    <div className="mt-12 pt-6 border-t border-gray-800">
                        <p 
                            className="text-gray-500 text-sm text-center font-extralight"
                            style={{ fontFamily: 'var(--font-inter-display)' }}
                        >
                            © 2024 Arcenal. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
} 