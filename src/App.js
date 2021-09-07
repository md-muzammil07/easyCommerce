  
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Header from './components/header/Header';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import Cart from './components/cart/Cart';
import { Box } from '@material-ui/core';
import DetailView from './components/product/DetailView';


function App() {
  return (        //templateProvider ke andar children paas kar rahe hu, ye child ko temprovider me nikalna hoga
    <TemplateProvider> 
     <ContextProvider>
      <BrowserRouter>
        <Header />
        <Box style={{marginTop:55}}>
         <Switch>
           <Route exact path= '/' component={Home} />
           <Route exact path= '/cart' component={Cart} />
           <Route exact path= '/product/:id' component={DetailView} />
         </Switch>
       </Box>
      </BrowserRouter>
     </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
