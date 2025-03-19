import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const RevenueProjection = () => {
    // Projected data with estimated growth of 8-10%
    const data = [
        { year: '2023', revenue: 4700, projection: 4700 },
        { year: '2024', revenue: 5076, projection: 5170 },
        { year: '2025', revenue: null, projection: 5687 },
        { year: '2026', revenue: null, projection: 6256 },
        { year: '2027', revenue: null, projection: 6881 },
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gray-900 p-3 rounded shadow-lg">
                    <p className="font-bold text-sm">{`Year: ${label}`}</p>
                    {payload.map((entry, index) => (
                        <p key={index} style={{ color: entry.color }} className="text-sm">
                            {`${entry.name}: ₹${entry.value} Crore`}
                        </p>
                    ))}
                </div>
            );
        }

        return null;
    };

    return (
        <div className="h-64 w-full max-w-lg mx-auto">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis
                        dataKey="year"
                        tick={{ fill: '#ffffff', fontSize: 12 }}
                        stroke="rgba(255,255,255,0.3)"
                    />
                    <YAxis
                        tick={{ fill: '#ffffff', fontSize: 12 }}
                        stroke="rgba(255,255,255,0.3)"
                        label={{
                            value: 'Ad Revenue (₹ Crore)',
                            angle: -90,
                            position: 'insideLeft',
                            fill: '#ffffff',
                            fontSize: 12
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ color: '#ffffff' }} />
                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#3498db"
                        strokeWidth={3}
                        dot={{ r: 6 }}
                        name="Actual Revenue"
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="projection"
                        stroke="#9b59b6"
                        strokeWidth={3}
                        strokeDasharray="5 5"
                        dot={{ r: 6 }}
                        name="Projected Revenue (8-10% Growth)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueProjection;