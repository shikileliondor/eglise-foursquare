import { motion } from 'framer-motion';

const LOGO_TRANSITION = { duration: 0.65, ease: [0.22, 1, 0.36, 1] };
const TEXT_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

export default function IntroIdentityMark({ idPrefix = 'intro' }) {
    const textClasses = 'fill-[#0f2f5f] text-[18px] font-bold uppercase tracking-[0.18em] sm:text-[20px]';
    const topCurveId = `${idPrefix}-top-curve`;
    const bottomCurveId = `${idPrefix}-bottom-curve`;

    return (
        <div
            className="relative h-[min(82vw,420px)] w-[min(82vw,420px)] max-h-[72svh] max-w-[72svh]"
            aria-label="Je suis Foursquare, je suis missionnaire"
        >
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 360 360" role="img" aria-hidden="true">
                <defs>
                    <path id={topCurveId} d="M 56 180 A 124 124 0 0 1 304 180" />
                    <path id={bottomCurveId} d="M 56 214 A 124 124 0 0 0 304 214" />
                </defs>

                <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ...TEXT_TRANSITION, delay: 0.55 }}
                    className={textClasses}
                    textAnchor="middle"
                >
                    <textPath href={`#${topCurveId}`} startOffset="50%">
                        JE SUIS FOURSQUARE
                    </textPath>
                </motion.text>

                <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ...TEXT_TRANSITION, delay: 1.05 }}
                    className={textClasses}
                    textAnchor="middle"
                >
                    <textPath href={`#${bottomCurveId}`} startOffset="50%">
                        JE SUIS MISSIONNAIRE
                    </textPath>
                </motion.text>
            </svg>

            <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={LOGO_TRANSITION}
                className="absolute inset-0 flex items-center justify-center"
            >
                <img
                    src="/images/logo.png"
                    alt="Logo officiel Foursquare Côte d’Ivoire"
                    className="h-[34%] w-[34%] max-h-36 max-w-36 object-contain sm:h-[36%] sm:w-[36%]"
                />
            </motion.div>
        </div>
    );
}
