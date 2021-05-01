import React, { Component } from 'react'
import './index.css'
import maluku0 from './image/maluku0.jpeg'
import maluku1 from './image/maluku0.jpeg'
import maluku2 from './image/maluku0.jpeg'


export default class List extends Component {
    render() {
        return (
            <div className="row">
                <div className="card">
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img src={maluku0} alt="xx"/>
                    </a>
                </div>
                <div className="card">
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img src={maluku1} alt="xx"/>
                    </a>
                </div>
                <div className="card">
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img src={maluku2} alt="xx"/>
                    </a>
                </div>
            </div>
        )
    }
}