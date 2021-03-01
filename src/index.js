import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

import reportWebVitals from './reportWebVitals';

/*String inerpolation*/
ReactDOM.render(
  <React.StrictMode>
    <Card name
	name = "Carlos Manuel Gonzalez Vallejo"
	mail = "A0127600@itesm.mx"
	insta = "CharlesGoValle"
    /> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
