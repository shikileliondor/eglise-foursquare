import { AnimatePresence, motion } from 'framer-motion';

const CONTAINER_TRANSITION = { duration: 0.9, ease: [0.22, 1, 0.36, 1] };

export default function OpeningIntro({ show }) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } }}
                    className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-white px-4 sm:px-6"
                >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.16),_rgba(59,130,246,0.08)_45%,_rgba(255,255,255,1)_78%)]" />

                    <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center">
                        <div className="flex flex-wrap items-end justify-center gap-3 sm:gap-6">
                            <motion.h1
                                initial={{ x: -80, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={CONTAINER_TRANSITION}
                                className="font-heading bg-gradient-to-r from-[#facc15] via-[#ef4444] via-[56%] to-[#3b82f6] bg-clip-text text-5xl font-black uppercase leading-none tracking-[0.05em] text-transparent drop-shadow-[0_0_24px_rgba(239,68,68,0.18)] sm:text-7xl sm:tracking-[0.08em] md:text-8xl lg:text-9xl"
                            >
                                LIGHT
                            </motion.h1>

                            <motion.h2
                                initial={{ x: 80, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ ...CONTAINER_TRANSITION, delay: 0.14 }}
                                className="font-heading text-3xl font-black uppercase leading-none tracking-[0.04em] text-[#7c3aed] drop-shadow-[0_0_20px_rgba(124,58,237,0.2)] sm:text-5xl sm:tracking-[0.08em] md:text-6xl lg:text-7xl"
                            >
                                Foursquare
                            </motion.h2>
                        </div>

                        <motion.p
                            initial={{ y: 55, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ...CONTAINER_TRANSITION, delay: 0.32 }}
                            className="mt-7 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-600 sm:text-xs sm:tracking-[0.42em] md:text-sm"
                        >
                            Living God&apos;s Holy Truth
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
