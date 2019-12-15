import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
import './Login.css';
//import firebase from 'firebase';
//import {DB_CONFIG} from '../Config';
//import {Redirect} from "react-router-dom";
import { NavLink } from 'react-router-dom';

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: "logIn",
    }
   // this.app=firebase.initializeApp(DB_CONFIG);

  }


  // login = () => {
  //     console.log("insidelogin");
  //   <Redirect to="/dashboard"/>
  //   };
  changeView = view => {

    this.setState({
      currentView: view,
    })
  }

  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (
          <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <button> <NavLink to="/dashboard">Sign Up</NavLink></button>
            <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          </form>
        )
        break;
      case "logIn":
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label for="email">Email:</label>
                  <input type="text" id="Email" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
                <li>
                  <i/>
                  <a onClick={ () => this.changeView("")} href="mailto:supritamudur@gmail.com">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
           <button type="button" > <NavLink to="/dashboard">Login</NavLink></button>
            <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
            <button type="button"><NavLink to="/payment">Pay</NavLink></button>
          </form>
      
        );
        break
      case  "":
        return (
          <form>
          <h2>Reset Password</h2>
          <fieldset>
            <legend>Password Reset</legend>
            <ul>
              <li>
                <em>A reset link will be sent to your inbox!</em>
              </li>
              <li>
                <label for="email">Email:</label>
                <input type="email" id="email" required/>
              </li>
            </ul>
          </fieldset>
          <button>Send Reset Link</button>
          <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
        </form>
        )
      default:
        break
    }
  }


  render() {
    return (
      <section id="entry-page">
        {this.currentView()}
      </section>
    )
  }
}

