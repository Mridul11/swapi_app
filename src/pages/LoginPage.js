import React from 'react' ;
import LoginFormComponent from "../components/LoginFormComponent";
import SignInContext from '../context/SignInContext' ;

const LoginPage = (props) => (
    <SignInContext.Consumer>
        {(context) =>
            <LoginFormComponent props={props}  context={context}/> 
        }
    </SignInContext.Consumer>
    )

export default LoginPage ; 
