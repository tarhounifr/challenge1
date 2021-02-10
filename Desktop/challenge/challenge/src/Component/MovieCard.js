import React from 'react'
import { Card } from 'react-bootstrap';
import "./MovieCard.css"
const MovieCard = ({ movies, handleData }) => {
    return (
        <div>
            <Card className="cardm" >
                <Card.Img variant="top" src={movies.image} className="cardimg" />
                <Card.Body>
                    <Card.Text className="cardtext">
                        <div className="cardlm">
                            <h2>Rating : {movies.rating}</h2>
                            <h1>Name : {movies.name}</h1>
                            <h3>Date : {movies.date}</h3>
                            <h3>Type :  {movies.type}</h3>
                        </div>
                        <div className="movte"><p className="titremovte">Description : </p> {movies.description}</div>
                        <button onClick={() => handleData(movies.name, movies.rating)}>Click here</button>
                    </Card.Text>
                </Card.Body>
            </Card>


        </div>
    )
}

export default MovieCard

