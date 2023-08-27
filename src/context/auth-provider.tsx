import { User } from '@/type/user';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the authentication context type
interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (userData: User, token: string) => void;
    logout: () => void;
    loadStoredAuthData: () => void;
}

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the AuthProvider props
interface AuthProviderProps {
    children: ReactNode;
}

// Define the AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    // useEffect(() => {
    //     loadStoredAuthData();
    // }, []);

    const login = (userData: User, authToken: string) => {
        setUser(userData);
        setToken(authToken);
        sessionStorage.setItem('user', JSON.stringify(userData));
        sessionStorage.setItem('token', authToken);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
    };

    // Load stored authentication data from local storage
    const loadStoredAuthData = async () => {
        const storedUser = await sessionStorage.getItem('user');
        const storedToken = await sessionStorage.getItem('token');
        if (storedUser && storedToken) {
            console.log("storedUser", storedUser);
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
        }
    };

    const authContextValue: AuthContextType = {
        user,
        token,
        loadStoredAuthData,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
    );
};

// Define a custom hook to use the authentication context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
