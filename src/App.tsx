import AppRouter from './components/AppRouter';
import styled from 'styled-components';
import Navbar from './components/Navbar';

const AppWrapper = styled.div`
    background-color: #f3f3f3;
    margin-top: 100px;
`;

const App = () => {
    return (
        <AppWrapper>
            <Navbar />
            <AppRouter />
        </AppWrapper>
    );
};

export default App;
