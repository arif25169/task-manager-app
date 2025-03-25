import { create } from 'zustand';
import api from "../../utils/axios"
import { notification } from 'antd';
import { INVALID_LOGIN, NEW_USER, SESSION_EXPIRED, SOMETHING_WRONG } from '../../utils/constants';

type User = {
  name?: string;
  email: string;
  password: string;
  password_confirmation?: string;
};

interface UserState {
  id: number;
  name: string;
  user: User;
  lastName: string;
  computed: {
    userLogged: string;
  };
  healthStatus: string;
  isLoading: boolean;
  login: (credentials: User) => Promise<void>;
  logout: () => void;
  checkHealth: () => Promise<void>;
  register: (credentials: User) => Promise<void>;
}

export const useUserStore = create<UserState>((set, get) => ({
  id: 0,
  name: '',
  lastName: '',
  user: {
    "email": "",
    "password": ""
  },  
  computed: {
    get userLogged(): string {
      return `${get().name} + ${get().lastName}`;
    },
  },
  healthStatus: 'unknown',
  isLoading: false,
  login: async (credentials: User) => {
    set({ isLoading: true });
    try {
      await api.get('/sanctum/csrf-cookie');
      const response = await api.post('/login', credentials);
      const { token } = response.data;
      localStorage.setItem("tokenAuth", token);
      set({ isLoading: false });
    } catch (error) {
      notification.error({message:INVALID_LOGIN})
      console.error(error);
      set({ isLoading: false });
    }
  },
  logout: () => {
    localStorage.removeItem("tokenAuth");
    delete api.defaults.headers.common['Authorization'];
    set({ user: { email: '', password: '' } });
  },
  checkHealth: async () => {
    try {
      const response = await api.get('/health');
      set({ healthStatus: response.data.message });
    } catch (error) {
      console.error('Health check failed:', error);
      set({ healthStatus: 'unhealthy' });
      notification.error({message:SESSION_EXPIRED})
      localStorage.removeItem("tokenAuth");
      delete api.defaults.headers.common['Authorization'];
      set({ user: { email: '', password: '' } });
      setTimeout(() => {
        location.reload();
      }, 1000);
      
    }
  },
  register: async (userData: User) => {
    set({ isLoading: true });
    try {
      await api.get('/sanctum/csrf-cookie');
      userData.password_confirmation= userData.password;
      const response = await api.post('/register', userData);
      set({ isLoading: false });
      console.log(response)
      notification.success({message:NEW_USER})
    } catch (error:any) {
      if (error.response && error.response.status === 500) {
        notification.error({ message: error.response.data.error });
      } else {
        notification.error({ message: SOMETHING_WRONG });
      }
      console.error(error);
      set({ isLoading: false });
    }
  }
}));
