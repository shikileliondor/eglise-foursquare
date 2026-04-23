import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import HomePage from '@/components/HomePage';
import IntroScreen from '@/components/IntroScreen';

const INTRO_TEXT_DURATION_MS = 2200;
const INTRO_WAIT_BEFORE_EXIT_MS = 500;

export default function App() {
    // State flow: intro is shown first, then hidden after text + short pause.
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        if (!showIntro) {
            return undefined;
        }

        const totalDelay = INTRO_TEXT_DURATION_MS + INTRO_WAIT_BEFORE_EXIT_MS;
        const timer = window.setTimeout(() => {
            setShowIntro(false);
        }, totalDelay);

        return () => window.clearTimeout(timer);
    }, [showIntro]);

    useEffect(() => {
        document.body.style.overflow = showIntro ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [showIntro]);

    return (
        <main className="relative min-h-screen bg-white">
            <AnimatePresence>{showIntro && <IntroScreen key="intro-screen" />}</AnimatePresence>
            <HomePage />
        </main>
    );
}
