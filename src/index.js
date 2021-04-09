import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/fonts.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Page} from "./components/Page";
import {MessagesContainer} from "./base/MessagesContainer";
import { Provider } from 'react-redux';
import {store} from "./base/store";

const routing = (
    <Router>
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/page'}>Page</Link>
                </li>
            </ul>
        </nav>
       <Switch>
           <Route path={'/'} exact component={App}/>
           <Route path={'/page'} component={Page}/>
       </Switch>
    </Router>
);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <MessagesContainer />
          {routing}
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
