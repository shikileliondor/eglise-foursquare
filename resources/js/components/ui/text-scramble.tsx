'use client';

import { type JSX, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, type MotionProps } from 'framer-motion';
import type React from 'react';

type TextScrambleProps = {
    children: string;
    duration?: number;
    speed?: number;
    characterSet?: string;
    as?: React.ElementType;
    className?: string;
    trigger?: boolean;
    onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
    children,
    duration = 0.8,
    speed = 0.04,
    characterSet = defaultChars,
    className,
    as: Component = 'p',
    trigger = true,
    onScrambleComplete,
    ...props
}: TextScrambleProps) {
    const MotionComponent = useMemo(
        () => motion.create(Component as keyof JSX.IntrinsicElements),
        [Component],
    );
    const [displayText, setDisplayText] = useState(children);
    const [isAnimating, setIsAnimating] = useState(false);
    const intervalRef = useRef<number | null>(null);
    const text = children;

    const clearScrambleInterval = useCallback(() => {
        if (intervalRef.current === null) {
            return;
        }

        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
    }, []);

    const scramble = useCallback(() => {
        if (isAnimating) return;

        setIsAnimating(true);
        clearScrambleInterval();

        const steps = Math.max(1, Math.round(duration / speed));
        let step = 0;

        intervalRef.current = window.setInterval(() => {
            let scrambled = '';
            const progress = step / steps;

            for (let i = 0; i < text.length; i++) {
                if (text[i] === ' ') {
                    scrambled += ' ';
                    continue;
                }

                if (progress * text.length > i) {
                    scrambled += text[i];
                } else {
                    scrambled += characterSet[Math.floor(Math.random() * characterSet.length)];
                }
            }

            setDisplayText(scrambled);
            step++;

            if (step > steps) {
                clearScrambleInterval();
                setDisplayText(text);
                setIsAnimating(false);
                onScrambleComplete?.();
            }
        }, speed * 1000);
    }, [characterSet, clearScrambleInterval, duration, isAnimating, onScrambleComplete, speed, text]);

    useEffect(() => {
        setDisplayText(children);
    }, [children]);

    useEffect(() => {
        if (!trigger) return undefined;

        scramble();

        return clearScrambleInterval;
    }, [clearScrambleInterval, scramble, trigger]);

    return (
        <MotionComponent className={className} {...props}>
            {displayText}
        </MotionComponent>
    );
}
