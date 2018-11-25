import { Component } from 'react';
import './App.css';
import Store from './components/Store';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Store />
      </div>
    );
  }
}
