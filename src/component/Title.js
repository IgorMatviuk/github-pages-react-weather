import React, { Component } from 'react'
import { Card, CardDeck } from 'react-bootstrap';
import './Title.scss';

export default class Title extends Component {
    render() {
        return (
         <>
        <CardDeck>
        <Card style={{ 
        height: '23rem',
        margin: '5rem', backgroundColor: '#0c2461',
        color: 'white', boxShadow: '0 0 40px rgba(0,0,0,0.5)'
        }} 
        className="card align-items-center card text-center">
            <Card.Body>
    <Card.Title><h1>{this.props.temp} °C</h1></Card.Title>
    <Card.Title><h2>{this.props.city_name}</h2></Card.Title>
    <Card.Text>{this.props.weather}</Card.Text>
    <Card.Text>Минимальная температура {this.props.low_temp}</Card.Text> 
    <Card.Text>Максимальная температура {this.props.max_temp}</Card.Text>
    <Card.Text>Дата: {this.props.datetime}</Card.Text> 
            </Card.Body>
        </Card>
        </CardDeck>
         </>
        )
    }
}
