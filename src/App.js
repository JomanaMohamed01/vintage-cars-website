import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePageCompound from './compounds/HomePageCompound';
import ServicesPageCompound from './compounds/ServicesPageCompound';
import OurWorkCompound from './compounds/OurWorkCompound';
import AboutUsCompound from './compounds/AboutUsCompound';
import ContactCompound from './compounds/ContactCompound';
import BookOnlineCompound from "./compounds/BookOnlineCompound";

function App() {
  return (
    <div className="App">
      {/* <HomePageCompound />
      <ServicesPageCompound />
      <OurWorkCompound />
      <AboutUsCompound />
      <ContactCompound />
      <BookOnlineCompound /> */}

      <Router>
        <Switch>
          <Route exact path="/">
            <HomePageCompound />
          </Route>

          <Route path="/ServicesPageCompound">
            <ServicesPageCompound />
          </Route>

          <Route path="/OurWorkCompound">
            <OurWorkCompound />
          </Route>

          <Route path="/AboutUsCompound">
            <AboutUsCompound />
          </Route>

          <Route path="/ContactCompound">
            <ContactCompound />
          </Route>

          <Route path="/BookOnlineCompound">
            <BookOnlineCompound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
