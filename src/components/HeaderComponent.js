import React from 'react' ;
import { Header } from "semantic-ui-react";
import {Link } from 'react-router-dom" ; 

const HeaderComponent = () => <><Header as="h1">HeaderComponent</Header> <Link to="/login">login</Link> | <Link to="/dashboard">dashboard</Link>  </>

export default HeaderComponent ; 
