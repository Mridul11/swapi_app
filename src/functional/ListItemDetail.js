import React from 'react' ; 
import { Card, Button, Image } from 'semantic-ui-react' ;

const ListItemDetail = ( { name , population } ) => 
  <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>{ name }</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          { population }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>


export default ListItemDetail  ; 
