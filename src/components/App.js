import React,{useState} from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './ui/Header'
import Footer from './ui/Footer';
import Theme from './ui/Theme';
function App() {
  const [value, setValue] = useState(0);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header value={value} setValue={setValue} selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex} />
        <Switch>
          <Route exact path="/" component={()=> <div style={{height: "100vh"}}>Home</div>} />
          <Route exact path="/services" component={()=> <div style={{height: "100vh"}} >services</div>} />
          <Route exact path="/customsoftware" component={()=> <div style={{height: "100vh"}} >customsoftware</div>} />
          <Route exact path="/mobileapps" component={()=> <div style={{height: "100vh"}} >mobileapps</div>} />
          <Route exact path="/websites" component={()=> <div style={{height: "100vh"}} > websites</div>} />
          <Route exact path="/revolution" component={()=> <div style={{height: "100vh"}} >revolution</div>} />
          <Route exact path="/about" component={()=> <div style={{height: "100vh"}} >about</div>} />
          <Route exact path="/contact" component={()=> <div style={{height: "100vh"}} >contact</div>} />
          <Route exact path="/estimate" component={()=> <div style={{height: "100vh"}} >estimate</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedMenuIndex={selectedMenuIndex} setSelectedMenuIndex={setSelectedMenuIndex} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
