export interface Task {
    id: number;
    name: string;
    description: string;
    status: string;
    due_date: string | null;
    created_at: string;
    updated_at: string;
}

export interface PaginationData {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    next_page_url: string | null;
    prev_page_url: string | null;
}

export interface TaskFilters {
    search?: string;
    status?: string;
    dueDate?: string;
}

export enum TaskStatus {
    TO_DO = "To Do",
    IN_PROGRESS = "In Progress",
    DONE = "Done",
  }