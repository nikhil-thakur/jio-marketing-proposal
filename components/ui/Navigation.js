import { m } from 'framer-motion';

const Navigation = ({ onPrev, onNext, canGoPrev, canGoNext }) => {
    return (
        <div className="absolute bottom-10 right-10 flex space-x-4">
            <m.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onPrev}
                disabled={!canGoPrev}
                className={`h-12 w-12 rounded-full flex items-center justify-center focus:outline-none ${
                    canGoPrev
                        ? 'bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm hover:bg-opacity-30'
                        : 'bg-gray-700 bg-opacity-20 cursor-not-allowed'
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </m.button>

            <m.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                disabled={!canGoNext}
                className={`h-12 w-12 rounded-full flex items-center justify-center focus:outline-none ${
                    canGoNext
                        ? 'bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm hover:bg-opacity-30'
                        : 'bg-gray-700 bg-opacity-20 cursor-not-allowed'
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </m.button>
        </div>
    );
};

export default Navigation;