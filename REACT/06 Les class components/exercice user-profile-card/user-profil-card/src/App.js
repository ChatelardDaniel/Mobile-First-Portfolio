import React, { Component } from 'react';
import './App.css';
import Image from './image/woman.jpg';

export default class Card extends Component {
  render() {
    return (
      <div className="card-wrapper">
        <img
          className="picture"
          src={Image}
          alt="user"
        />
        <div className="card-content">
          <span className="name">Hannah - 28</span>
          <span className="city">San Diego</span>
        </div>
      </div>
    );
  };
};