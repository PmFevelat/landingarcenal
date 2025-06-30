import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowUp, CalendarCheck, Globe, Plus, Sparkles, Target } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

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
            
            <div className="relative z-10 py-16 md:py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-white max-w-2xl text-balance text-4xl font-extralight" style={{ fontFamily: 'var(--font-inter-display)' }}>Cas clients</h2>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <FeatureCard className="group overflow-hidden px-6 pt-6">
                            <h3 className="text-white mt-5 text-lg font-normal" style={{ fontFamily: 'var(--font-inter-display)' }}>AI Code Generation</h3>

                            <div className="mask-b-from-50 -mx-2 -mt-2 px-2 pt-2">
                                <CodeGenerationIllustration />
                            </div>
                        </FeatureCard>

                        <FeatureCard className="group overflow-hidden px-6 pt-6">
                            <h3 className="text-white mt-5 text-lg font-normal" style={{ fontFamily: 'var(--font-inter-display)' }}>Intelligent Code Review</h3>

                            <div className="mask-b-from-50 -mx-2 -mt-2 px-2 pt-2">
                                <CodeReviewPanelIllustration />
                            </div>
                        </FeatureCard>
                        
                        <FeatureCard className="group overflow-hidden px-6 pt-6">
                            <h3 className="text-white mt-5 text-lg font-normal" style={{ fontFamily: 'var(--font-inter-display)' }}>Contextual AI Assistant</h3>

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

const CodeGenerationIllustration = () => {
    return (
        <Card
            aria-hidden
            className="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0 bg-black/30 border-white/10">
            <div className="w-fit">
                <Target className="size-3.5 fill-orange-400 stroke-orange-400" />
                <p className="mt-2 line-clamp-2 text-sm text-gray-300">Generate a React component for user authentication with TypeScript...</p>
            </div>
            <div className="bg-white/10 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
                <div className="text-gray-400 text-sm">AI Code Generator</div>

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

const CodeReviewPanelIllustration = () => {
    return (
        <Card
            aria-hidden
            className="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0 bg-black/30 border-white/10">
            <div className="w-fit">
                <CalendarCheck className="size-3.5 fill-orange-400 stroke-orange-400" />
                <p className="mt-2 line-clamp-2 text-sm text-gray-300">Review my code for security vulnerabilities and performance issues...</p>
            </div>
            <div className="bg-white/10 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
                <div className="text-gray-400 text-sm">Code Review Assistant</div>

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
