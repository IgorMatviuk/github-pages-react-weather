import React, { Component } from 'react'
import './Footer.scss';
import { Navbar } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <>
            <Navbar  variant="dark" className="Footer">
                <Navbar.Text style={{color: 'white'}}>
                    <h6>Автор: <a href="https://www.linkedin.com/in/%D0%B8%D0%B3%D0%BE%D1%80%D1%8C-%D0%BC%D0%B0%D1%82%D0%B2%D0%B8%D1%8E%D0%BA-26ba261a1/">Игорь Матвиюк</a></h6>
                </Navbar.Text>
            </Navbar>
            </>
        )
    }
}
