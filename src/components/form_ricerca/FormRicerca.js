import React from 'react'
import './StyleFormRicerca.css'

export const FormRicerca = (props) => {
    return (
        <div className='form'>
            form ricerca
            {/*si deve usare arrow function quando si deve passare un parametro all' onClick*/}
            <button onClick={() => props.funzione("series")}>Cerca serie</button>
            <button onClick={() => props.funzione("film")}>Cerca film</button>
        </div>
    )
}
