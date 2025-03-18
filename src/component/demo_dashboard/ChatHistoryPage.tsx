import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTickets } from '../../hooks/tickets';
import { formatChatHistoryToText } from '../../utils/format-massages';
import dayjs from 'dayjs';
import { Ticket } from '../../types';

const priorities = ['All', 'High', 'Medium', 'Low'];

interface ChatHistoryTypes {
    paginatedData: Ticket[];
    selectedChat: string | null;
    setSelectedChat: (e: any) => void;
}

const ChatHistory: React.FC<ChatHistoryTypes> = ({
    paginatedData,
    selectedChat,
    setSelectedChat,
}) => {
    return (
        <>
            <table className="w-full text-left">
                <thead>
                    <tr className="text-gray-400">
                        <th className="p-3">Date/Time</th>
                        <th className="p-3">User ID</th>
                        <th className="p-3">Channel</th>
                        <th className="p-3">Priority</th>
                        <th className="p-3">Escalation</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                {paginatedData.map((chat) => (
                    <Tablebody
                        key={chat._id}
                        chat={chat}
                        setSelectedChat={setSelectedChat}
                    />
                ))}
            </table>
            <SelectedChatComponent
                setSelectedChat={setSelectedChat}
                selectedChat={selectedChat}
            />
        </>
    );
};

interface Tablebodytypes {
    chat: Ticket;
    setSelectedChat: (e: any) => void;
}

interface SelectedChatComponentTypes {
    selectedChat?: string | null;
    setSelectedChat: (e: any) => void;
}

const SelectedChatComponent: React.FC<SelectedChatComponentTypes> = ({
    selectedChat,
    setSelectedChat,
}) => {
    const { tickets } = useTickets();
    const chatTranscript = useMemo(() => {
        return formatChatHistoryToText(
            tickets.documents.find((chat) => chat._id === selectedChat)
                ?.messages,
        );
    }, [selectedChat]);
    return (
        <>
            {selectedChat !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
                    onClick={() => setSelectedChat(null)}
                >
                    <div className="bg-gray-800 p-6 rounded-xl max-w-lg w-full">
                        <h3 className="text-xl font-semibold mb-4">
                            Chat Transcript for Chat ID: {selectedChat}
                        </h3>
                        {chatTranscript.map((text) => (
                            <p>{text}</p>
                        ))}
                        <button
                            onClick={() => setSelectedChat(null)}
                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            )}
        </>
    );
};

const Tablebody: React.FC<Tablebodytypes> = ({ chat, setSelectedChat }) => {
    return (
        <tbody>
            <motion.tr
                key={chat._id}
                whileHover={{ backgroundColor: '#374151' }}
                className="border-t border-gray-700"
            >
                <td className="p-3">
                    {dayjs(chat?.createdAt).format('YYYY-MM-DD HH:mm:ss')}
                </td>
                <td className="p-3">{chat._id}</td>
                <td className="p-3">{chat.channel}</td>
                <td className="p-3">{chat.priority}</td>
                <td className="p-3">{chat.escalation ? 'Yes' : 'No'}</td>
                <td className="p-3">
                    <button
                        onClick={() => setSelectedChat(chat._id)}
                        className="text-blue-400 hover:text-blue-300 mr-4"
                    >
                        View
                    </button>
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                        Open
                    </a>
                </td>
            </motion.tr>
        </tbody>
    );
};

const ChatHistoryPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('All');
    const [selectedChat, setSelectedChat] = useState<string | null>(null);
    const { fetchTickets, tickets } = useTickets();

    const filteredData = tickets.documents?.filter((chat) => {
        const matchesSearch =
            chat._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            chat.channel.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPriority =
            selectedPriority === 'All' || chat.priority === selectedPriority;
        return matchesSearch && matchesPriority;
    });

    const itemsPerPage = tickets.documentsPerPage;
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
    );

    useEffect(() => {
        if (paginatedData.length === 0) {
            fetchTickets(currentPage).catch((error: any) => {
                console.error(error);
            });
        }
    }, [currentPage]);
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
        >
            <h2 className="text-2xl font-semibold mb-6 text-gray-100">
                Chat History
            </h2>
            <div className="mb-4 flex space-x-4">
                <input
                    type="text"
                    placeholder="Search by User ID or Channel"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 bg-gray-700 text-white rounded"
                />
                <select
                    value={selectedPriority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    className="p-2 bg-gray-700 text-white rounded"
                >
                    {priorities.map((priority) => (
                        <option key={priority} value={priority}>
                            {priority}
                        </option>
                    ))}
                </select>
            </div>

            <ChatHistory
                paginatedData={paginatedData}
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
            />

            <div className="mt-4 flex justify-between">
                <button
                    onClick={() =>
                        setCurrentPage((prev: number) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-600"
                >
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button
                    disabled={paginatedData.length === 0 && !tickets.hasMore}
                    onClick={() => setCurrentPage((prev: number) => prev + 1)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-600"
                >
                    Next
                </button>
            </div>
        </motion.section>
    );
};

export default ChatHistoryPage;
