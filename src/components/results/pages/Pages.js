import React from 'react'
import './StylePages.css'

export const Pages = (props) => {
    return (
        <div className = 'pages'>
            current page = {props.currentPage}
            pages = {props.pages}
        </div>
    )
}
