import React from 'react';
import AuthenticatedLayout from '../AuthenticatedLayout';
import Header from '@/components/Header';
import { useAuth } from '@/context/auth-provider';

const ProfilePage: React.FC = () => {
    const {googleAccessToken} = useAuth();
    return (
        <AuthenticatedLayout>
            <Header />
            <div>This content can only be accessed by authenticated users {googleAccessToken}.</div>
        </AuthenticatedLayout>
    );
};



export default ProfilePage;
