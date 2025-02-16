import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    PaperAirplaneIcon,
    XMarkIcon,
    ChevronDownIcon,
    DocumentDuplicateIcon,
    ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';
import { v4 } from 'uuid';

// Mock Data
const assistants = [
    {
        id: 1,
        type: 'customer',
        name: 'Customer Assistant',
        avatar: '🛎',
        color: 'bg-indigo-500',
    },
];

const testPrompts = {
    customer: [
        "What's your refund policy?",
        'How do I track my order?',
        'Do you have a loyalty program?',
    ],
};

interface Message {
    id: string;
    text: string;
    isAI: boolean;
    timestamp: string;
}

export default function ChatModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [selectedAssistant, setSelectedAssistant] = useState(assistants[0]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showTestData, setShowTestData] = useState(false);
    const [showInitialPrompts, setShowInitialPrompts] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const [testData] = useState({
        userId_0: 'USR12345',
        userId_1: 'USR67890',
        userId_2: 'USR34567',
        orderNumber_0: 'ORD1001',
        orderNumber_1: 'ORD1002',
        orderNumber_2: 'ORD1003',
        productName_0: 'Wireless Headphones',
        productName_1: 'Laptop Stand',
        productName_2: 'smart watch',
        customerEmail_0: 'johndoe@example.com',
        customerEmail_1: 'janesmith@example.com',
        customerEmail_2: 'alicebrown@example.com',
        customerPhoneNumber_0: '+1234567890',
        customerPhoneNumber_1: '+1234567891',
        customerPhoneNumber_2: '+1234567892',
    });

    let threadId = localStorage.getItem("threadId");

    if (!threadId) {
        const newThreadId = v4();
        localStorage.setItem("threadId", newThreadId); // No need for JSON.stringify since it's a string
        threadId = newThreadId; // Assign the newly generated threadId
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        if (showInitialPrompts) setShowInitialPrompts(false);

        const newMessage: Message = {
            id: Date.now().toString(),
            text: inputMessage,
            isAI: false,
            timestamp: new Date().toLocaleTimeString(),
        };

        setMessages((prev) => [...prev, newMessage]);
        setInputMessage('');

        // Simulate AI response
        setIsTyping(true);
        const res = await fetch(
            'https://q5x7juc6cb.execute-api.eu-north-1.amazonaws.com/test/api/chat',
            {
                method: 'POST', // Method names should be uppercase
                headers: {
                    'Content-Type': 'application/json', // Specify JSON content type
                },
                body: JSON.stringify({
                    message: inputMessage,
                    thread_id: threadId,
                }),
            },
        );
        if (!res.ok) return;

        const resData = await res.json();

        // setTimeout(() => {
        const aiResponse: Message = {
            id: Date.now().toString(),
            text: resData.output,
            isAI: true,
            timestamp: new Date().toLocaleTimeString(),
        };
        setMessages((prev) => [...prev, aiResponse]);
        setIsTyping(false);
        // }, 1500);
    };

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4"
                >
                    <motion.div
                        initial={{ y: 20, scale: 0.95 }}
                        animate={{ y: 0, scale: 1 }}
                        exit={{ y: 20, scale: 0.95 }}
                        className="bg-slate-800 rounded-xl shadow-2xl flex flex-col w-full max-w-4xl h-[90dvh]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-3 md:p-4 border-b border-slate-700">
                            <div className="flex items-center gap-2 md:gap-4">
                                <div
                                    className={`${selectedAssistant.color} w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-lg md:text-xl`}
                                >
                                    {selectedAssistant.avatar}
                                </div>
                                <select
                                    value={selectedAssistant.id}
                                    onChange={(e) =>
                                        setSelectedAssistant(
                                            assistants.find(
                                                (a) =>
                                                    a.id ===
                                                    Number(e.target.value),
                                            )!,
                                        )
                                    }
                                    className="bg-slate-700 rounded-lg px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm focus:ring-2 focus:ring-indigo-500"
                                >
                                    {assistants.map((assistant) => (
                                        <option
                                            key={assistant.id}
                                            value={assistant.id}
                                        >
                                            {assistant.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() =>
                                        setShowTestData(!showTestData)
                                    }
                                    className="flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs md:text-sm transition-colors"
                                >
                                    <ClipboardDocumentIcon className="w-4 h-4" />
                                    <span className="hidden md:inline">
                                        Test Data
                                    </span>
                                    <ChevronDownIcon
                                        className={`w-4 h-4 transition-transform ${showTestData ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <button
                                    onClick={onClose}
                                    className="p-1 md:p-2 hover:bg-slate-700 rounded-lg transition-colors"
                                >
                                    <XMarkIcon className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Test Data Panel */}
                        {showTestData && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="border-b border-slate-700 p-3 md:p-4 bg-slate-750"
                            >
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                                    {Object.entries(testData).map(
                                        ([key, value]) => (
                                            <div
                                                key={key}
                                                className="group relative flex items-center justify-between p-1.5 md:p-2 bg-slate-700 rounded-lg"
                                            >
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[10px] md:text-xs text-gray-400 truncate">
                                                        {key}
                                                    </p>
                                                    <p className="text-xs md:text-sm truncate">
                                                        {value}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        copyToClipboard(
                                                            value.toString(),
                                                        )
                                                    }
                                                    className="ml-1 p-1 hover:bg-slate-600 rounded-md transition-colors"
                                                    title="Copy to clipboard"
                                                >
                                                    <DocumentDuplicateIcon className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                                                </button>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* Chat Area */}
                        <div className="flex-1 flex flex-col overflow-hidden">
                            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 relative">
                                <AnimatePresence>
                                    {showInitialPrompts && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6"
                                        >
                                            {(testPrompts as any)[
                                                selectedAssistant.type
                                            ].map(
                                                (
                                                    prompt: string,
                                                    idx: number,
                                                ) => (
                                                    <motion.div
                                                        key={idx}
                                                        whileHover={{
                                                            scale: 1.02,
                                                        }}
                                                        className="p-2 md:p-3 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600 transition-all"
                                                        onClick={() => {
                                                            setInputMessage(
                                                                prompt,
                                                            );
                                                            setShowInitialPrompts(
                                                                false,
                                                            );
                                                        }}
                                                    >
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-xs md:text-sm">
                                                                {prompt}
                                                            </span>
                                                            <button
                                                                onClick={(
                                                                    e,
                                                                ) => {
                                                                    e.stopPropagation();
                                                                    copyToClipboard(
                                                                        prompt,
                                                                    );
                                                                }}
                                                                className="p-1 hover:bg-slate-500 rounded-md"
                                                            >
                                                                <DocumentDuplicateIcon className="w-3 h-3 md:w-4 md:h-4" />
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                ),
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Messages */}
                                {messages.map((message) => (
                                    <motion.div
                                        key={message.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
                                    >
                                        <div
                                            className={`max-w-[85%] md:max-w-[75%] p-2 md:p-3 rounded-lg ${message.isAI ? 'bg-slate-700' : 'bg-indigo-600'}`}
                                        >
                                            <p className="text-xs md:text-sm">
                                                {message.text}
                                            </p>
                                            <p className="text-[10px] md:text-xs text-gray-400 mt-1">
                                                {message.timestamp}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}

                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex items-center gap-2 text-gray-400 text-xs md:text-sm"
                                    >
                                        <div className="flex space-x-1">
                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" />
                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                                        </div>
                                        {selectedAssistant.name} is typing...
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <form
                                onSubmit={handleSendMessage}
                                className="border-t border-slate-700 p-3 md:p-4"
                            >
                                <div className="flex gap-2">
                                    <input
                                        value={inputMessage}
                                        onChange={(e) =>
                                            setInputMessage(e.target.value)
                                        }
                                        placeholder="Type your message..."
                                        className="flex-1 bg-slate-700 rounded-lg px-3 py-2 text-xs md:text-sm focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <button
                                        type="submit"
                                        className="p-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                                        disabled={isTyping}
                                    >
                                        <PaperAirplaneIcon className="w-4 h-4 md:w-5 md:h-5" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
