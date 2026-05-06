import { AnimatePresence, motion } from 'framer-motion';

import IntroIdentityMark from '@/components/IntroIdentityMark';

export default function OpeningIntro({ show }) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } }}
                    className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-white px-4 sm:px-6"
                >
                    <IntroIdentityMark idPrefix="opening-intro" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
