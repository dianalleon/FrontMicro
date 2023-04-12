// Generated by https://quicktype.io

export interface ViewOneTaskOfProjectInterface {
    status:    number;
    statusMsg: string;
    data:      OneTaskProject;
}

export interface OneTaskProject {
    id:           string;
    created_at:   string;
    updated_at:   string;
    expired_date: string;
    state:        string;
    task:         Task;
}

export interface Task {
    id:           string;
    created_at:   string;
    updated_at:   string;
    name:         string;
    description:  string;
    expired_date: string;
}
