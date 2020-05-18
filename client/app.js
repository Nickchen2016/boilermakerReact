import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

ReactDOM.render( <Home/>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);

if (module && module.hot) {
  module.hot.accept();
}