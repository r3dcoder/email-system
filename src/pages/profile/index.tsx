import React from 'react';
import AuthenticatedLayout from '../AuthenticatedLayout';
import Header from '@/components/Header';

const ProfilePage: React.FC = () => {
    return (
        <AuthenticatedLayout>
            <Header />
            <div>This content can only be accessed by authenticated users.</div>
        </AuthenticatedLayout>
    );
};



export default ProfilePage;
