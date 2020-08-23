import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom'

const CardUI = (props) => (
    <div className="card text-center">
        <div className="overflow">
            <img src={props.imgsrc} alt="Images" className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">
                Laravel is an open-source PHP framework, which is robust and easy to understand. It follows a model-view-controller design pattern. Laravel reuses the existing components of different frameworks which helps in creating a web application. The web application thus designed is more structured and pragmatic.
            </p>
            <NavLink to={props.page} className="btn btn-outline-success">
                View
            </NavLink>
        </div>
    </div>
);
export default CardUI;