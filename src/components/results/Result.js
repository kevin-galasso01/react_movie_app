import React from 'react'
import './StyleResult.css'
import MovieCard from './movie_card/MovieCard'

export default function Result() {
    return (
        <div className = 'result'>
            <div> result </div>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    )
}
