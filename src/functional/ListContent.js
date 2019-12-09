import React from 'react';
import { List } from 'semantic-ui-react' ;
import {Link } from 'react-router-dom' ;
import ListItemDetail from './ListItemDetail';

const ListContent = ({ planets_data }) => 
   
    planets_data.map((data, id) => <div>
                                        <List.Item key={id}>
                                            <Link to={`/dashboard/items/${id}`} >
                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                <List.Content>
                                                    <List.Header>{data.name}</List.Header>
                                                    <List.Description > {data.population } </List.Description>  
                                                </List.Content>
                                            </Link>
                                        <ListItemDetail name={ data.name } population={data.population} />
                                        </List.Item> 
                                    </div>
                    )                                


export default ListContent;
