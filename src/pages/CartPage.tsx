import styled from 'styled-components';
import CartTable from '../components/CartTable';
import { useAppSelector } from '../hooks/redux';

const Cart = styled.div`
    .title {
        font-size: 55px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 40px;
    }
    .empty {
        font-size: 36px;
        font-weight: 400;
        text-align: center;
    }
`;

const CartPage = () => {
    const { products } = useAppSelector((state) => state.cart);
    return (
        <Cart>
            <h2 className="title">Корзина</h2>
            {products.length == 0 ? (
                <div className="empty">В корзине пока ничего нет</div>
            ) : (
                <CartTable />
            )}
        </Cart>
    );
};

export default CartPage;
