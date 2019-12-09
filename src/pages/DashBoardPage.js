import React from 'react' ;
import ListComponent from '../components/ListComponent' ; 
import SignInContext from '../context/SignInContext' ;

const DashBoardPage = (props) => <SignInContext.Consumer>
    { context =>
      context.isLoggedIn 
      ?  
        <ListComponent props={props}  context={context} data={props.data}/> 
      :
        props.history.push("/login") 
    }
</SignInContext.Consumer>

export default DashBoardPage ;  