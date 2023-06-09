// // Generated by https://quicktype.io

// export interface ViewOneTaskOfProjectInterface {
//     status:    number;
//     statusMsg: string;
//     data:      OneTaskProject;
// }

// export interface OneTaskProject {
//     id:           string;
//     created_at:   string;
//     updated_at:   string;
//     expired_date: string;
//     state:        string;
//     task:         Task;
// }

// export interface Task {
//     id:           string;
//     created_at:   string;
//     updated_at:   string;
//     name:         string;
//     description:  string;
//     expired_date: string;
// }


// Generated by https://quicktype.io

// export interface ViewOneTaskOfProjectInterface {
//     status:    number;
//     statusMsg: string;
//     data:      OneTaskProject;
// }

// export interface OneTaskProject {
//     id:         string;
//     created_at: string;
//     updated_at: string;
//     state:      string;
//     link:       string;
//     task:       Task;
//     project_id: string
// }

// export interface Task {
//     id:           string;
//     created_at:   string;
//     updated_at:   string;
//     name:         string;
//     description:  string;
//     expired_date: string;
// }



// Generated by https://quicktype.io

export interface ViewOneTaskOfProjectInterface {
    status:    number;
    statusMsg: string;
    data:      OneTaskProject;
}

export interface OneTaskProject {
    id:         string;
    created_at: string;
    updated_at: string;
    state:      string;
    link:       string;
    task:       Task;
    project:    Project;
}

export interface Project {
    id:                 string;
    created_at:         string;
    updated_at:         string;
    name:               string;
    description:        string;
    active:             boolean;
    state:              string;
    number_of_students: number;
    registered_persons: number;
    full:               boolean;
}

export interface Task {
    id:           string;
    created_at:   string;
    updated_at:   string;
    name:         string;
    description:  string;
    expired_date: string;
}
