'use client'; 

import { useEffect, useState, useRef } from 'react';

export default function LiveDashboard() {
    const [messages, setMessages] = useState<any[]>([]);
    const [isConnected, setIsConnected] = useState(false);
    const eventSourceRef = useRef<EventSource | null>(null);

    useEffect(() => {
        const eventSource = new EventSource('/api/events');
        eventSourceRef.current = eventSource;
        setIsConnected(true);
        
        console.log(eventSource)
        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prev) => [...prev, data].slice(-5)); 
        };

        eventSource.onerror = (error) => {
            console.error("SSE error:", error);
            eventSource.close();
            setIsConnected(false);
        };

        return () => {
            eventSource.close();
            setIsConnected(false);
        };
    }, []);

    const handleCancel = () => {
        if (eventSourceRef.current) {
            eventSourceRef.current.close();
            setIsConnected(false);
        }
    };

    return (
        <div className="p-4">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold">SSE demo </h1>
                <button
                    onClick={handleCancel}
                    disabled={!isConnected}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                    {isConnected ? 'Cancel Stream' : 'Disconnected'}
                </button>
            </div>
            <div className="space-y-2">
                {messages.map((m, i) => (
                    <div key={i} className="p-2 border rounded shadow-sm">
                        <span className="font-mono text-blue-600">[{m.time}]</span> {m.message}
                    </div>
                ))}
            </div>
        </div>
    );
}