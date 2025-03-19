import React from 'react';
import { m } from 'framer-motion';

const Slide = ({ data }) => {
    const renderContent = (content) => {
        if (!content) return null;

        return content.map((item, index) => {
            switch (item.type) {
                case 'heading':
                    return (
                        <m.h3
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-xl md:text-2xl font-light italic mb-8 max-w-3xl mx-auto"
                        >
                            {item.text}
                        </m.h3>
                    );

                case 'bullet-list':
                    return (
                        <m.ul
                            key={index}
                            className="text-lg md:text-xl space-y-6 max-w-4xl mx-auto"
                        >
                            {item.items.map((listItem, i) => (
                                <m.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                                    className="flex items-start"
                                >
                                    <span className="text-blue-300 mr-3">•</span>
                                    <span>{listItem}</span>
                                </m.li>
                            ))}
                        </m.ul>
                    );

                case 'numbered-list':
                    return (
                        <m.ol
                            key={index}
                            className="text-lg md:text-xl space-y-6 max-w-4xl mx-auto list-decimal pl-6"
                        >
                            {item.items.map((listItem, i) => (
                                <m.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                                    className="pl-2"
                                >
                                    {listItem}
                                </m.li>
                            ))}
                        </m.ol>
                    );

                case 'stats':
                    return (
                        <m.div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 max-w-5xl mx-auto"
                        >
                            {item.items.map((stat, i) => (
                                <m.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                                    className="bg-white bg-opacity-10 rounded-xl p-6 text-center backdrop-filter backdrop-blur-sm"
                                >
                                    <div className="text-3xl md:text-5xl font-bold text-blue-300 mb-2">{stat.value}</div>
                                    <div className="text-sm md:text-base">{stat.label}</div>
                                    {stat.highlight && (
                                        <div className="mt-2 text-sm font-semibold text-green-400">{stat.highlight}</div>
                                    )}
                                </m.div>
                            ))}
                        </m.div>
                    );

                case 'table':
                    return (
                        <m.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="my-8 max-w-4xl mx-auto overflow-hidden rounded-lg"
                        >
                            <table className="min-w-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
                                <thead className="bg-blue-900 bg-opacity-70">
                                <tr>
                                    {item.headers.map((header, i) => (
                                        <th key={i} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700">
                                {item.rows.map((row, i) => (
                                    <m.tr
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + (i * 0.1), duration: 0.3 }}
                                    >
                                        {row.map((cell, j) => (
                                            <td key={j} className="px-6 py-4 whitespace-nowrap text-sm">
                                                {cell}
                                            </td>
                                        ))}
                                    </m.tr>
                                ))}
                                </tbody>
                            </table>
                        </m.div>
                    );

                case 'quote':
                    return (
                        <m.blockquote
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="border-l-4 border-blue-400 pl-4 my-8 max-w-3xl mx-auto italic text-lg md:text-xl"
                        >
                            {item.text}
                        </m.blockquote>
                    );

                case 'columns':
                    return (
                        <m.div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-2 gap-10 my-8 max-w-5xl mx-auto"
                        >
                            {item.columns.map((column, i) => (
                                <m.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.2), duration: 0.5 }}
                                    className="bg-white bg-opacity-5 p-6 rounded-lg backdrop-filter backdrop-blur-sm"
                                >
                                    <h4 className="text-xl font-semibold mb-4 text-blue-300">{column.title}</h4>
                                    <ul className="space-y-3">
                                        {column.items.map((item, j) => (
                                            <m.li
                                                key={j}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + (j * 0.1), duration: 0.3 }}
                                                className="flex items-start"
                                            >
                                                <span className="text-blue-400 mr-2">•</span>
                                                <span>{item}</span>
                                            </m.li>
                                        ))}
                                    </ul>
                                </m.div>
                            ))}
                        </m.div>
                    );

                case 'cta':
                    return (
                        <m.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="my-8 text-center"
                        >
                            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg md:text-xl shadow-lg">
                                {item.text}
                            </div>
                        </m.div>
                    );

                case 'customContent':
                    return (
                        <m.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="my-8 flex justify-center"
                        >
                            {item.component}
                        </m.div>
                    );

                default:
                    return null;
            }
        });
    };

    return (
        <div className="h-full w-full bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col justify-center items-center p-10 overflow-y-auto text-white">
            {/* Title */}
            {data.title && (
                <m.h2
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-3xl md:text-5xl font-bold mb-4 text-center"
                >
                    {data.title}
                </m.h2>
            )}

            {/* Subtitle if present */}
            {data.subtitle && (
                <m.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.2, duration: 0.5}}
                    className="text-xl md:text-2xl mb-8 text-center max-w-4xl"
                >
                    {data.subtitle}
                </m.p>
            )}

            {/* Render content based on structure */}
            {data.content && renderContent(data.content)}
        </div>
    );
};

export default Slide;