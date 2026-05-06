import { Head, router } from '@inertiajs/react';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import IntroScreen from '@/components/IntroScreen';

const INTRO_TEXT_DURATION_MS = 1700;
const INTRO_WAIT_BEFORE_EXIT_MS = 350;
const INTRO_EXIT_DURATION_MS = 450;

export default function IntroIndex() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const hideTimer = window.setTimeout(() => {
            setShowIntro(false);
        }, INTRO_TEXT_DURATION_MS + INTRO_WAIT_BEFORE_EXIT_MS);

        const redirectTimer = window.setTimeout(() => {
            router.visit(route('home'));
        }, INTRO_TEXT_DURATION_MS + INTRO_WAIT_BEFORE_EXIT_MS + INTRO_EXIT_DURATION_MS);

        return () => {
            document.body.style.overflow = '';
            window.clearTimeout(hideTimer);
            window.clearTimeout(redirectTimer);
        };
    }, []);

    return (
        <>
            <Head title="Introduction" />
            <main className="relative min-h-screen bg-white">
                <AnimatePresence>{showIntro && <IntroScreen key="intro-screen" />}</AnimatePresence>
            </main>
        </>
    );
}
