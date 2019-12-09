import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignInContext  from './context/SignInContext';


ReactDOM.render( 
    <SignInContext.Provider value={ { isLoggedIn : false, changeIsLoggedIn : () => {} } } >
        <App />
    </SignInContext.Provider>
    , 
    document.getElementById('root'));

