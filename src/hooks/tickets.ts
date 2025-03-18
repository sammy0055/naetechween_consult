import { apiEndpoints } from '../data/enpoints';
import { useChatsState } from '../state_management';
import { Chats } from '../types';

export const useTickets = () => {
    const [tickets, setTickets] = useChatsState();
    const fetchTickets = async (pageNumber: number) => {
        const response = await fetch(
            `${apiEndpoints.chats}?page=${pageNumber}`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            },
        );
        if (!response.ok) {
            const error = await response.json();
            console.log(error);
            throw error;
        }
        const { data } = (await response.json()) as { data: Chats };
        const newData = {
            currentPage: data.currentPage,
            documentsPerPage: data.documentsPerPage,
            hasMore: data.hasMore,
            totalDocuments: data.totalDocuments,
            totalPages: data.totalPages,
            documents: [...tickets.documents, ...data.documents],
        };
        setTickets(newData);
        return true;
    };

    return { fetchTickets, tickets };
};
