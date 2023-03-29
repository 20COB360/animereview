import React from 'react'
import './scroll-to-top.scss'

function ScrollTop(){
    document.documentElement.scrollTop = 0;
}
export default function ScrollToTop() {
    return (
        <div className='element' onClick={ScrollTop}>
            <i class="fa fa-arrow-up"></i>
        </div>
    )
}
