import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/styles/about.css'
import './assets/styles/projects.css'
import './assets/styles/modal.css'
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);
