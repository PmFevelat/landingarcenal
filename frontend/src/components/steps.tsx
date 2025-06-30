import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Code, LucideIcon, Target } from 'lucide-react'
import { ReactNode } from 'react'

export default function Steps() {
    return (
        <section className="relative">
            <div className="relative z-10 py-16 md:py-24">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
                    <div className="mx-auto grid gap-4 lg:grid-cols-2">
                        <FeatureCard>
                            <CardHeader className="pb-3">
                                <CardHeading
                                    icon={Code}
                                    title="Génération de code IA"
                                    description="Système de génération avancé, transformez vos idées en code instantanément."
                                />
                            </CardHeader>

                            <div className="relative mb-6 border-t border-dashed border-white/10 sm:mb-0">
                                <div className="absolute inset-0 bg-gradient-radial from-transparent via-orange-600/20 to-transparent"></div>
                                <div className="aspect-video p-6">
                                    <div className="h-full w-full rounded-lg bg-black/30 border border-white/10 flex items-center justify-center">
                                        <Code className="size-12 text-orange-400" />
                                    </div>
                                </div>
                            </div>
                        </FeatureCard>

                        <FeatureCard>
                            <CardHeader className="pb-3">
                                <CardHeading
                                    icon={Target}
                                    title="Analyse intelligente"
                                    description="Système d'analyse avancé, optimisez votre code automatiquement."
                                />
                            </CardHeader>

                            <CardContent>
                                <div className="relative mb-6 sm:mb-0">
                                    <div className="absolute -inset-6 bg-gradient-radial from-transparent to-black/50"></div>
                                    <div className="aspect-video border border-white/10 rounded-lg bg-black/30 flex items-center justify-center">
                                        <Target className="size-12 text-orange-400" />
                                    </div>
                                </div>
                            </CardContent>
                        </FeatureCard>

                        <FeatureCard className="p-6 lg:col-span-2">
                            <p 
                                className="mx-auto my-6 max-w-md text-balance text-center text-2xl font-extralight text-white"
                                style={{ fontFamily: 'var(--font-inter-display)' }}
                            >
                                Développement intelligent avec des rappels automatisés pour l&apos;optimisation.
                            </p>

                            <div className="flex justify-center gap-6 overflow-hidden">
                                <CircularUI
                                    label="Génération"
                                    circles={[{ pattern: 'border' }, { pattern: 'border' }]}
                                />

                                <CircularUI
                                    label="Analyse"
                                    circles={[{ pattern: 'none' }, { pattern: 'primary' }]}
                                />

                                <CircularUI
                                    label="Optimisation"
                                    circles={[{ pattern: 'orange' }, { pattern: 'none' }]}
                                />

                                <CircularUI
                                    label="Déploiement"
                                    circles={[{ pattern: 'primary' }, { pattern: 'none' }]}
                                    className="hidden sm:block"
                                />
                            </div>
                        </FeatureCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

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

const CardDecorator = () => (
    <>
        <span className="absolute -left-px -top-px block size-2 border-l-2 border-t-2 border-orange-400"></span>
        <span className="absolute -right-px -top-px block size-2 border-r-2 border-t-2 border-orange-400"></span>
        <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-orange-400"></span>
        <span className="absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 border-orange-400"></span>
    </>
)

interface CardHeadingProps {
    icon: LucideIcon
    title: string
    description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
    <div className="p-6">
        <span 
            className="text-orange-400 flex items-center gap-2 font-normal"
            style={{ fontFamily: 'var(--font-inter-display)' }}
        >
            <Icon className="size-4" />
            {title}
        </span>
        <p 
            className="mt-8 text-2xl font-extralight text-white"
            style={{ fontFamily: 'var(--font-inter-display)' }}
        >
            {description}
        </p>
    </div>
)

interface CircleConfig {
    pattern: 'none' | 'border' | 'primary' | 'orange'
}

interface CircularUIProps {
    label: string
    circles: CircleConfig[]
    className?: string
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
    <div className={className}>
        <div className="bg-gradient-to-b from-white/10 to-transparent size-fit rounded-2xl p-px">
            <div className="bg-gradient-to-b from-black/80 to-black/40 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4">
                {circles.map((circle, i) => (
                    <div
                        key={i}
                        className={cn('size-7 rounded-full border sm:size-8', {
                            'border-orange-400 bg-black/50': circle.pattern === 'none',
                            'border-orange-400 bg-repeating-linear-gradient bg-gradient-to-br from-white/5 to-white/10': circle.pattern === 'border',
                            'border-orange-400 bg-orange-400/20': circle.pattern === 'primary',
                            'border-orange-400 bg-orange-400': circle.pattern === 'orange',
                        })}></div>
                ))}
            </div>
        </div>
        <span 
            className="text-gray-400 mt-1.5 block text-center text-sm font-extralight"
            style={{ fontFamily: 'var(--font-inter-display)' }}
        >
            {label}
        </span>
    </div>
)
