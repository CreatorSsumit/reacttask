import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from "react-redux";
import { createStore ,applyMiddleware } from "redux"
import {BrowserRouter,Route} from "react-router-dom"
import Reducers from "./reducers"
import * as serviceWorker from './serviceWorker';
import PromiseWare from "redux-promise";
import Headers from "./components/fixcomponent/header"
import Footer from "./components/fixcomponent/footer"
import Register from "./components/fixcomponent/register"
import Alluser from "./components/fixcomponent/allbusiness"
const createStoreMiddeleWrare = applyMiddleware(PromiseWare)(createStore)

ReactDOM.render(

 <Provider store={createStoreMiddeleWrare(Reducers)}>
<BrowserRouter>
 <Headers />
 <Route exact path="/registeredbusiness" component={Alluser} />
 <Route exact path="/register" component={Register} />
 <Route exact path="/home" component={App} />
 <Route exact path="/" component={App} />
  
    
   
 
    </BrowserRouter>

 </Provider>
   ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
