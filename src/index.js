import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Login from './components/Login';
import Home from './components/Home';
import AdjustRecipe from './components/AdjustRecipe';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import RecipeForm from './components/RecipeForm';

import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
const createStoreWithMiddleware = applyMiddleware()(createStore);

let object = {
  name: 'test'
}

// import {PARSE_API_URL, PARSE_HEADERS} from './utility/parse';
//
// fetch(`${PARSE_API_URL}/classes/Recipe`, {
//       method: "POST",
//       body: JSON.stringify(object),
//       headers: PARSE_HEADERS
//     })
//     .then(response => {
//       console.log('new recipe added');
//     })
//     .catch(err => {
//       console.log(err)
//     });

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path="/sign-in" component={SignIn}/>
          <Route path="/home" component={Home}/>
          <Route path="/adjust-recipe" component={AdjustRecipe}/>
          <Route path="/sign-up" component={SignUp}/>
          <Route path="/sign-in" component={SignIn}/>
          <Route path="/add-recipe" component={RecipeForm}/>
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
