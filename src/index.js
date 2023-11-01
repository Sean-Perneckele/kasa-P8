import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';

import reportWebVitals from './reportWebVitals';
import Error from './pages/404';
import Propos from './pages/a-propos';
import Home from './pages/Home';
import Logement from './pages/logement';
import Header from './composant/header';
import Footer from './composant/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/propos" element={<Propos />} />
                <Route path="*" element={<Error />} />
            </Routes>  
          <Footer />
        </Router>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
