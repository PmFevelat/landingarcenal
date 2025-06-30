"use client";

import { Button } from '@/components/ui/button'
import { ChevronRight, Target, Code, Sparkles, Brain, Cpu, Database, Zap, Users, Globe } from 'lucide-react'
import Link from 'next/link'
import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-white/30 bg-black/80 backdrop-blur-sm p-3 shadow-[0_0_20px_-12px_rgba(255,255,255,0.3)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

function AnimatedBeamDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[400px] w-full items-center justify-center overflow-hidden p-10",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Target className="size-5 text-white" />
          </Circle>
          <Circle ref={div2Ref}>
            <Code className="size-5 text-white" />
          </Circle>
          <Circle ref={div3Ref}>
            <Brain className="size-5 text-white" />
          </Circle>
          <Circle ref={div4Ref}>
            <Cpu className="size-5 text-white" />
          </Circle>
          <Circle ref={div5Ref}>
            <Database className="size-5 text-white" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16 border-orange-400/50 shadow-[0_0_20px_-12px_rgba(255,140,0,0.5)]">
            <span 
              className="text-white text-xl font-bold"
              style={{ fontFamily: 'var(--font-inter-display)' }}
            >
              A
            </span>
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Users className="size-5 text-white" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        pathColor="white"
        pathWidth={2}
        pathOpacity={0.3}
        gradientStartColor="#ffffff"
        gradientStopColor="#ff8c00"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        pathColor="white"
        pathWidth={2}
        pathOpacity={0.3}
        gradientStartColor="#ffffff"
        gradientStopColor="#ff8c00"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        pathColor="white"
        pathWidth={2}
        pathOpacity={0.3}
        gradientStartColor="#ffffff"
        gradientStopColor="#ff8c00"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        pathColor="white"
        pathWidth={2}
        pathOpacity={0.3}
        gradientStartColor="#ffffff"
        gradientStopColor="#ff8c00"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        pathColor="white"
        pathWidth={2}
        pathOpacity={0.3}
        gradientStartColor="#ffffff"
        gradientStopColor="#ff8c00"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        pathColor="white"
        pathWidth={2}
        pathOpacity={0.3}
        gradientStartColor="#ff8c00"
        gradientStopColor="#ffffff"
      />
    </div>
  );
}

export default function Etape3() {
    return (
        <section className="relative">
            <div className="relative z-10 py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 
                                className="text-white text-4xl font-extralight"
                                style={{ fontFamily: 'var(--font-inter-display)' }}
                            >
                                Connectez tous vos outils avec Arcenal au centre de votre workflow.
                            </h2>
                            <p 
                                className="text-gray-300 font-extralight leading-relaxed"
                                style={{ fontFamily: 'var(--font-inter-display)' }}
                            >
                                Intégrez seamlessly vos outils existants et créez un hub centralisé pour maximiser l&apos;efficacité de vos équipes et automatiser vos processus.
                            </p>
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="gap-1 pr-1.5 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white font-normal"
                                style={{ fontFamily: 'var(--font-inter-display)' }}>
                                <Link href="#">
                                    <span>Voir les intégrations</span>
                                    <ChevronRight className="size-3 text-orange-400" />
                                </Link>
                            </Button>
                        </div>
                        
                        <AnimatedBeamDemo />
                    </div>
                </div>
            </div>
        </section>
    )
} 