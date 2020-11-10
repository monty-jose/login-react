import React, {Component} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Router from './routing/Router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Router/>
        </div>
    );
  }
}

export default App;
