import { Route, Routes, Navigate } from 'react-router-dom';
import Admin from '../views/Admin';
import Home from '../views/Home';
import Login from '../views/Login';

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
export default RoutesMain;
