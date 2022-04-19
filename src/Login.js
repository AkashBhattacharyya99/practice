import React from 'react'
import './Login.css'
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

export default function Login() {

    const [state, dispatch]= useStateValue();

    const signIn = () => {
   auth.signInWithPopup(provider)
   .then((result)=>{
    dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
    });
   }).catch((error) => alert(error.message) );
    };
    return (
        <div className='login'>
<div className="login_body">
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel">
                        <img src="https://static1.tothenew.com/blog/wp-content/themes/ttn/images/logo-large.png" alt="TTN Logo" />
                        <h4>Enter your details and Start <br />
                            your journey with us</h4><br />
                        <p className="dont">Don't Stop until you are proud</p>
                        <br />

                       
                        <button id="google-sign-in" type='submit' onClick={signIn} >Google Signin</button>
                    </div>
                </div>
            </div>

            <div className="log-in-container">
                <form >
                    <h3>Login to Your Account</h3>
                    <br />

                    {/* <input type="email" name="email" placeholder="TTN Username" /><br />
                    <input type="password" name="password" placeholder="Password" /><br /> */}
                    <section className="subs">
                        <div className="remember">
                            <label><input type="checkbox" name="" />remember me</label>
                        </div>
                        <div class="forgot">
                            <a href="/">Forgot your password?</a>
                        </div>
                    </section>
                    <br />
                    <button id="sign-in" type="submit" >Sign In</button>

                </form>
            </div>
            </div>
        </div>

    )
}

