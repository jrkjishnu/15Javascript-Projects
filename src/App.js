//import logo from './logo.svg';
//import {AppProvider} from './Component/SlideBar/sideContext'
// import {AppProvider} from './Component/Stripe/context';
// import {AppProvider} from './Component/Cart/Context';
// import {AppProvider} from './Component/ListCart/context';
//import About from './Component/Cocktail/About';
import './index.css';
import {AppProvider} from './Component/Cocktail-Code/Context';
import About from './Component/Cocktail-Code/Path/About';
import Home from './Component/Cocktail-Code/Path/Home';
import Error from './Component/Cocktail-Code/Path/Error';
import SingleCocktail from './Component/Cocktail-Code/Path/SingleCocktail';
import Navbar from './Component/Cocktail-Code/Navbar';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import Grocery from './Component/Grocery/Grocery';
// import Main from './Component/GroceryCode/Main';
// import Lorem from './Component/Lorem/Lorem';
// import NavApp from './Component/Navbar/NavApp';
// import SideApp from './Component/SlideBar/SideApp';
// import Slider from './Component/Slider/slider';
//import Main from './Component/Tabs/Main';
// import List from './Component/Birthday/list';
// import data from './Component/Birthday/data';
// import data1 from './Component/Tours/data';
// import data2 from './Component/Tours/data';
// import List1 from './Component/Tours/list';
// import reviewdata from './Component/Review/data';
// import Review from './Component/Review/review';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Accordion from './Component/Accordion/Accordion';
// import Menu from './Component/Menu/menu';
//import Main from './Component/Menu/Main';
// import Tabs from './Component/Tabs/tabs';
// import StripApp from './Component/Stripe/StripApp';
// import Exmple from './Component/Stripe/exmple';
// import ListCart from './Component/Cart/ListCart';
// import CartApp from './Component/ListCart/cartApp';
 import ContainerLists from './Component/Cocktail/ContainerLists';
function App() {
  // const [value,setValues] = useState(data);
  // const [tour,setTours] = useState(data1);
  // const [abc,setAbc] = useState(data2);
  //const [Rdata,setRdata] = useState(reviewdata);
  return (
    <div className="App">
      {/* <List value={value}/> */}
      {/* <List1 tour={tour} setTours={setTours} abc={abc}/> */}
      {/* <Review /> */}
      {/* <Accordion /> */}
      {/* <Main /> */}
      {/* <Main /> */}
      {/* <Slider /> */}
      {/* <Lorem /> */}
      {/* <Grocery /> */}
      {/* <Main /> */}
      {/* <StripMain /> */}
      {/* <NavApp /> */}
      {/* <AppProvider>
        <StripApp />
      </AppProvider> */}
      {/* <AppProvider> 
          <ListCart />
      </AppProvider> */}
      {/* <AppProvider> 
          <CartApp />
      </AppProvider> */}
      <AppProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/home"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/Cocktail/:id"><SingleCocktail /></Route>
            <Route path=""><Error /></Route>
          </Switch>
        </Router>
      </AppProvider>
      
    </div>
  );
}

export default App;
