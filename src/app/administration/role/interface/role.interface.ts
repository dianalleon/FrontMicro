// Generated by https://quicktype.io

export interface RoleInterface {
    status:    number;
    statusMsg: string;
    data:      RoleData[];
}

export interface RoleData {
    id:         string;
    created_at: string;
    updated_at: string;
    name:       string;
    state:      boolean;
}
