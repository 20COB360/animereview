import React from 'react'
import './login-register.scss'
import google from '../../static-images/google-logo-9808.png'
import microsoft from '../../static-images/microsoft-logo-png-2395.png'

let signin = document.getElementById('signin')

function signupmagic() {
    let lgin = document.getElementById('login-box');
    lgin.classList.add('animation-flip-half1');
    setTimeout(() => {
        showsignup()
    }, 450);

}

function showsignup() {
    let lgin = document.getElementById('login-box');
    let snup = document.getElementById('signup-box');
    lgin.style.display = "none";
    snup.style.display = "flex";
    snup.classList.add('animation-flip-half2');
}

function showsignin() {
    let sgin = document.getElementById('signin');
    let lgin = document.getElementById('login-box');
    sgin.style.display = "flex";
    lgin.style.display = "flex";
    lgin.classList.add('animation-dropdown');
}
function closesignin() {
    let lgin = document.getElementById('login-box');
    let snup = document.getElementById('signup-box');
    lgin.classList.remove('animation-flip-half1');
    lgin.classList.add('animation-leave');
    snup.classList.add('animation-leave');
    setTimeout(() => {
        resetanimations()
    }, 1000);
    // console.log("hi");
    // lgin.classList.remove('animation-leave');
    // snup.classList.remove('animation-leave');
    // signin.style.display = "none";
    // snup.style.display = "none";
}


function resetanimations() {
    let lgin = document.getElementById('login-box');
    let snup = document.getElementById('signup-box');
    // lgin.classList.add('animation-leave');
    // snup.classList.add('animation-leave');
    console.log("hi");
    lgin.classList.remove('animation-leave');
    snup.classList.remove('animation-leave');
    signin.style.display = "none";
    snup.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == signin) {
        let lgin = document.getElementById('login-box');
        let snup = document.getElementById('signup-box');
        lgin.classList.remove('animation-flip-half1');
        // snup.style.display = "none";
        // signin.style.display = "none";
        lgin.classList.add('animation-leave');
        snup.classList.add('animation-leave');
        setTimeout(() => {
            resetanimations()
        }, 1000);
    }
}

export default function Login() {
    return (
        <>
            <div className="signin" id="signin">
                <div className="modal-content login-box" id="login-box">
                    <div className="contents">
                        <div className="close" id="close-signin" onclick={closesignin()}><i className="fa fa-times"></i></div>
                        <div className="login-heading">
                            <h1>LOGIN</h1>
                        </div>
                        <div className="credential-box">
                            <input type="text" className="id-pass" placeholder="Username" />
                            <input type="password" className="id-pass" name="acc-pass" id="acc-pass-login" placeholder="Password" />
                        </div>

                        <div className="btn-box">
                            <button className="login primary">Login</button>
                            <button className="signup tertiary" onclick="signupmagic()">SignUp</button>
                        </div>

                        <div className="federated-login-box">
                            <div className="with-google federated-login">
                                <img src={google} alt="" className="logo" />
                                <p>Continue with GOOGLE</p>
                            </div>
                            <div className="with-microsoft federated-login">
                                <img src={microsoft} alt="" className="logo" />
                                <p>Continue with MICROSOFT</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-content signup-box" id="signup-box">
                    <div className="contents">
                        <div className="close" id="close-signin" onclick={closesignin()}><i className="fa fa-times"></i></div>
                        <div className="signup-heading">
                            <h1>SIGNUP</h1>
                        </div>
                        <div className="credential-box">
                            <input type="text" className="id-pass" placeholder="Name" />
                            <input type="text" className="id-pass" placeholder="Username" />
                            <input type="password" className="id-pass" name="acc-pass" id="acc-pass-reg" placeholder="Password" />
                            <input type="password" className="id-pass" name="acc-pass" id="acc-conf-pass" placeholder="Confirm Password" />
                        </div>

                        <div className="btn-box">
                            <button className="signup tertiary" onclick={signupmagic()}>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
