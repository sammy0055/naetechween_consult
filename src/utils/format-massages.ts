type Message = {
    id: string;
    content:
        | string
        | {
              type: string;
              text?: string;
              functionCall?: { name: string; args: any };
          }[];
    additional_kwargs?: any;
    response_metadata?: any;
    tool_calls?: { name: string; args: any; type: string }[];
    name?: string;
};

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
    chatHistory: any[] | undefined,
): string {
    let formattedText = '';
    if (!chatHistory) return '';
    if (!chatHistory.length) return '';
    chatHistory.forEach((msg) => {
        // Use the original constructor name (e.g., HumanMessage, AIMessage, ToolMessage)
        const messageType = msg.constructor?.name || 'UnknownMessage';
        let content = '';

        // If content is a string, clean it up.
        if (typeof msg.content === 'string') {
            content = cleanString(msg.content);
        }
        // If content is an array, process each part.
        else if (Array.isArray(msg.content)) {
            content = msg.content
                .map((part: any) => {
                    if (typeof part === 'string') {
                        return cleanString(part);
                    } else if (part.text) {
                        return cleanString(part.text);
                    } else if (part.functionCall && part.functionCall.name) {
                        return `[Function call: ${part.functionCall.name}]`;
                    }
                    return '';
                })
                .filter((text: string) => text.length > 0)
                .join(' ');
        }

        formattedText += `${messageType}:\n${content}\n\n`;
    });

    return formattedText.trim();
}
