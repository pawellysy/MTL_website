import React from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Offer from './Offer/Offer';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import MainSite from './MainSite/MainSite';
import WinterOffer from './Offer/WinterOffer/WinterOffer';
import SummerOffer from './Offer/SummerOffer/SummerOffer';
import AllYearOffer from './Offer/AllYearOffer/AllYearOffer';
import Footer from './Footer/Footer';


function App() {
  return (
    <div>

    <BrowserRouter>
      <NavigationBar/>
    <Switch>
      <Route exact path="/" component={MainSite} />
      <Route exact path="/offer" component={Offer} />
      <Route exact path="/about" component={About} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/offer/winter" component={WinterOffer} />
      <Route exact path="/offer/summer" component={SummerOffer} />
      <Route exact path="/offer/all-year" component={AllYearOffer} />
       
    </Switch>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
