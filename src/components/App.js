import React,{useState} from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './ui/Header'
import Footer from './ui/Footer';
import Theme from './ui/Theme';

import LandingPage from '../components/LandingPage';
import Services from '../components/Services';
import CustomSoftware from '../components/CustomSoftware';
import MobileApps from '../components/MobileApps';
import Websites from '../components/Websites';
import Revolution from '../components/Revolution';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Estimate from '../components/Estimate'
function App() {
  const [value, setValue] = useState(0);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header value={value} setValue={setValue} selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex} />
        <Switch>
          <Route exact path="/" render={(props)=><LandingPage {...props} value={value} setValue={setValue} selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex}  />} />
          <Route exact path="/services" render={(props)=><Services {...props} setValue={setValue} selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex}  />} />
          <Route exact path="/customsoftware" render={(props)=> <CustomSoftware {...props} setValue={setValue} selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex} />} />
          <Route exact path="/mobileapps" render={(props)=> <MobileApps {...props} setValue={setValue} selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex} />} />
          <Route exact path="/websites" render={(props)=> <Websites  {...props} setValue={setValue} selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex}  />} />
          <Route exact path="/revolution" render={(props)=> <Revolution  {...props} setValue={setValue} selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex}  />} />
          <Route exact path="/about" render={(props)=> <AboutUs {...props} setValue={setValue} selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex} />} />
          <Route exact path="/contact" render={(props)=> <Contact {...props} setValue={setValue} selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex} />} />
          <Route exact path="/estimate" render={(props)=> <Estimate {...props} setValue={setValue} selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex} />} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
