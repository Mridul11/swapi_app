import React, { Component } from 'react'
import { List, Loader, Dimmer } from 'semantic-ui-react'
import axios from 'axios' ;
import ListItemDetail from '../functional/ListItemDetail' ;
import SearchBoxComponent from "./SearchBoxComponent";

class ListComponent extends Component {

  state = {
    planets_data : [], 
    term : ""
  }

  componentDidMount(){
    axios.get("https://swapi.co/api/planets")
      .then(data => this.setState({ 
        planets_data : this.state.planets_data.concat(data.data.results) 
      }))
  }

  handleTerm(e){
      this.setState({
        term : e.target.value 
      })
  }

  renderContent(){
    return this.state.planets_data.length > 0 
    ? 
        <div >
            <SearchBoxComponent planets_data={this.state.planets_data} />  
            <ListItemDetail  planets_data={this.state.planets_data} />
      </div>
    : <Dimmer active inverted>
        <Loader />
      </Dimmer>
  }

  render(){
    console.log(this.state)
    return( 
        <List divided relaxed>
          { this.renderContent() } 
        </List>
        ) 
  }
}




export default ListComponent 