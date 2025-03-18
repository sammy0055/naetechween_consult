export interface Message {
    source: "AI" | "HUMAN";
    content: string;
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

export interface Chats {
    currentPage: number;
    totalPages: number;
    documentsPerPage: number;
    totalDocuments: number;
    hasMore: boolean;
    documents: Ticket[];
}

export interface Stats {
    coreoperations: {
        total: number;
        escalations: number;
    };
    salesengine: {
        total: number;
        escalations: number;
    };
    supporthub: {
        total: number;
        escalations: number;
    };
    riskmanagement: {
        total: number;
        escalations: number;
    };
    specialops: {
        total: number;
        escalations: number;
    };
    unclassified: {
        total: number;
        escalations: number;
    };
}
