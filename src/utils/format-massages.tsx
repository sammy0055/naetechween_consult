import { Message } from '../types';

/**
 * Trims a string and collapses multiple whitespace characters into a single space.
 * @param str - The string to clean.
 * @returns The cleaned string.
 */
const cleanString = (str: string): string => str.trim().replace(/\s+/g, ' ');

/**
 * Formats an array of chat messages into a single detailed text string.
 * Each message is prefixed by its message type and then the cleaned content.
 *
 * @param chatHistory - The array of chat history messages.
 * @returns A formatted text string representing the entire chat.
 */
export function formatChatHistoryToText(
    chatHistory: Message[] | undefined,
): string[] {
    const formattedText = [] as string[];
    if (!chatHistory) return [];
    if (!chatHistory.length) return [];
    chatHistory.forEach((msg) => {
        // Use the original constructor name (e.g., HumanMessage, AIMessage, ToolMessage)
        const messageType = msg.source || 'UnknownMessage';
        let content = msg.content;

        // If content is a string, clean it up.
        if (typeof msg.content === 'string') {
            content = cleanString(msg.content);
        }

        formattedText.push(`${messageType}: ${content}`);
    });

    return formattedText;
}
