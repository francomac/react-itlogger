
import React, {Fragment, useEffect} from 'react';

import Logs from './components/logs/Logs';
import Searchbar from './components/layout/Searchbar';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {

  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  })

  return (
    <Fragment>
      <Searchbar />
      <div className="container">
        <Logs />
      </div>  
    </Fragment>
  );
}

export default App;

