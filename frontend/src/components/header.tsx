'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'

const menuItems = [
    { name: 'Clients', href: '/clients' },
    { name: 'Blog', href: '/blog' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="relative z-20 w-full transition-all duration-300">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0">
                        <div className="flex w-full justify-between gap-6 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <span className="text-xl font-bold text-white">Arcenal</span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-white" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-white" />
                            </button>

                            <div className="m-auto hidden size-fit lg:block">
                                <ul className="flex gap-1">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Button
                                                asChild
                                                variant="ghost"
                                                size="sm"
                                                className="text-white hover:text-gray-200 hover:bg-white/10 font-normal"
                                                style={{ fontFamily: 'var(--font-inter-display)' }}>
                                                <Link
                                                    href={item.href}
                                                    className="text-base">
                                                    <span>{item.name}</span>
                                                </Link>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-black/80 backdrop-blur-md in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/20 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-white hover:text-gray-200 block duration-150 font-normal"
                                                style={{ fontFamily: 'var(--font-inter-display)' }}>
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-white text-black hover:bg-gray-200 font-normal"
                                    style={{ fontFamily: 'var(--font-inter-display)' }}>
                                    <Link href="/contact">
                                        <span>Contact</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
