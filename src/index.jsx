import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';

<<<<<<< HEAD
// context provider
import MovieProvider from "./context/movie.context";
=======
>>>>>>> 51101075818424cdfd4ce13d873e172708763e72

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
     <MovieProvider>
      <App />
      </MovieProvider>
=======
    <App />
>>>>>>> 51101075818424cdfd4ce13d873e172708763e72
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

