import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import IntroIdentityMark from '@/components/IntroIdentityMark';

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
                    exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } }}
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-white px-4 sm:px-6"
                >
                    <IntroIdentityMark idPrefix="intro-splash" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
