import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'   
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter} from "react-router-dom";
// import "boostrap"
// import 'bootstrap/js/dist/util';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    
    </BrowserRouter>

  </React.StrictMode>
)
