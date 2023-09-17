import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store.ts';

import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
    font-weight:400;
}
body {
    background-color: #f3f3f3;
}
.container {
        width: 1320px;
        margin: 0 auto;
    }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Global />
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
