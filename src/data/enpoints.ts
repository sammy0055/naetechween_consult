const domain =
    import.meta.env.VITE_ENV !== 'DEV' ?
        import.meta.env.VITE_BACKEND_DOMAIN!
    :   'http://localhost:4000/api';

export const apiEndpoints = {
    chats: `${domain}/chats`,
    chat: `${domain}/chat`,
    chatStats: `${domain}/chat-stats`,
};
