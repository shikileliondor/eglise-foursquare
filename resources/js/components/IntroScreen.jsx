import { motion } from 'framer-motion';

const lineContainer = {
    hidden: {},
    visible: {
        transition: {
            // Stagger animation: each letter starts slightly after the previous one.
            staggerChildren: 0.045,
        },
    },
};

const letterVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

function AnimatedLetters({ text, className = '', delay = 0 }) {
    return (
        <motion.div
            variants={lineContainer}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: delay }}
            className={className}
            aria-label={text}
        >
            {Array.from(text).map((char, index) => (
                <motion.span key={`${char}-${index}`} variants={letterVariant} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.div>
    );
}

export default function IntroScreen() {
    return (
        <motion.section
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            // Exit transition: whole intro slides up to reveal homepage.
            exit={{ y: '-100%', transition: { duration: 0.8, ease: 'easeInOut' } }}
            className="fixed inset-0 z-50 flex min-h-[100svh] items-center justify-center overflow-hidden bg-white px-4"
        >
            <div className="text-center">
                <AnimatedLetters
                    text="LIGHT"
                    className="font-chewy bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-5xl font-extrabold tracking-[0.12em] text-transparent sm:text-6xl md:text-8xl md:tracking-[0.18em]"
                    delay={0}
                />

                <AnimatedLetters
                    text="FOURSQUARE"
                    className="font-chewy mt-4 text-2xl font-bold tracking-[0.12em] text-blue-600 sm:text-3xl md:text-5xl md:tracking-[0.22em]"
                    delay={0.5}
                />

                <AnimatedLetters
                    text="Living in God’s Holy Truth"
                    className="font-chewy mt-6 text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:text-xs md:text-sm md:tracking-[0.45em]"
                    delay={1.05}
                />
            </div>
        </motion.section>
    );
}
