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
            className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-white"
        >
            <div className="text-center">
                <AnimatedLetters
                    text="LIGHT"
                    className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-6xl font-extrabold tracking-[0.18em] text-transparent md:text-8xl"
                    delay={0}
                />

                <AnimatedLetters
                    text="FOURSQUARE"
                    className="mt-4 text-3xl font-bold tracking-[0.22em] text-blue-600 md:text-5xl"
                    delay={0.5}
                />

                <AnimatedLetters
                    text="Living in God’s Holy Truth"
                    className="mt-6 text-xs uppercase tracking-[0.45em] text-gray-500 md:text-sm"
                    delay={1.05}
                />
            </div>
        </motion.section>
    );
}
