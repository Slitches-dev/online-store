import {
    removeFromCart,
    updateProduct,
    updateQuantity,
} from '../store/features/cartSlice';
import { useAppDispatch } from '../hooks/redux';
import styled from 'styled-components';

const Item = styled.div`
    .image {
        width: 70px;
        height: 85px;
    }
    .product {
        display: grid;
        grid-template-columns: 1fr 1fr 3fr 2fr 2fr 2fr 1fr;
        gap: 92px;
        align-items: center;
        background-color: #fff;
        padding: 40px 0;
    }
    .quant {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        font-size: 18px;
    }
    .btns {
        border: none;
        outline: none;
        padding: 3px;
        background-color: #fff;
        cursor: pointer;
        font-size: 20px;
    }
    .quantity {
        text-align: center;
    }
`;

const CartItem = ({ product }) => {
    const dispatch = useAppDispatch();

    return (
        <Item className="container">
            <div className="product" key={product.id}>
                <input
                    type="checkbox"
                    checked={product.checked}
                    onChange={() => dispatch(updateProduct({ id: product.id }))}
                />

                <img className="image" src={product.image} />

                <h3>{product.title}</h3>

                <p>{product.price}$</p>
                <div className="quant">
                    <button
                        className="btns"
                        disabled={product.quantity == 1}
                        onClick={() =>
                            dispatch(
                                updateQuantity({
                                    id: product.id,
                                    newQuantity: product.quantity - 1,
                                })
                            )
                        }
                    >
                        –
                    </button>
                    <p className="quantity">{product.quantity}</p>
                    <button
                        className="btns"
                        onClick={() =>
                            dispatch(
                                updateQuantity({
                                    id: product.id,
                                    newQuantity: product.quantity + 1,
                                })
                            )
                        }
                    >
                        +
                    </button>
                </div>
                <p>{product.price * product.quantity}$.</p>

                <img
                    onClick={() => dispatch(removeFromCart(product.id))}
                    src="src\utils\images\close.svg"
                />
            </div>
        </Item>
    );
};

export default CartItem;
