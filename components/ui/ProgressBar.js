import { m } from 'framer-motion';

const ProgressBar = ({ total, current }) => {
    const progress = (current / total) * 100;

    return (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
            <m.div
                className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
            />
            <div className="absolute bottom-4 left-10 text-white text-sm opacity-70">
                {current} / {total}
            </div>
        </div>
    );
};

export default ProgressBar;