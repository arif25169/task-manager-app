import { create } from 'zustand';
import api from "../../utils/axios";
import { Task, PaginationData, TaskFilters } from "../../utils/interfaces";

interface TaskState {
  tasks: Task[];
  selectedTask: Task | null;
  pagination: PaginationData | null;
  isLoading: boolean;
  fetchTasks: (page?: number, filters?: TaskFilters) => Promise<void>;
  fetchTask: (id: number) => Promise<void>;
  addTask: (task: Omit<Task, 'id' | 'created_at' | 'updated_at'>) => Promise<void>;
  updateTask: (id: number, updates: Partial<Task>) => Promise<void>;
  updateTaskAndFetch: (id: number, updates: Partial<Task>) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  selectedTask: null,
  pagination: null,
  isLoading: false,

  fetchTasks: async (page = 1, filters: TaskFilters = {}) => {
    set({ isLoading: true });
  
    try {
      const queryParams = new URLSearchParams();
      queryParams.append("page", page.toString());
  
      // Ensure filters is an object and correctly append key-value pairs
      if (typeof filters === "object" && !Array.isArray(filters)) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            queryParams.append(key, String(value)); // Ensure string format
          }
        });
      } else {
        console.error("Invalid filters format:", filters);
      }
  
      const response = await api.get(`/tasks?${queryParams.toString()}`);
  
      set({
        tasks: response.data.data,
        pagination: {
          current_page: response.data.current_page,
          last_page: response.data.last_page,
          per_page: response.data.per_page,
          total: response.data.total,
          next_page_url: response.data.next_page_url,
          prev_page_url: response.data.prev_page_url,
        },
        isLoading: false
      });
  
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  },
  

  fetchTask: async (id) => {
    set({ isLoading: true });
    try {
      const response = await api.get(`/tasks/${id}`);
      set({ selectedTask: response.data, isLoading: false });
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  },

  addTask: async (task) => {
    set({ isLoading: true });
    try {
      await api.post('/tasks', task);
      await useTaskStore.getState().fetchTasks();
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },

  updateTask: async (id, updates) => {
    set({ isLoading: true });
    try {
      await api.put(`/tasks/${id}`, updates);
      set((state) => ({
        tasks: state.tasks.map(task => task.id === id ? { ...task, ...updates } : task),
        isLoading: false,
      }));
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  },  
  
  updateTaskAndFetch: async (id, updates) => {
    set({ isLoading: true });
    try {
      await api.put(`/tasks/${id}`, updates);
      await useTaskStore.getState().fetchTasks();
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  },

  deleteTask: async (id) => {
    set({ isLoading: true });
    try {
      await api.delete(`/tasks/${id}`);
      await useTaskStore.getState().fetchTasks();
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
