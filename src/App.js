import React from 'react';
import './App.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/" component={About}/>
            <Route exact path="/" component={Contact}/>
            <Route exact path="/" component={NoMatch}/>
          </Switch>
        </Router>
      </React.Fragment> */}
    </div>
  );
}

export default App;
