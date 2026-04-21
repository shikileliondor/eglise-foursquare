"use client";

import { motion } from 'framer-motion';
import { Circle, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = 'from-white/[0.08]',
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn('absolute', className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        'absolute inset-0 rounded-full',
                        'bg-gradient-to-r to-transparent',
                        gradient,
                        'backdrop-blur-[2px] border-2 border-white/[0.15]',
                        'shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]',
                        'after:absolute after:inset-0 after:rounded-full',
                        'after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]'
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = 'Light Foursquare',
    title1 = 'LA LUMIÈRE',
    title2 = 'QUI RASSEMBLE',
    description = 'Une génération qui s’élève entre foi vivante, créativité et impact collectif.',
    backgroundImage =
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80',
    primaryCta = { label: 'Découvrir la convention', href: '/convention' },
    secondaryCta = { label: 'Explorer la boutique', href: '/shop' },
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#030303] text-white">
            <img src={backgroundImage} alt="Assemblée Light Foursquare" className="absolute inset-0 h-full w-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.2),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.2),transparent_40%)]" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.2]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-amber-500/[0.22]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.2]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-sky-500/[0.2]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />
            </div>

            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-4 py-1.5"
                    >
                        <Circle className="h-2 w-2 fill-amber-400 text-amber-400" />
                        <span className="text-xs tracking-[0.22em] text-white/70 uppercase">{badge}</span>
                    </motion.div>

                    <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-8xl xl:text-[9rem]">
                            <span className="bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent">{title1}</span>
                            <br />
                            <span className="bg-gradient-to-r from-amber-200 via-white to-blue-200 bg-clip-text text-transparent">{title2}</span>
                        </h1>
                    </motion.div>

                    <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible" className="mt-6 max-w-2xl">
                        <p className="text-base font-light leading-relaxed text-white/75 sm:text-lg lg:text-xl">{description}</p>
                    </motion.div>

                    <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" className="mt-9 flex flex-wrap gap-3">
                        <a
                            href={primaryCta.href}
                            className="inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-100"
                        >
                            {primaryCta.label}
                        </a>
                        <a
                            href={secondaryCta.href}
                            className="inline-flex items-center rounded-full border border-white/35 bg-black/30 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                        >
                            <Sparkles className="mr-2 h-4 w-4" />
                            {secondaryCta.label}
                        </a>
                    </motion.div>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/50" />
        </section>
    );
}

export { HeroGeometric };
