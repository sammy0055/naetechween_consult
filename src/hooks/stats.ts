import { apiEndpoints } from '../data/enpoints';
import { useChatStats } from '../state_management';
import { Stats } from '../types';

export const useStats = () => {
    const [stats, setStats] = useChatStats();

    const getStats = async () => {
        const response = await fetch(`${apiEndpoints.chatStats}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
            const error = await response.json();
            console.log(error);
            throw error;
        }
        const { data } = (await response.json()) as { data: Stats };
        setStats(data);
        return true;
    };

    return { stats, getStats };
};
