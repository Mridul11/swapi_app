import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios' ;
import DashBoardPage from '../pages/DashBoardPage';

class LoginFormComponent extends Component{
    
    constructor(props){
        super(props) ;
        this.state = {
            username : "",
            password : "",
            data : [],
           
        }
    }

    componentDidMount(){
        axios.get("https://swapi.co/api/people")
            .then(data => this.setState({
                data : this.state.data.concat(data.data.results),
            })
            )
    }

    handleChange(e){
        this.setState({
            ...this.state, 
            [e.target.name] : e.target.value 
        })
    }

    checkUsernameAndPassword(cb){
        const trueOrFalse = this.state.data.length > 0  ? 
            !!this.state.data.filter(v => v.birth_year === this.state.password && v.name === this.state.username).length : false 
        
        return trueOrFalse ;
    }

    handleSubmit(e){
        e.preventDefault();
        this.checkUsernameAndPassword(this.props.context.changeIsLoggedIn( 
           this.props.context.isLoggedIn = true 
            )) 
       ? 
        this.props.props.history.push("/dashboard") 
       :
        this.props.props.history.push("/login");       
    }

    renderContent(){
      return  !this.state.isLoggedIn 
        ? 
        <Form onSubmit={e => this.handleSubmit(e)}>
        <Form.Field>
            <label>UserName</label>
            <input 
                placeholder='Username' 
                name="username"
                value={this.state.username}
                onChange={e => this.handleChange(e)}
            />
        </Form.Field>
        <Form.Field>
            <label>Password</label>
            <input 
                placeholder='Password' 
                type="password"
                name="password"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
            />
        </Form.Field>
        <Button 
            type='submit'
            disabled = { this.state.data.length > 0 ? false : true  }
            >Submit</Button>
    </Form>  
    : 
        <DashBoardPage data={this.state.data}/>
    }

    render(){
        console.log(this.props, this.state)
        return ( this.renderContent() )
    }
}

export default LoginFormComponent ;