import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ModalContextProvider from './contexts/Modal';

import './styles/dist.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ModalContextProvider>
            <App />
        </ModalContextProvider>
    </React.StrictMode>
);
