export interface Char {
    id?: number;
    value: string;
    special: boolean;
}

export interface Element {
    id?: number;
    pronunciation: string;
    char: Char;
}