// Generated by https://quicktype.io

export interface DocumentInterface {
    status:    number;
    statusMsg: string;
    data:      DocumentsData[];
}

export interface DocumentsData {
    id:         string;
    created_at: string;
    updated_at: string;
    name:       string;
    state:      boolean;
}
