import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import default styles

const SalesGauge = ({ sales, maxSales }) => {
    // Ensure we have non-zero sales and maxSales to avoid division by zero
    if (maxSales === 0) {
        return <div>Error: maxSales cannot be zero</div>;
    }

    // Calculate the percentage of sales (0 to 100)
    const percentage = (sales / maxSales) * 100;

    const [currentPercentage, setCurrentPercentage] = useState(0);

    // Animate the percentage value change smoothly
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentPercentage(percentage);
        }, 100); // Delay of 100ms before animating
        return () => clearTimeout(timeout); // Clean up the timeout on unmount
    }, [sales, maxSales]);

    return (
        <div className="relative w-48 h-48">
            {/* Circular Progress Bar */}
            <CircularProgressbar
                value={currentPercentage}  // Pass the current animated percentage
                styles={{
                    path: {
                        stroke: '#f97316', // Orange color for the progress path
                        strokeLinecap: 'round', // Round corners for the stroke
                        transition: 'stroke-dashoffset 1.0s ease 0s', // Smooth transition effect
                    },
                    trail: {
                        stroke: '#e5e7eb', // Light gray for the trail path
                    },
                    text: {
                        fill: '#4b5563', // Text color (gray)
                        fontSize: '18px', // Font size for the text
                        fontWeight: 'bold', // Make the text bold
                    },
                }}
            />
            {/* Centered content with sales and "Total Sale" */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                {/* Sales amount */}
                <p className="text-2xl font-bold text-gray-800">
                    ${sales.toLocaleString()}
                </p>
                {/* Total Sale label */}
                <p className="text-sm text-gray-500">
                    Total Sale
                </p>
            </div>
        </div>
    );
};

export default SalesGauge;
