import { FC } from 'react';
import { IProduct } from '../models/IProduct';
import { useAppDispatch } from '../hooks/redux';
import { addToCart } from '../store/features/cartSlice';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface ProductItemProps {
    product: IProduct;
}

const Card = styled.div`
    width: 315px;
    height: 445px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #fff;
    margin: 5px;
    border: none;
    border-radius: 25px;
    .content {
        width: 215px;
        height: 375px;
        margin: 36px 64px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .image {
        width: 160px;
        height: 200px;
    }
    .description {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .title {
        font-weight: 500;
        font-size: 16px;
    }
    .price {
        font-size: 20px;
        font-weight: 700;
    }
    .btn {
        width: 200px;
        margin-top: auto;
        padding: 10px;
        gap: 10px;
        border: none;
        border-radius: 10px;
        background-color: #ffca00;
        font-weight: 600;
        font-size: 14px;
    }
`;

const ProductItem: FC<ProductItemProps> = ({ product }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const buyProduct = (e) => {
        e.stopPropagation();
        dispatch(addToCart(product));
    };

    return (
        <Card onClick={() => navigate(`/product/${product.id}`)}>
            <div className="content">
                <img className="image" src={product.image} alt="" />
                <div className="description">
                    <div className="title">{product.title}</div>
                    <div className="price">{product.price}$</div>
                </div>
                <button className="btn" onClick={buyProduct}>
                    Купить
                </button>
            </div>
        </Card>
    );
};

export default ProductItem;
