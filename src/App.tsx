import React from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Offer from './Offer/Offer';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import MainSite from './MainSite/MainSite';


function App() {
  return (
    <div>

    <BrowserRouter>
      <NavigationBar/>
    <Switch>
      <Route exact path="/" component={MainSite} />
      <Route path="/offer" component={Offer} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
