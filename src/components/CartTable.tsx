import { useAppSelector } from '../hooks/redux';
import CartItem from './CartItem';
import styled from 'styled-components';

const Table = styled.div`
    .titles {
        display: grid;
        grid-template-columns: 1fr 1fr 3fr 2fr 2fr 2fr 1fr;
        gap: 92px;
        font-size: 16px;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.5);
    }
    .total {
        display: flex;
        justify-content: end;
        align-items: center;
        margin-top: 30px;
        padding: 15px 115px;
        gap: 20px;
        font-size: 21px;
        font-weight: 600;
        background-color: #fff;
    }
    .btn {
        font-size: 14px;
        padding: 15.5px 32.5px;
        background: #ffca00;
        border: none;
        cursor: pointer;
    }
`;

const CartTable = () => {
    const { products } = useAppSelector((state) => state.cart);

    const total = products.reduce(
        (acc, product) =>
            product.checked ? acc + product.price * product.quantity : acc,
        0
    );

    return (
        <Table className="container">
            <div className="titles">
                <div></div>
                <div></div>
                <div>Название</div>
                <div>Цена за штуку</div>
                <div>Количество</div>
                <div>Цена</div>
                <div></div>
            </div>
            {products.map((product) => (
                <CartItem product={product} key={product.id} />
            ))}
            <div className="total">
                <h4>Total</h4>
                <div>{total.toFixed(2)}$</div>
                <button className="btn">Оформить</button>
            </div>
        </Table>
    );
};

export default CartTable;
