import { motion } from 'framer-motion';

import IntroIdentityMark from '@/components/IntroIdentityMark';

export default function IntroScreen() {
    return (
        <motion.section
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } }}
            className="fixed inset-0 z-50 flex min-h-[100svh] items-center justify-center overflow-hidden bg-white px-4"
        >
            <IntroIdentityMark idPrefix="intro-screen" />
        </motion.section>
    );
}
