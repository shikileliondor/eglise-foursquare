import { motion } from 'framer-motion';

const LOGO_TRANSITION = { duration: 0.65, ease: [0.22, 1, 0.36, 1] };
const TEXT_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

export default function IntroIdentityMark() {
    const textClasses = 'text-[#0f2f5f] text-[clamp(0.68rem,2.6vw,1.25rem)] font-bold uppercase leading-tight tracking-[0.14em] sm:tracking-[0.18em]';

    return (
        <div
            className="grid w-full max-w-5xl grid-cols-[minmax(0,1fr)_clamp(6.5rem,22vw,10rem)_minmax(0,1fr)] items-center gap-3 px-2 text-center sm:gap-6 sm:px-6 md:gap-10"
            aria-label="Je suis Foursquare, je suis missionnaire"
        >
            <motion.p
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...TEXT_TRANSITION, delay: 0.55 }}
                className={`${textClasses} justify-self-end text-right`}
            >
                JE SUIS FOURSQUARE
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={LOGO_TRANSITION}
                className="flex aspect-square w-full items-center justify-center justify-self-center"
            >
                <img
                    src="/images/logo.png"
                    alt="Logo officiel Foursquare Côte d’Ivoire"
                    className="h-full w-full object-contain"
                />
            </motion.div>

            <motion.p
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...TEXT_TRANSITION, delay: 1.05 }}
                className={`${textClasses} justify-self-start text-left`}
            >
                JE SUIS MISSIONNAIRE
            </motion.p>
        </div>
    );
}
