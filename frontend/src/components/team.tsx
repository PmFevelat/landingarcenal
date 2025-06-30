import Link from 'next/link'

const members = [
    {
        name: 'Liam Brown',
        role: 'Founder - CEO',
        avatar: 'https://alt.tailus.io/images/team/member-one.webp',
        link: '#',
    },
    {
        name: 'Elijah Jones',
        role: 'Co-Founder - CTO',
        avatar: 'https://alt.tailus.io/images/team/member-two.webp',
        link: '#',
    },
    {
        name: 'Isabella Garcia',
        role: 'Sales Manager',
        avatar: 'https://alt.tailus.io/images/team/member-three.webp',
        link: '#',
    },
]

export default function TeamSection() {
    return (
        <section className="relative">
            <div className="relative z-10 py-8 md:py-12">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                        <div className="sm:w-2/5">
                            <h2 
                                className="text-white text-3xl font-extralight sm:text-4xl"
                                style={{ fontFamily: 'var(--font-inter-display)' }}
                            >
                                Our dream team
                            </h2>
                        </div>
                        <div className="mt-6 sm:mt-0">
                            <p 
                                className="text-gray-300 font-extralight leading-relaxed"
                                style={{ fontFamily: 'var(--font-inter-display)' }}
                            >
                                During the working process, we perform regular fitting with the client because he is the only person who can feel whether a new suit fits or not.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div key={index} className="group overflow-hidden flex flex-col bg-black/50 border border-white/10 backdrop-blur-sm rounded-xl p-6">
                                <img 
                                    className="h-72 w-full rounded-lg object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-64 group-hover:rounded-xl" 
                                    src={member.avatar} 
                                    alt="team member" 
                                    width="826" 
                                    height="1239" 
                                />
                                <div className="pt-4 flex-1">
                                    <div className="flex justify-between items-center">
                                        <h3 
                                            className="text-white text-lg font-normal transition-all duration-500 group-hover:tracking-wider"
                                            style={{ fontFamily: 'var(--font-inter-display)' }}
                                        >
                                            {member.name}
                                        </h3>
                                        <span 
                                            className="text-gray-500 text-xs font-extralight"
                                            style={{ fontFamily: 'var(--font-inter-display)' }}
                                        >
                                            _0{index + 1}
                                        </span>
                                    </div>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span 
                                            className="text-gray-300 inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 font-extralight"
                                            style={{ fontFamily: 'var(--font-inter-display)' }}
                                        >
                                            {member.role}
                                        </span>
                                        <Link 
                                            href={member.link} 
                                            className="group-hover:text-orange-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100 font-normal"
                                            style={{ fontFamily: 'var(--font-inter-display)' }}
                                        >
                                            Linktree
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
