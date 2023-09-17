import { productAPI } from '../services/ProductService';
import ProductItem from './ProductItem';
import styled from 'styled-components';

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ProductList = () => {
    const { data: products } = productAPI.useFetchAllProductsQuery(0);
    return (
        <Cards className="container">
            {products &&
                products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
        </Cards>
    );
};

export default ProductList;
