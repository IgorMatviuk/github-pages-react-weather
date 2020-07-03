import React, { Component } from 'react'
import { Navbar, Form, FormControl, Button, FormGroup } from 'react-bootstrap';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
           <>
        <Navbar variant="dark" className="headerNavbar">
        <Navbar.Brand>Weather</Navbar.Brand>
     </Navbar>
     <Navbar variant="dark" style={{backgroundColor: '#1e3799'}}>
     <Form inline onSubmit={this.props.weatherMethod}>
     <FormGroup role="form">
      <FormControl type="text" name="city" placeholder="Город" className="mr-sm-1" />
      <Button variant="outline-primary" type="submit">Найти</Button>
    </FormGroup>        
    </Form>
     </Navbar> 
     <Navbar  variant="dark" style={{backgroundColor: '#1e3799', fontSize: '15px', height: '12px'}}>
     <Navbar.Text>Введите название города</Navbar.Text>
         </Navbar>                 
           </>
        )
    }
}
