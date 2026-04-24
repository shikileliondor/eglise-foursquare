import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp } from '@/lib/animations'

interface MotionSectionProps {
    children: ReactNode
    className?: string
    delay?: number
}

export function MotionSection({ children, className, delay = 0 }: MotionSectionProps) {
    return (
        <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay }}
            viewport={{ once: true, margin: '-80px' }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
