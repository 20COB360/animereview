import React from 'react'
import './header-button.scss'
import Login from '../login-register/login-register'

function DisplayCard() {
    <Login/>
}
export default function HeaderButton() {
    return (
        <div className='button-box'>
            <button><i class="fa fa-lightbulb-o"></i><span> Suggest</span></button>
            <button><span> Request</span></button>
            <button onClick={DisplayCard()}><i class="fa fa-users"></i><span> JoinUs</span></button>
            <button><i class="fa fa-info-circle"></i><span> AboutUs</span></button>
            <button><i class="fa fa-handshake-o"></i><span> Support</span></button>
        </div>
    )
}
