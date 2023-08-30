import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '../AuthenticatedLayout';
import Header from '@/components/Header';
import { useAuth } from '@/context/auth-provider';
import axios from 'axios';
import ThreadList from '@/components/ThredList';
import { Thread } from '@/type/thread';

const ProfilePage: React.FC = () => {
    const { googleAccessToken, user } = useAuth();
    const [threads, setThreads] = useState<Thread[]>([]);


    useEffect(() => {
        fetchData()
    }, [])
    
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/mail/list/' + user?.email, {
                headers: {
                    Authorization: `Bearer ${googleAccessToken}`,
                },
            });

            console.log('Response:', response.data);
            setThreads(response.data.threads);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <AuthenticatedLayout>
            <Header />
            <div onClick={() => fetchData()}>This content can only be accessed by authenticated users {googleAccessToken}.</div>
            <div className="container mx-auto py-8">
                <h1 className="text-2xl font-semibold mb-4">Thread List</h1>
                <ThreadList threads={threads} />
            </div>
        </AuthenticatedLayout>
    );
};



export default ProfilePage;
