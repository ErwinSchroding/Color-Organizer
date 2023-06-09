import React, { createContext } from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import ColorProvider from '../hooks/color-hooks';


render(
    <ColorProvider> 
        <App />
    </ColorProvider>,
    document.getElementById('root')
);
