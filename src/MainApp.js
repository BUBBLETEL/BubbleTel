import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


import Header from './components/commons/Header/Header';
import NavBar from './components/commons/NavBar/NavBar';
import Home from './components/views/Home/Home';


// import Testimonial from './components/views/Testimonial/Testimonial';
import SeeMore from './components/views/SeeMore/SeeMore';
import Blog from './components/views/Blog/Blog';
import Clients from './components/views/Client/Clients';
import FooterComponent from './components/commons/Footer/FooterComponent';
import FooterBootom from './components/commons/Footer/FooterBootom';
import ContactForm from './components/pages/ContactForm';

const MainApp = () => {
  return (
    <div className="App">
      <div className="all">

        <Header />
        <NavBar />
        <Router>
          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/contact-us" component={ContactForm} />

            {/* <Route exact path="/testimonial" component={Testimonial} /> */}
            <Route exact path="/see-more" component={SeeMore} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/clients" component={Clients} />
          </Switch>
          <FooterComponent />
          <FooterBootom />
        </Router>
      </div>
    </div>
  );
}

export default MainApp;
