import React from 'react'; 
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// @ts-ignore
import App from './components/App.tsx';
import './styles.scss';

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);