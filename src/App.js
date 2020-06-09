import React from 'react';
import "./App.css";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';





function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms/" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={SingleRoom}/>
        <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;












//import './App.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Header from './components/Header';
//import { Home } from './Home';
//import { About } from './About';
//import { Contact } from './Contact';
//import { NoMatch } from './NoMatch';
//import { Layout } from './components/Layout';
//import { NavigationBar } from './components/NavigationBar';
//import { Jumbotron } from './components/Jumbotron';

/* class App extends Component {
  render() {
  return (
      <div className="App">
        <Header/>
        <React.Fragment>
          <NavigationBar/>
          <Jumbotron/>
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route component={NoMatch}/>
              </Switch>
            </Router>
          </Layout>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
 */