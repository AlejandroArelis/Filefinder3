export interface Char {
    id?: number;
    text: string;
    special: boolean;
    value: string;
}

export interface Word {
    id?: number;
    meanings: string[];
    type: string;
    chars: Char[];
}