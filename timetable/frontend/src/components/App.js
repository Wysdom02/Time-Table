import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import TimeTable from './layout/TimeTable';
import Header from './layout/Header';
import Form from './layout/Form';
import Login from './accounts/Login';
import Register from './accounts/Register';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "../store";
import PrivateRoute from './common/PrivateRoute';
import { loadUser } from '../actions/auth';
class App extends Component {
    componentDidMount() {
      store.dispatch(loadUser());
    }
    render() {
        return (
        <Provider store={store}>
        <Router>
        <Fragment>
            <div>
                   <Header />
                    <Switch>
                        <PrivateRoute exact path = "/" component={Form}/>
                        <Route exact path="/register" component={Register} />
                      <Route exact path="/login" component={Login} />
                    </Switch>
                    <TimeTable EGnum="1" imgUrl="../../../static/images/timetable-1.jpg"/>
                    <TimeTable EGnum="2" imgUrl="../../../static/images/timetable-2.jpg"/>
                    <TimeTable EGnum="3" imgUrl="../../../static/images/timetable-3.jpg"/>
                    <TimeTable EGnum="4" imgUrl="../../../static/images/timetable-2.jpg"/>
                    <TimeTable EGnum="5" imgUrl="../../../static/images/timetable-1.jpg"/>
                </div>
                    </Fragment>
                    </Router>
                    </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));