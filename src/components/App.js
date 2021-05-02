import React,{useState} from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './ui/Header'
import Footer from './ui/Footer';
import Theme from './ui/Theme';

import LandingPage from '../components/LandingPage';
import Services from '../components/Services';
import CustomSoftware from '../components/CustomSoftware'
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
          <Route exact path="/customsoftware" render={(props)=> <CustomSoftware {...props} setValue={setValue} selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex}   />} />
          <Route exact path="/mobileapps" component={()=> <div>mobileapps</div>} />
          <Route exact path="/websites" component={()=> <div>websites</div>} />
          <Route exact path="/revolution" component={()=> <div>revolution</div>} />
          <Route exact path="/about" component={()=> <div>about</div>} />
          <Route exact path="/contact" component={()=> <div>contact</div>} />
          <Route exact path="/estimate" component={()=> <div>estimate</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
