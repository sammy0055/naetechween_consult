export interface Message {
    kwargs: {
        content: string;
        additional_kwargs: Ticket;
        response_metadata: {};
        id: string;
    };
}

export interface Ticket {
    _id: string;
    ticketId: string;
    createdAt: number;
    updatedAt: number;
    channel: string;
    priority: 'High' | 'Medium' | 'Low';
    escalation: boolean;
    escalationReason?: string;
    department: string;
    status: 'Resolved' | 'In Progress' | 'Unresolved';
    messages: Message[];
}
