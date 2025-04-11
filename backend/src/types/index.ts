export interface Account {
    id: string;
    accountNumber: string;
    accountHolder: string;
    balance: number;
    createdAt: Date;
}

export interface Transaction {
    id: string;
    accountId: string;
    amount: number;
    transactionType: 'credit' | 'debit';
    timestamp: Date;
    description?: string;
}

export interface User {
    id: string;
    username: string;
    passwordHash: string;
    email: string;
    createdAt: Date;
}

export interface AuthToken {
    token: string;
    expiresAt: Date;
}

