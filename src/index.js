import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router,Route,browserHistory } from 'react-router';
import {firebaseApp} from './firebase';
import './index.css';
import { logUser } from './action'
import reducer from './reducer';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user =>{
    if(user){
       // console.log('User sign in or up',user);
        browserHistory.push('/App');
        const { email } =  user;
        store.dispatch(logUser(email));
    }
    else{ 
        //console.log('user needs to sign out or needs sign in');
        browserHistory.replace('/SignIn')
    }
})

ReactDOM.render(
    <Provider store = {store}>        
        <Router path ='/' history = {browserHistory}>
            <Route path='/App' component = {App}/>
            <Route path='/SignIn' component = {SignIn}/>
            <Route path='/SignUp' component = {SignUp}/>
        </Router>
    </Provider>, document.getElementById('root'));
