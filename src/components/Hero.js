import React from 'react';

function Hero(props) {
    return (
        <div className="jumbotron">
            <h1>{props.title}</h1>
            <p className="lead">Kickin' it old school.</p>
            <p><a className="btn btn-lg btn-success" href="#">Hello world</a></p>
        </div>
    );
}

export default Hero;