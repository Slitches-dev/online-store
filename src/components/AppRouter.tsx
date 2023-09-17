import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import ProductPage from '../pages/ProductPage';
import AuthPage from '../pages/AuthPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRouter;
