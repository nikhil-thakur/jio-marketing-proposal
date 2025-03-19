'use client' // Add this if using Next.js 13+ with App Router

import React, { useEffect, useState } from 'react';
import { LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';

export default function MotionConfig({ children }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // During server-side rendering or initial client load
    if (!isClient) {
        return <div>{children}</div>;
    }

    return (
        <LazyMotion features={domAnimation} strict>
            <AnimatePresence mode="wait">
                {children}
            </AnimatePresence>
        </LazyMotion>
    );
}