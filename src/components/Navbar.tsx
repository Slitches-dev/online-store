import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    background-color: #fff;
    z-index: 999;

    .navbar-img {
        margin: 36px 60px;
        height: 28px;
    }

    .navbar__icons {
        margin: 38px 60px;
    }

    .navbar__icons-item {
        margin-left: 32px;
    }
`;

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <Nav>
            <img
                className="navbar-img"
                src="src\utils\images\logo.svg"
                alt=""
                onClick={() => navigate('/')}
            />
            <div className="navbar__icons">
                <img
                    className="navbar__icons-item"
                    src="src\utils\images\iconsearch.svg"
                    alt=""
                />
                <img
                    className="navbar__icons-item"
                    src="src\utils\images\iconcart.svg"
                    alt=""
                    onClick={() => navigate('/cart')}
                />
                <img
                    className="navbar__icons-item"
                    src="src\utils\images\iconuser.svg"
                    alt=""
                    onClick={() => navigate('/auth')}
                />
            </div>
        </Nav>
    );
};

export default Navbar;
