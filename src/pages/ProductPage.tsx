import { useParams } from 'react-router-dom';
import { productAPI } from '../services/ProductService';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks/redux';
import { addToCart } from '../store/features/cartSlice';

const ProductCard = styled.div`
    display: flex;
    margin-top: 145px;
    height: 100%;
    gap: 135px;
    background-color: #fff;
    .item {
        display: flex;
        flex-direction: column;
    }
    .img {
        width: 430px;
        height: 510px;
    }
    .title {
        font-size: 56px;
        font-weight: 300;
    }
    .price {
        font-size: 36px;
        font-weight: 700;
    }
    .description {
        margin-top: 35px;
        font-size: 18px;
    }
    .btn {
        align-self: flex-end;
        border: none;
        outline: none;
        padding: 10px;
        margin-right: 45px;
        border-radius: 15px;
        background: #ffca00;
        cursor: pointer;
        font-size: 20px;
    }
`;

const ProductPage = () => {
    const { id } = useParams();
    const { data: product } = productAPI.useFetchProductByIdQuery(Number(id));
    const dispatch = useAppDispatch();

    return (
        <ProductCard className="container">
            {product && (
                <>
                    <img className="img" src={product?.image} alt="" />
                    <div className="item">
                        <div className="title">{product.title}</div>
                        <div className="price">{product.price}$</div>
                        <div className="description">{product.description}</div>
                    </div>
                    <button
                        className="btn"
                        onClick={() => dispatch(addToCart(product))}
                    >
                        Купить
                    </button>
                </>
            )}
        </ProductCard>
    );
};

export default ProductPage;
