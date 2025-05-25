import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, phone: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = !!user;

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    // В реальном приложении здесь будет запрос к API
    // Для MVP используем моковые данные
    if (email === 'user@example.com' && password === 'password') {
      const mockUser: User = {
        id: 1,
        name: 'Иван Иванов',
        email: 'user@example.com',
        phone: '+7 (999) 123-45-67',
        address: 'г. Москва, ул. Пушкина, д. 10, кв. 123'
      };
      setUser(mockUser);
    } else {
      throw new Error('Неверный email или пароль');
    }
  };

  const register = async (name: string, email: string, password: string, phone: string) => {
    // В реальном приложении здесь будет запрос к API
    // Для MVP используем моковые данные
    const mockUser: User = {
      id: Date.now(),
      name,
      email,
      phone,
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};