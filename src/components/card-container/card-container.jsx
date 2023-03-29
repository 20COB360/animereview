import React from 'react'
import './card-container.scss'
import Card from '../card/card'

function scroll(sign){
    console.log(sign)
    let val = sign*50
    let x = document.getElementById('container-wrapper');
    x.scrollLeft += val;
    console.log(val)
}

export default function CardContainer() {
    return (
        <div className='container-wrapper'>

            <div className="scroll-left" onClick={()=>scroll(1)}><i class="fa fa-chevron-left"></i></div>
            <div className="card-container" id='card-container'>
                <Card
                    cardimg="beyond-the-boundary.png"
                    cardtitle="beyondtheboundary.png"
                    cardpng="mirai.png"
                />
                <Card
                    cardimg="tokyoghoul.jpg"
                    cardtitle="tokyoghoul.png"
                    cardpng="kaneki.png"
                />
                <Card
                    cardimg="naruto-bg.jpg"
                    cardtitle="narutotitle.png"
                    cardpng="naruto.png"
                />
                <Card
                    cardimg="dragonball.jpg"
                    cardtitle="dragonball.png"
                    cardpng="goku.png"
                />
                <Card
                    cardimg="hod.jpg"
                    cardtitle="hod.png"
                    cardpng="hod.png"
                />
                <Card
                    cardimg="hod.jpg"
                    cardtitle="hod.png"
                    cardpng="hod.png"
                />
                <Card
                    cardimg="hod.jpg"
                    cardtitle="hod.png"
                    cardpng="hod.png"
                />
                <Card
                    cardimg="hod.jpg"
                    cardtitle="hod.png"
                    cardpng="hod.png"
                />
            </div>
            <div className="scroll-right" onClick={()=>scroll(-1)}><i class="fa fa-chevron-right"></i></div>
        </div>
    )
}
