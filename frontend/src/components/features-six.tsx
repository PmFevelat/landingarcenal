import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowUp, CalendarCheck, Globe, Play, Plus, Signature, Sparkles, Target } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'
const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const THEO_AVATAR = 'https://avatars.githubusercontent.com/u/68236786?v=4'
const GLODIE_AVATAR = 'https://avatars.githubusercontent.com/u/99137927?v=4'

// Composant CardDecorator identique à celui de Steps
const CardDecorator = () => (
    <>
        <span className="absolute -left-px -top-px block size-2 border-l-2 border-t-2 border-orange-400"></span>
        <span className="absolute -right-px -top-px block size-2 border-r-2 border-t-2 border-orange-400"></span>
        <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-orange-400"></span>
        <span className="absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 border-orange-400"></span>
    </>
)

// Composant FeatureCard identique à celui de Steps  
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

export default function FeaturesSection() {
    return (
        <section className="relative min-h-screen">
            
            <div className="relative z-10 py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-white max-w-2xl text-balance text-4xl font-extralight" style={{ fontFamily: 'var(--font-inter-display)' }}>Cas clients</h2>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <FeatureCard className="overflow-hidden p-6">
                            <Target className="text-orange-400 size-5" />
                            <h3 className="text-white mt-5 text-lg font-normal" style={{ fontFamily: 'var(--font-inter-display)' }}>AI Code Generation</h3>
                            <p className="text-gray-300 mt-3 text-balance">Our advanced AI models transform natural language into production-ready code.</p>

                            <MeetingIllustration />
                        </FeatureCard>

                        <FeatureCard className="group overflow-hidden px-6 pt-6">
                            <CalendarCheck className="text-orange-400 size-5" />
                            <h3 className="text-white mt-5 text-lg font-normal" style={{ fontFamily: 'var(--font-inter-display)' }}>Intelligent Code Review</h3>
                            <p className="text-gray-300 mt-3 text-balance">Our AI analyzes your code for bugs, security issues, and optimization opportunities.</p>

                            <CodeReviewIllustration />
                        </FeatureCard>
                        
                        <FeatureCard className="group overflow-hidden px-6 pt-6">
                            <Sparkles className="text-orange-400 size-5" />
                            <h3 className="text-white mt-5 text-lg font-normal" style={{ fontFamily: 'var(--font-inter-display)' }}>Contextual AI Assistant</h3>
                            <p className="text-gray-300 mt-3 text-balance">A personalized AI companion that understands your codebase and helps solve complex...</p>

                            <div className="mask-b-from-50 -mx-2 -mt-2 px-2 pt-2">
                                <AIAssistantIllustration />
                            </div>
                        </FeatureCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

const MeetingIllustration = () => {
    return (
        <Card
            aria-hidden
            className="mt-9 aspect-video p-4 bg-black/30 border-white/10">
            <div className="relative hidden h-fit">
                <div className="absolute -left-1.5 bottom-1.5 rounded-md border-t border-red-700 bg-red-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-red-500/35">PDF</div>
                <div className="h-10 w-8 rounded-md border bg-gradient-to-b from-zinc-100 to-zinc-200"></div>
            </div>
            <div className="mb-0.5 text-sm font-semibold text-white">AI Strategy Meeting</div>
            <div className="mb-4 flex gap-2 text-sm">
                <span className="text-gray-400">2:30 - 3:45 PM</span>
            </div>
            <div className="mb-2 flex -space-x-1.5">
                <div className="flex -space-x-1.5">
                    {[
                        { src: MESCHAC_AVATAR, alt: 'Méschac Irung' },
                        { src: BERNARD_AVATAR, alt: 'Bernard Ngandu' },
                        { src: THEO_AVATAR, alt: 'Théo Balick' },
                        { src: GLODIE_AVATAR, alt: 'Glodie Lukose' },
                    ].map((avatar, index) => (
                        <div
                            key={index}
                            className="bg-black/50 size-7 rounded-full border border-white/20 p-0.5 shadow shadow-black/50">
                            <img
                                className="aspect-square rounded-full object-cover"
                                src={avatar.src}
                                alt={avatar.alt}
                                height="460"
                                width="460"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-gray-400 text-sm font-medium">ML Pipeline Discussion</div>
        </Card>
    )
}

const CodeReviewIllustration = () => {
    return (
        <div
            aria-hidden
            className="relative mt-6">
            <Card className="aspect-video w-4/5 translate-y-4 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3 bg-black/30 border-white/10">
                <div className="mb-3 flex items-center gap-2">
                    <div className="bg-black/50 size-6 rounded-full border border-white/20 p-0.5 shadow shadow-black/50">
                        <img
                            className="aspect-square rounded-full object-cover"
                            src={MESCHAC_AVATAR}
                            alt="M Irung"
                            height="460"
                            width="460"
                        />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">Méschac Irung</span>

                    <span className="text-gray-400 text-xs">2m</span>
                </div>

                <div className="ml-8 space-y-2">
                    <div className="bg-white/20 h-2 rounded-full"></div>
                    <div className="bg-white/20 h-2 w-3/5 rounded-full"></div>
                    <div className="bg-white/20 h-2 w-1/2 rounded-full"></div>
                </div>

                <Signature className="ml-8 mt-3 size-5 text-gray-400" />
            </Card>
            <Card className="aspect-3/5 absolute -top-4 right-0 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3 bg-black/30 border-white/10">
                <div className="bg-white/10 m-auto flex size-10 rounded-full">
                    <Play className="fill-white/50 stroke-white/50 m-auto size-4" />
                </div>
            </Card>
        </div>
    )
}

const AIAssistantIllustration = () => {
    return (
        <Card
            aria-hidden
            className="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0 bg-black/30 border-white/10">
            <div className="w-fit">
                <Sparkles className="size-3.5 fill-orange-400 stroke-orange-400" />
                <p className="mt-2 line-clamp-2 text-sm text-gray-300">How can I optimize my neural network to reduce inference time while maintaining accuracy?</p>
            </div>
            <div className="bg-white/10 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
                <div className="text-gray-400 text-sm">Ask AI Assistant</div>

                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-7 rounded-2xl bg-transparent shadow-none border-white/20 text-gray-400 hover:text-white">
                            <Plus />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-7 rounded-2xl bg-transparent shadow-none border-white/20 text-gray-400 hover:text-white">
                            <Globe />
                        </Button>
                    </div>

                    <Button
                        size="icon"
                        className="size-7 rounded-2xl bg-white text-black hover:bg-gray-200">
                        <ArrowUp strokeWidth={3} />
                    </Button>
                </div>
            </div>
        </Card>
    )
}
