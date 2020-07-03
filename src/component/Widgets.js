import React, { Component } from 'react'
import { Card, CardDeck } from 'react-bootstrap';
import './Widgets.scss';

export default class Widgets extends Component {
    render() {
        return (
            <>
    <CardDeck style={{ 
     margin: '1rem',
     background: 'transparent',
     borderColor: 'transparent'
    }} 
     className=" card align-items-center card text-center">
    <Card style={{ 
        width: '15rem',
        backgroundColor: '#0c2461',
        height: '24rem', 
        color: 'white',
        boxShadow: '0 0 40px rgba(0,0,0,0.5)'
        }}>
            <Card.Body>
            <Card.Text>Дата:</Card.Text>   
            <Card.Title className="data">{this.props.datetime1}</Card.Title> 
            <Card.Title><h1>{this.props.temp1} °C</h1></Card.Title>
            <Card.Title>{this.props.weather1}</Card.Title> 
            <Card.Text>Минимальная температура </Card.Text>
            <Card.Subtitle>{this.props.low_temp1}</Card.Subtitle>
            <Card.Text>Максимальная температура</Card.Text> 
            <Card.Subtitle>{this.props.max_temp1}</Card.Subtitle>
        </Card.Body>
    </Card>
    <Card style={{ 
        width: '15rem',
        backgroundColor: '#0c2461',
        height: '24rem', 
        color: 'white',
        boxShadow: '0 0 40px rgba(0,0,0,0.5)'
        }}>
            <Card.Body>
            <Card.Text>Дата:</Card.Text>   
            <Card.Title className="data">{this.props.datetime2}</Card.Title> 
            <Card.Title><h1>{this.props.temp2} °C</h1></Card.Title>
            <Card.Title>{this.props.weather2}</Card.Title> 
            <Card.Text>Минимальная температура </Card.Text>
            <Card.Subtitle>{this.props.low_temp2}</Card.Subtitle>
            <Card.Text>Максимальная температура</Card.Text> 
            <Card.Subtitle>{this.props.max_temp2}</Card.Subtitle>
        </Card.Body>
    </Card>
    <Card style={{ 
        width: '15rem',
        backgroundColor: '#0c2461',
        height: '24rem', 
        color: 'white',
        boxShadow: '0 0 40px rgba(0,0,0,0.5)'
        }}>
            <Card.Body>
            <Card.Text>Дата:</Card.Text>   
            <Card.Title className="data">{this.props.datetime3}</Card.Title> 
            <Card.Title><h1>{this.props.temp3} °C</h1></Card.Title>
            <Card.Title>{this.props.weather3}</Card.Title> 
            <Card.Text>Минимальная температура </Card.Text>
            <Card.Subtitle>{this.props.low_temp3}</Card.Subtitle>
            <Card.Text>Максимальная температура</Card.Text> 
            <Card.Subtitle>{this.props.max_temp3}</Card.Subtitle>
        </Card.Body>
    </Card>
    <Card style={{ 
        width: '15rem',
        backgroundColor: '#0c2461',
        height: '24rem', 
        color: 'white',
        boxShadow: '0 0 40px rgba(0,0,0,0.5)'
        }}>
            <Card.Body>
            <Card.Text>Дата:</Card.Text>   
            <Card.Title className="data">{this.props.datetime4}</Card.Title> 
            <Card.Title><h1>{this.props.temp4} °C</h1></Card.Title>
            <Card.Title>{this.props.weather4}</Card.Title> 
            <Card.Text>Минимальная температура </Card.Text>
            <Card.Subtitle>{this.props.low_temp4}</Card.Subtitle>
            <Card.Text>Максимальная температура</Card.Text> 
            <Card.Subtitle>{this.props.max_temp4}</Card.Subtitle>
        </Card.Body>
    </Card>
    <Card style={{ 
        width: '15rem',
        backgroundColor: '#0c2461',
        height: '24rem', 
        color: 'white',
        boxShadow: '0 0 40px rgba(0,0,0,0.5)'
        }}>
            <Card.Body>
            <Card.Text>Дата:</Card.Text>   
            <Card.Title className="data">{this.props.datetime5}</Card.Title> 
            <Card.Title><h1>{this.props.temp5} °C</h1></Card.Title>
            <Card.Title>{this.props.weather5}</Card.Title> 
            <Card.Text>Минимальная температура </Card.Text>
            <Card.Subtitle>{this.props.low_temp5}</Card.Subtitle>
            <Card.Text>Максимальная температура</Card.Text> 
            <Card.Subtitle>{this.props.max_temp5}</Card.Subtitle>
        </Card.Body>
    </Card>
    <Card style={{ 
        width: '15rem',
        backgroundColor: '#0c2461',
        height: '24rem', 
        color: 'white',
        boxShadow: '0 0 40px rgba(0,0,0,0.5)'
        }}>
            <Card.Body>
            <Card.Text>Дата:</Card.Text>   
            <Card.Title className="data">{this.props.datetime6}</Card.Title> 
            <Card.Title><h1>{this.props.temp6} °C</h1></Card.Title>
            <Card.Title>{this.props.weather6}</Card.Title> 
            <Card.Text>Минимальная температура </Card.Text>
            <Card.Subtitle>{this.props.low_temp6}</Card.Subtitle>
            <Card.Text>Максимальная температура</Card.Text> 
            <Card.Subtitle>{this.props.max_temp6}</Card.Subtitle>
        </Card.Body>
    </Card>
    <Card style={{ 
        width: '15rem',
        backgroundColor: '#0c2461',
        height: '24rem', 
        color: 'white',
        boxShadow: '0 0 40px rgba(0,0,0,0.5)'
        }}>
            <Card.Body>
            <Card.Text>Дата:</Card.Text>   
            <Card.Title className="data">{this.props.datetime7}</Card.Title> 
            <Card.Title><h1>{this.props.temp7} °C</h1></Card.Title>
            <Card.Title>{this.props.weather7}</Card.Title> 
            <Card.Text>Минимальная температура </Card.Text>
            <Card.Subtitle>{this.props.low_temp7}</Card.Subtitle>
            <Card.Text>Максимальная температура</Card.Text> 
            <Card.Subtitle>{this.props.max_temp7}</Card.Subtitle>
        </Card.Body>
    </Card>
    </CardDeck>
            </>
        )
    }
}
