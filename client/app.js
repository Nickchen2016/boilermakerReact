import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import '../public/style.less';

ReactDOM.render( <Table/>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);

if (module && module.hot) {
  module.hot.accept();
}