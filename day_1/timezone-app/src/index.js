import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';



function renderDom()
{
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

setInterval(renderDom, 1000);