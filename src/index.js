// React essential cvomponents
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import { Provider } from 'react-redux';

// Pages
import {Home, AnotherPage} from './components/pages';

// Messages components
import {MessagesContainer, store} from "./components/base";
import {useMessage} from "./components/hoc/useMessage";

// Base styles
import './styles/base.css';


// Handler for location change: clear messages when moving to another page
const Location = withRouter(({ history }) => {
    const {clearMessages} = useMessage();

    useEffect(() => history.listen(clearMessages))

    return '';
});

// Base navigation
const Routing = () => {
    return (
        <Router>
            <Location />
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
                <Route path={'/'} exact component={Home}/>
                <Route path={'/page'} component={AnotherPage}/>
            </Switch>
        </Router>
    )
};

// Root
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <MessagesContainer />
          <Routing/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
