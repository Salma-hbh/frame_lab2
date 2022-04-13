import React from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import axios from 'axios'

import * as PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { useState } from 'react';


function ShoppingList () {
    
    const[items,setItems]=useState([])
    axios.get('/api/items')
            .then(response => {
                
                setItems(response.data);
            });
            function deleteItem(id: any){
                axios.delete(`/api/items/${id}`).then(res=>{
                    console.log("succes")
                })
               }
               function addItem(item: any){
                axios.post('/api/items',item).then(res=>{
                    console.log("succes")
                })
               }
        
        return(
            <Container>
            <Button color="dark" style={{marginBottom:'2rm'}}
                        onClick={() => {
                            const name = prompt('Enter Item');
                            const newItem ={
                                name:name
                            }
                            if(name){
                                addItem(newItem)
                                
                            }
                        }}>
                    Add item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({_id, name})=>(
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem className='List'>
                                    <Button className='remove-btn' color='danger'
                                        onClick={deleteItem.bind(_id)}
                                        >
                                        &times;
                                    </Button>
                                    {name}</ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>    

            </Container>
        )
    }


export default (ShoppingList);
