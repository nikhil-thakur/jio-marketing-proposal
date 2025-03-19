import React from 'react';
import { m } from 'framer-motion';

const AnimatedLogo = () => {
    return (
        <m.div
            className="relative w-32 h-32 md:w-40 md:h-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100
            }}
        >
            {/* Main Circle */}
            <m.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                animate={{
                    boxShadow: [
                        "0 0 10px rgba(37, 99, 235, 0.5)",
                        "0 0 20px rgba(37, 99, 235, 0.7)",
                        "0 0 10px rgba(37, 99, 235, 0.5)"
                    ]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            {/* Cricket ball */}
            <m.div
                className="absolute w-1/3 h-1/3 top-0 right-0 rounded-full cricket-ball"
                animate={{
                    rotate: 360
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <div className="text-center">
                        <m.div
                            className="text-2xl md:text-3xl font-bold text-white ipl-glow"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            IPL
                        </m.div>
                        <div className="text-xs md:text-sm text-blue-200">AD REVIEW</div>
                    </div>
                </m.div>
            </div>
        </m.div>
    );
};

export default AnimatedLogo;