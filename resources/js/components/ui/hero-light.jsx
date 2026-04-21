import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const textReveal = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            delay,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function HeroLight() {
    return (
        <section className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-[#050816] text-white">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-35"
                style={{ backgroundImage: "url('/images/banniere.png')" }}
                aria-hidden="true"
            />

            <div
                className="absolute inset-0 bg-gradient-to-b from-[#040612]/85 via-[#071022]/75 to-[#03040c]/92"
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(249,178,28,0.16),transparent_50%),radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_85%,rgba(10,132,255,0.08),transparent_45%)]"
                aria-hidden="true"
            />

            <motion.div
                aria-hidden="true"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute left-1/2 top-[44%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,191,56,0.92)_0%,rgba(255,145,60,0.5)_38%,rgba(255,145,60,0.08)_70%,transparent_100%)] blur-3xl md:top-[48%] md:h-[520px] md:w-[520px]"
            />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
                <div className="max-w-4xl text-center md:text-left">
                    <motion.p
                        variants={textReveal}
                        initial="hidden"
                        animate="visible"
                        custom={0.1}
                        className="text-xs font-semibold uppercase tracking-[0.36em] text-amber-200/90"
                    >
                        Jeunesse • Foi • Impact
                    </motion.p>

                    <motion.h1
                        variants={textReveal}
                        initial="hidden"
                        animate="visible"
                        custom={0.25}
                        className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-[0.08em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
                    >
                        LIGHT FOURSQUARE
                    </motion.h1>

                    <motion.p
                        variants={textReveal}
                        initial="hidden"
                        animate="visible"
                        custom={0.4}
                        className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-slate-200/90 sm:text-lg md:mx-0 md:text-xl"
                    >
                        Living In God&apos;s Holy Truth
                    </motion.p>

                    <motion.div
                        variants={textReveal}
                        initial="hidden"
                        animate="visible"
                        custom={0.55}
                        className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start"
                    >
                        <Link
                            href="/convention"
                            className="inline-flex w-full items-center justify-center rounded-full bg-amber-300 px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.14em] text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-200 sm:w-auto"
                        >
                            Convention
                        </Link>

                        <Link
                            href="/shop"
                            className="inline-flex w-full items-center justify-center rounded-full border border-white/50 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 sm:w-auto"
                        >
                            Boutique
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#03040c] to-transparent" aria-hidden="true" />
        </section>
    );
}
