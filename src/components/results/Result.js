import React from 'react'
import './StyleResult.css'
import {MovieCard} from './movie_card/MovieCard'
import {Pages} from './pages/Pages'

export const Result = (props) => {
    return (
        <div className = 'result'>
            <div> result </div>
            {/*props.currentPage*/}
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <Pages currentPage = {props.currentPage} pages = {props.pages}/>
        </div>
    );
};
