import React from 'react'
import './card.scss'

export default function Card(props) {
    return (
        // <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
            <div className="card">
                <div className="wrapper">
                    <img src={require('../../data/card-images/' + props.cardimg)} className="cover-image" alt='' />
                </div>
                <img src={require('../../data/card-title/' + props.cardtitle)} className="title" alt='' />
                <img src={require('../../data/card-png/' + props.cardpng)} className="character" alt='' />
            </div>
        // </a>
    )
}
