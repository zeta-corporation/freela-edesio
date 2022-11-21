import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/userContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <ContextProvider>
                <App />
            </ContextProvider>
        </React.StrictMode>
    </BrowserRouter>,
);

reportWebVitals();
