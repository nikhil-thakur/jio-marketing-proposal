'use client';
import React, { useEffect, useState } from 'react';

// This component ensures that children only render on the client side
// Use this to wrap components that depend on browser APIs or have hydration issues
const ClientComponentWrapper = ({ children, fallback = null }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return fallback || <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return <>{children}</>;
};

export default ClientComponentWrapper;