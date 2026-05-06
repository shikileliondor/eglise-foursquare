import { motion } from 'framer-motion';

const LOGO_TRANSITION = { duration: 0.65, ease: [0.22, 1, 0.36, 1] };
const TEXT_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

export default function IntroIdentityMark() {
    const textClasses = 'text-center text-[#0f2f5f] text-[clamp(0.8rem,3vw,1.35rem)] font-bold uppercase leading-tight tracking-[0.16em] sm:tracking-[0.22em]';

    return (
        <div
            className="flex w-full max-w-3xl flex-col items-center justify-center gap-6 px-4 text-center sm:gap-8 sm:px-6"
            aria-label="Je suis Foursquare, je suis missionnaire"
        >
            <motion.p
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...TEXT_TRANSITION, delay: 0.55 }}
                className={textClasses}
            >
                JE SUIS FOURSQUARE
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={LOGO_TRANSITION}
                className="flex h-[clamp(7rem,28vw,11rem)] w-[clamp(7rem,28vw,11rem)] items-center justify-center"
            >
                <img
                    src="/images/logo.png"
                    alt="Logo officiel Foursquare Côte d’Ivoire"
                    className="h-full w-full object-contain"
                />
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...TEXT_TRANSITION, delay: 1.05 }}
                className={textClasses}
            >
                JE SUIS MISSIONNAIRE
            </motion.p>
        </div>
    );
}
