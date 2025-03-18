import { apiEndpoints } from '../data/enpoints';

export const useTickets = () => {
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
        const { data } = await response.json();
        return data;
    };

    return { fetchTickets };
};
