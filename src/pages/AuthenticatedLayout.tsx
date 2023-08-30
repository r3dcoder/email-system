import { useAuth } from '@/context/auth-provider';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
    children: ReactNode;
}

const AuthenticatedLayout: React.FC<Props> = ({ children }: Props) => {
    const { user, loadStoredAuthData , googleAccessToken} = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            // Load stored authentication data on component mount
            loadStoredAuthData();
            setLoading(false);
        }
    }, [loading, loadStoredAuthData]);

    useEffect(() => {
        if (!loading && user === null && googleAccessToken === null) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (user || googleAccessToken) {
        return (
            <div>
                {children}
            </div>
        );
    }

    return null;
};

export default AuthenticatedLayout;
