import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const TOTAL_DURATION_MS = 2600;

export default function IntroSplash({ show = true, onComplete }) {
    useEffect(() => {
        if (!show) {
            return undefined;
        }

        const timer = window.setTimeout(() => {
            onComplete?.();
        }, TOTAL_DURATION_MS);

        return () => window.clearTimeout(timer);
    }, [show, onComplete]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.4, 0.0, 0.2, 1] } }}
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#040B1F]"
                >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,187,67,0.18),_rgba(10,24,60,0.7)_45%,_#040B1F_80%)]" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={{ opacity: [0, 0.95, 0.65], scale: [0.75, 1.04, 1] }}
                        transition={{ duration: 1.6, ease: 'easeOut' }}
                        className="pointer-events-none absolute h-[44vmin] w-[44vmin] rounded-full bg-gradient-to-r from-amber-300/35 via-orange-300/30 to-sky-400/35 blur-3xl"
                    />

                    <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
                        <div className="relative overflow-hidden py-4">
                            <motion.span
                                initial={{ x: '-130%', rotate: -8, opacity: 0.8 }}
                                animate={{ x: ['-130%', '15%', '130%'], rotate: [-8, -2, 4], opacity: [0.85, 1, 0] }}
                                transition={{ duration: 1.45, ease: [0.26, 1, 0.35, 1], times: [0, 0.62, 1], delay: 0.2 }}
                                className="absolute inset-y-1 left-0 z-10 w-[65%] rounded-[40px] bg-gradient-to-r from-amber-200/90 via-orange-300/90 to-sky-300/80 blur-[1px]"
                            />

                            <motion.h1
                                initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0.15 }}
                                animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                                transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
                                className="relative z-20 text-6xl font-black uppercase tracking-[0.14em] text-transparent drop-shadow-[0_0_40px_rgba(255,198,84,0.3)] sm:text-7xl md:text-8xl lg:text-9xl"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(95deg, #FFE38A 0%, #FFB247 34%, #FF7C3D 56%, #66B8FF 100%)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                }}
                            >
                                LIGHT
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.05, ease: 'easeOut' }}
                            className="mt-5 text-xs font-medium uppercase tracking-[0.28em] text-slate-100/90 sm:text-sm"
                        >
                            Living In God&apos;s Holy Truth
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
