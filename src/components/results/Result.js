import React from 'react'
import './StyleResult.css'
import { MovieCard } from './movie_card/MovieCard'
import { Pages } from './pages/Pages'

export const Result = (props) => {
    const movies = props.movies;

    const movieList = movies.map((movie) => <MovieCard key={movie.codice} displayMovie={movie} />);

    return (
        <div className='result'>
            <div> result </div>
            {movieList}
            <Pages currentPage={props.currentPage} pages={props.pages} />
        </div>
    );
};
