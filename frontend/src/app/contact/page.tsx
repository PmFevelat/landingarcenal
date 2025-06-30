import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
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
                <div className="mx-auto max-w-4xl px-6 py-8">
                    {/* Titre de la page */}
                    <div className="mb-8 text-center">
                        <h1 
                            className="text-white text-4xl font-extralight"
                            style={{ fontFamily: 'var(--font-inter-display)' }}
                        >
                            Contact
                        </h1>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Formulaire de contact */}
                        <Card className="bg-black/50 border-white/10 backdrop-blur-sm">
                            <CardHeader className="pb-4">
                                <CardTitle 
                                    className="text-white text-xl font-extralight"
                                    style={{ fontFamily: 'var(--font-inter-display)' }}
                                >
                                    Envoyez-nous un message
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 pb-4">
                                <form className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label 
                                                htmlFor="firstName" 
                                                className="text-white font-normal text-sm"
                                                style={{ fontFamily: 'var(--font-inter-display)' }}
                                            >
                                                Prénom
                                            </Label>
                                            <Input 
                                                id="firstName" 
                                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-9"
                                                placeholder="Votre prénom"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <Label 
                                                htmlFor="lastName" 
                                                className="text-white font-normal text-sm"
                                                style={{ fontFamily: 'var(--font-inter-display)' }}
                                            >
                                                Nom
                                            </Label>
                                            <Input 
                                                id="lastName" 
                                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-9"
                                                placeholder="Votre nom"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <Label 
                                            htmlFor="email" 
                                            className="text-white font-normal text-sm"
                                            style={{ fontFamily: 'var(--font-inter-display)' }}
                                        >
                                            Email
                                        </Label>
                                        <Input 
                                            id="email" 
                                            type="email"
                                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-9"
                                            placeholder="votre@email.com"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <Label 
                                            htmlFor="company" 
                                            className="text-white font-normal text-sm"
                                            style={{ fontFamily: 'var(--font-inter-display)' }}
                                        >
                                            Entreprise
                                        </Label>
                                        <Input 
                                            id="company" 
                                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-9"
                                            placeholder="Nom de votre entreprise"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <Label 
                                            htmlFor="message" 
                                            className="text-white font-normal text-sm"
                                            style={{ fontFamily: 'var(--font-inter-display)' }}
                                        >
                                            Message
                                        </Label>
                                        <Textarea 
                                            id="message"
                                            rows={3}
                                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
                                            placeholder="Décrivez votre projet..."
                                        />
                                    </div>

                                    <Button 
                                        type="submit" 
                                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-normal h-9"
                                        style={{ fontFamily: 'var(--font-inter-display)' }}
                                    >
                                        Envoyer le message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Autres moyens de contact */}
                        <div className="space-y-4">
                            <div>
                                <h2 
                                    className="text-white text-xl font-extralight mb-4"
                                    style={{ fontFamily: 'var(--font-inter-display)' }}
                                >
                                    Autres moyens de contact
                                </h2>
                            </div>

                            <div className="space-y-2">
                                {/* Téléphone */}
                                <Card className="bg-black/30 border-white/10 backdrop-blur-sm hover:bg-white/5 transition-colors duration-300">
                                    <CardContent className="p-3">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 bg-orange-600/20 rounded-full">
                                                <Phone className="size-3 text-orange-400" />
                                            </div>
                                            <div>
                                                <h3 
                                                    className="text-white font-normal text-xs"
                                                    style={{ fontFamily: 'var(--font-inter-display)' }}
                                                >
                                                    Téléphone
                                                </h3>
                                                <p 
                                                    className="text-gray-300 font-extralight text-xs"
                                                    style={{ fontFamily: 'var(--font-inter-display)' }}
                                                >
                                                    +33 1 23 45 67 89
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Email */}
                                <Card className="bg-black/30 border-white/10 backdrop-blur-sm hover:bg-white/5 transition-colors duration-300">
                                    <CardContent className="p-3">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 bg-orange-600/20 rounded-full">
                                                <Mail className="size-3 text-orange-400" />
                                            </div>
                                            <div>
                                                <h3 
                                                    className="text-white font-normal text-xs"
                                                    style={{ fontFamily: 'var(--font-inter-display)' }}
                                                >
                                                    Email
                                                </h3>
                                                <p 
                                                    className="text-gray-300 font-extralight text-xs"
                                                    style={{ fontFamily: 'var(--font-inter-display)' }}
                                                >
                                                    contact@arcenal.com
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Prendre rendez-vous */}
                                <Card className="bg-black/30 border-white/10 backdrop-blur-sm hover:bg-white/5 transition-colors duration-300">
                                    <CardContent className="p-3">
                                        <Link href="/meetings">
                                            <div className="flex items-center gap-2">
                                                <div className="p-1.5 bg-orange-600/20 rounded-full">
                                                    <Calendar className="size-3 text-orange-400" />
                                                </div>
                                                <div>
                                                    <h3 
                                                        className="text-white font-normal text-xs group-hover:text-orange-400 transition-colors"
                                                        style={{ fontFamily: 'var(--font-inter-display)' }}
                                                    >
                                                        Prendre rendez-vous
                                                    </h3>
                                                    <p 
                                                        className="text-gray-300 font-extralight text-xs"
                                                        style={{ fontFamily: 'var(--font-inter-display)' }}
                                                    >
                                                        Planifiez une consultation
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Informations supplémentaires */}
                            <div className="pt-4">
                                <p 
                                    className="text-gray-400 font-extralight leading-relaxed text-sm"
                                    style={{ fontFamily: 'var(--font-inter-display)' }}
                                >
                                    Notre équipe vous répondra dans les plus brefs délais. Pour des demandes urgentes, 
                                    n&apos;hésitez pas à nous appeler directement.
                                </p>
                            </div>
                        </div>
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