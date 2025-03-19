import { m } from 'framer-motion';

const BackgroundElements = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Large circle top right */}
            <m.div
                className="circle-decoration w-96 h-96 -top-32 -right-32 bg-blue-500"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.12, 0.15, 0.12],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />

            {/* Medium circle bottom left */}
            <m.div
                className="circle-decoration w-64 h-64 -bottom-16 -left-16 bg-purple-500"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.10, 0.13, 0.10],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 2,
                }}
            />

            {/* Small circles scattered */}
            <m.div
                className="circle-decoration w-16 h-16 top-1/4 right-1/3 bg-blue-400"
                animate={{
                    y: [0, -15, 0],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />

            <m.div
                className="circle-decoration w-20 h-20 bottom-1/3 left-1/4 bg-purple-400"
                animate={{
                    y: [0, 15, 0],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1,
                }}
            />

            <m.div
                className="circle-decoration w-12 h-12 top-1/2 right-1/4 bg-blue-300"
                animate={{
                    x: [0, 10, 0],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 3,
                }}
            />

            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
                <m.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-white"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: 0.1 + Math.random() * 0.2,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: Math.random() * 5,
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundElements;