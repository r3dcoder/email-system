// pages/callback.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/auth-provider';
import axios from 'axios';
import { User } from '@/type/user';
import { log } from 'console';

const CallbackPage: React.FC = () => {
    const router = useRouter();
    const { setGAccessToken, login } = useAuth();

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.hash.substr(1));
        const accessToken = urlSearchParams.get('access_token');

        // Check if access_token is present
        if (accessToken) {
            console.log("access token: ", accessToken);
            setGAccessToken(accessToken);
            getUserData(accessToken)
           
        } else {
            // Handle error or redirect to another page
            router.push('/error');
        }
    }, []);


    const getUserData = async (token?: string) => {
        try {
            // http://localhost:8000/api/mail/user/
            const response = await axios.get(`http://localhost:8000/api/mail/email/` + token,
            );

            console.log("response", response);
            const user: User = response.data;
            login(user, token || '')

            router.push(`/profile`);

            return response.data;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    };
    return null; // This page doesn't render anything
};

export default CallbackPage;
