import React, {Component} from 'react';
import { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Container } from 'reactstrap';

function AppNavBar() {
        
    const[isOpen,setIsOpen] = useState(false)
    

    const toggle=()=>{
        setIsOpen(!isOpen);
    }

        return(
            <div>
                <Navbar color='dark' dark expand="md" className='mb-4'>
                    <Container>
                        <NavbarBrand href='/'>ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={toggle}/>
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                               
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }


export default AppNavBar
  