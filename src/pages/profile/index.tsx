import { useAuth } from "@/context/auth-provider";

 
const ProfilePage = () => {
    const { user, token, logout } = useAuth();

    const handleLogout = () => {
        logout();

    };

    return (
        <div>
            {user ? (
                <div>
                    <h1>Welcome, {user.firstName}!</h1>
                    {/* Display other user information */}
                    <button onClick={handleLogout}>Logout</button>

                    
                </div>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
};

export default ProfilePage;
