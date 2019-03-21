import React from 'react';
import './App.css';
import Header from './containers/Header.jsx';
import MainSection from './containers/MainSection.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="todoapp">
        <h1>TODO</h1>
        <Header className="new-todo" />  
        <MainSection className="main"></MainSection>
      </div>
    );
  }
}

export default App;
