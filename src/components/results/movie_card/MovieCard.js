import React from 'react'
import './StyleMovieCard.css'

export const MovieCard = (props) =>{
    return (
        <div className = 'card'>
            <p>Titolo: {props.displayMovie.title}</p>
            <p>Descrizione: {props.displayMovie.desciption}</p>
            <p>Img: {props.displayMovie.img}</p>
            <p>Novita: {props.displayMovie.novita}</p>
        </div>
    )
}
