import { createContext, useState, useEffect } from 'react';
import api from '../services/api';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export const UserContext = createContext();

export const ContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        async function loadUser() {
            const userId = localStorage.getItem('@ID');
            if (userId) {
                try {
                    const { data } = await api.get(`users/${userId}`);
                    setUser(data);
                } catch (error) {
                    console.log(error);
                }
            } else {
                navigate('/', { replace: true });
            }
            let { data } = await api.get('users/');
            data = data.sort((usr) =>
                usr.status == 'n-pago'
                    ? -2
                    : usr.status == 'aguardando'
                    ? -1
                    : 1,
            );
            setUsersList(data);
            // if (user?.is_superuser) {
            //     try {
            //         const { data } = await api.get(`users/`);
            //         setUsersList(data);
            //     } catch (err) {
            //         console.log(err);
            //     }
            // } else {
            //     console.log('teste');
            // }
        }
        loadUser();
    }, []);

    const createUser = (data) => {
        if (data.password === data.confirmPassword) {
            api.post('users/', data)
                .then(({ data }) => {
                    localStorage.setItem('@ID', data.id);
                    setUser(data);
                    toast.success('Usuário criado com sucesso!');
                    if (data.is_superuser) {
                        navigate('/dashboard', { replace: true });
                    }
                    navigate('/home', { replace: true });
                })
                .catch(({ response: { data } }) => toast.error(data.username));
        } else toast.error('Senhas não conferem!');
    };

    const loginUser = (data) => {
        api.post('/login/', data)
            .then(({ data }) => {
                localStorage.setItem('@ID', data.id);
                setUser(data);
                toast.success('Logado com sucesso!');
                if (data.is_superuser) {
                    navigate('/dashboard', { replace: true });
                } else navigate('/home', { replace: true });
            })
            .catch(({ response: { data } }) => {
                toast.error(data.message);
            });
    };

    const logout = () => {
        localStorage.removeItem('@ID');
        navigate('/', { replace: true });
    };

    const changeStatus = (value, id) => {
        if (value) {
            api.patch(`users/${id}/`, { status: value })
                .then(({ data }) => {
                    toast.success('Status alterado com sucesso!');
                })
                .catch(({ response: { data } }) => toast.error(data.message));
        }
    };

    return (
        <UserContext.Provider
            value={{
                createUser,
                user,
                loginUser,
                logout,
                navigate,
                usersList,
                changeStatus,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
