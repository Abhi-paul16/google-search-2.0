import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ResultContextProvider } from './Contexts/ResultContextProvider';
import './global.css'
import { BrowserRouter } from 'react-router-dom';
  


ReactDOM.render(

<React.StrictMode>
  <ResultContextProvider>
<BrowserRouter>
    <App />
    </BrowserRouter>
    </ResultContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
