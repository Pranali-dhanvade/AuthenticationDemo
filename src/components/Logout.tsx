import { useContext } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Logout = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:4000/api/logout', { withCredentials: true });
            console.log('Logged out successfully');
            logout(); 
            navigate('/');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default Logout;
