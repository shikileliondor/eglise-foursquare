import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { TextScramble } from '@/components/ui/text-scramble';

const LOGO_TRANSITION = { duration: 0.65, ease: [0.22, 1, 0.36, 1] };
const TEXT_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function IntroIdentityMark() {
    const [showTopText, setShowTopText] = useState(false);
    const [showBottomText, setShowBottomText] = useState(false);
    const textClasses = 'text-center text-[#0f2f5f] text-[clamp(0.8rem,3vw,1.35rem)] font-bold uppercase leading-tight tracking-[0.16em] sm:tracking-[0.22em]';

    useEffect(() => {
        const topTimer = window.setTimeout(() => setShowTopText(true), 450);
        const bottomTimer = window.setTimeout(() => setShowBottomText(true), 1000);

        return () => {
            window.clearTimeout(topTimer);
            window.clearTimeout(bottomTimer);
        };
    }, []);

    return (
        <div
            className="flex w-full max-w-3xl flex-col items-center justify-center gap-6 px-4 text-center sm:gap-8 sm:px-6"
            aria-label="Je suis Foursquare, je suis missionnaire"
        >
            <TextScramble
                as="p"
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: showTopText ? 1 : 0, y: showTopText ? 0 : -14 }}
                transition={TEXT_TRANSITION}
                className={textClasses}
                duration={0.45}
                speed={0.025}
                characterSet={SCRAMBLE_CHARS}
                trigger={showTopText}
            >
                JE SUIS FOURSQUARE
            </TextScramble>

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

            <TextScramble
                as="p"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: showBottomText ? 1 : 0, y: showBottomText ? 0 : 14 }}
                transition={TEXT_TRANSITION}
                className={textClasses}
                duration={0.45}
                speed={0.025}
                characterSet={SCRAMBLE_CHARS}
                trigger={showBottomText}
            >
                JE SUIS MISSIONNAIRE
            </TextScramble>
        </div>
    );
}
