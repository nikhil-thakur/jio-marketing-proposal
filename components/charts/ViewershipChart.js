import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ViewershipChart = () => {
    const data = [
        { name: 'Television', viewers: 546, platform: 'Star Sports', color: '#3498db' },
        { name: 'Digital', viewers: 620, platform: 'JioCinema', color: '#9b59b6' },
    ];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gray-900 p-3 rounded shadow-lg">
                    <p className="font-bold text-sm">{`${payload[0].payload.name} (${payload[0].payload.platform})`}</p>
                    <p className="text-blue-300 text-sm">{`${payload[0].value} Million Viewers`}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="h-64 w-full max-w-lg mx-auto">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                >
                    <XAxis
                        dataKey="name"
                        stroke="#ffffff"
                        tick={{ fill: '#ffffff', fontSize: 12 }}
                    />
                    <YAxis
                        stroke="#ffffff"
                        tick={{ fill: '#ffffff', fontSize: 12 }}
                        label={{
                            value: 'Viewers (Millions)',
                            angle: -90,
                            position: 'insideLeft',
                            fill: '#ffffff',
                            fontSize: 12
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="viewers" radius={[8, 8, 0, 0]}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ViewershipChart;