import { atom, useRecoilState } from 'recoil';
import { Chats, Stats } from '../types';

const chatsState = atom<Chats>({
    key: '121',
    default: {
        currentPage: 0,
        totalPages: 0,
        documentsPerPage: 0,
        totalDocuments: 0,
        hasMore: false,
        documents: [],
    },
});

const ticketStats = atom<Stats>({
    key: '123',
    default: {
        coreoperations: {
            total: 0,
            escalations: 0,
        },
        salesengine: {
            total: 0,
            escalations: 0,
        },
        supporthub: {
            total: 0,
            escalations: 0,
        },
        riskmanagement: {
            total: 0,
            escalations: 0,
        },
        specialops: {
            total: 0,
            escalations: 0,
        },
        unclassified: {
            total: 0,
            escalations: 0,
        },
    },
});

export const useChatsState = () => useRecoilState<Chats>(chatsState);
export const useChatStats = () => useRecoilState<Stats>(ticketStats);
