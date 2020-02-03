import React,{Component} from 'react';
import firebase from 'firebase';
import './Page.css';
import {DB_CONFIG} from '../Config';
//import Chart from './RadialGaugeComponent';
//import Payment from './Payment';

class Page extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        temperature:10,
        Altitude:20,
        weather: 34,
        pressure:30,
        watermoisture:40,
        
        LEDStatus: 0,
        LEDStatus0: 0,
        
        LEDStatus1:0,
        LEDStatus2:0,
        LEDStatus3:0,
        LEDStatus4:0,
        LEDStatus5:0,
        LEDStatus6:0,
      
      }
      
      
      
      this.app=firebase.initializeApp(DB_CONFIG);
      
      this.databasew=this.app.database().ref().child("/Altitude");
      this.databasee=this.app.database().ref().child("/temperature");
      this.databasea=this.app.database().ref().child("/pressure");
      this.databaseb=this.app.database().ref().child("/watermoisture");
      this.databasec=this.app.database().ref().child("/LEDStatus");
      this.databaseh=this.app.database().ref().child("/LEDStatus0");
      this.databased=this.app.database().ref().child("/LEDStatus1");
      this.databasef=this.app.database().ref().child("/LEDStatus2");
      this.databasei=this.app.database().ref().child("/LEDStatus3");
      this.databasej=this.app.database().ref().child("/LEDStatus4");
      this.databasek=this.app.database().ref().child("/LEDStatus5");
      this.databasel=this.app.database().ref().child("/LEDStatus6");
      
      
    }
  
    handleClick1 = () => {
      this.setState(state => ({
        LEDStatus: 1, 
      }));import React,{Component} from 'react';
import firebase from 'firebase';
import './Page.css';
import {DB_CONFIG} from '../Config';
//import Chart from './RadialGaugeComponent';
//import Payment from './Payment';

class Page extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        temperature:10,
        Altitude:20,
        
        pressure:30,
        watermoisture:40,
        
        LEDStatus: "",
        LEDStatus0: 0,
        
        LEDStatus1:0,
        LEDStatus2:0,
        LEDStatus3:0,
        LEDStatus4:0,
        LEDStatus5:0,
        LEDStatus6:0,
      
      }
      
      
      
      this.app=firebase.initializeApp(DB_CONFIG);
      
      this.databasew=this.app.database().ref().child("/Altitude");
      this.databasee=this.app.database().ref().child("/temperature");
      this.databasea=this.app.database().ref().child("/pressure");
      this.databaseb=this.app.database().ref().child("/watermoisture");
      this.databasec=this.app.database().ref().child("/LEDStatus");
      this.databaseh=this.app.database().ref().child("/LEDStatus0");
      this.databased=this.app.database().ref().child("/LEDStatus1");
      this.databasef=this.app.database().ref().child("/LEDStatus2");
      this.databasei=this.app.database().ref().child("/LEDStatus3");
      this.databasej=this.app.database().ref().child("/LEDStatus4");
      this.databasek=this.app.database().ref().child("/LEDStatus5");
      this.databasel=this.app.database().ref().child("/LEDStatus6");
      
      
    }
  
    handleClick1 = () => {
      this.setState(state => ({
        LEDStatus: !this.state.LEDStatus, 
      }));
      this.databasec.set((this.state.LEDStatus ? 0 : 1)); 
      
    }
    handleClick2 = () => {
      this.setState(state => ({
        LEDStatus0: !this.state.LEDStatus0,   
      }));
      this.databaseh.set((this.state.LEDStatus0 ? 0 : 1));   
      
    }
    handleClick3 = () => {
      this.setState(state => ({
        LEDStatus1: !this.state.LEDStatus1,    
        }));
      this.databased.set((this.state.LEDStatus1 ? 0 : 1))   
    }
    handleClick4 = () => {
      this.setState(state => ({
        LEDStatus2: !this.state.LEDStatus2,
      }));
      this.databasef.set((this.state.LEDStatus2 ? 0 : 1));
  }
  handleClick5 = () => {
      this.setState(state => ({
        LEDStatus3:!this.state.LEDStatus3,
      }));
      this.databasei.set((this.state.LEDStatus3 ? 0 : 1));
  }
  handleClick6 = () => {
      this.setState(state => ({
        LEDStatus4:!this.state.LEDStatus4,
      }));
      this.databasej.set((this.state.LEDStatus4 ? 0 : 1));
  }
  handleClick7 = () => {
      this.setState(state => ({
        LEDStatus5:!this.state.LEDStatus5
      }));
      this.databasek.set((this.state.LEDStatus5 ? 0 : 1));
  }
  handleClick8 = () => {
      this.setState(state => ({
        LEDStatus6:!this.state.LEDStatus6
      }));
      this.databasel.set((this.state.LEDStatus6 ? 0 : 1));
  }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push(this.state);

       console.log(this.state);
      console.log("Submitted");
    // this.handleSubmit=this.state;

  
     // this.props.history.on('/https://xolcano-edfd3.firebaseio.com/Hello');
    }
    componentDidMount(){
      this.databasee.on('value', snap =>{
        this.setState({
          temperature: snap.val(),
        });
      });
      
      this.databasew.on('value', snap =>{
        this.setState({
          Altitude: snap.val()
        });
      });
      this.databaseb.on('value', snap =>{
        this.setState({
          watermoisture: snap.val(),
        });
      });
      this.databasea.on('value', snap =>{
        this.setState({
          pressure: snap.val(),
        });
      });
    }
    handleChange=()=>{
      this.setState({
        weather:23,
      });
    }
    render(){
      return(
        <div className="contents">

        <form className="white" onSubmit={this.handleSubmit}>
          <h1 className="white-text">Xolcano IOT DashBoard</h1>
      
          <div className="buttons">
           <button type="button" className="hello"
                // onClick={this.props.history.push('/create')}
                onClick={this.handleClick1}
                style={{ backgroundColor: "lightgray", width: "80px", height: "60px", 
                cursor: "pointer", display: "inline-block" }}><strong>Fan</strong>
              </button>
              <div className="btn1">

                <span className="red">{this.state.LEDStatus ? 'ON' : 'OFF'}</span>
                &nbsp;
              </div>
              <button type="button" className="hello" onClick={this.handleClick2}
                style={{ backgroundColor: "lightblue", width: "80px", height: "60px", cursor: 
                "pointer", display: "inline-block" }}><strong>Bulb</strong></button>

              <div className="btn2">
              <span className="red">{this.state.LEDStatus0 ? 'ON' : 'OFF'}</span>
              </div>
              
              <button type="button" className="hello3" onClick={this.handleClick3}
                style={{ backgroundColor: "lightpink", width: "80px", height: "60px", cursor: "pointer", display: "inline-block" }}><strong>Fridge</strong></button>
              <div className="btn3">

              <span className="red">{this.state.LEDStatus1 ? 'ON' : 'OFF'}</span>
              </div>
              <button type="button" className="hello4" onClick={this.handleClick4}
                style={{ backgroundColor: "lightgreen", width: "80px", height: "60px", cursor: "pointer", display: "inline-block" }}>
                <strong>Tv</strong></button>

              <div className="btn4">
              <span className="red">{this.state.LEDStatus2 ? 'ON' : 'OFF'}</span>
              </div>
        <div className="buttons2">
              <button type="button" className="hello5" onClick={this.handleClick5}
                style={{ backgroundColor: "#e6beff", width: "80px", height: "60px", cursor: "pointer", display: "inline-block" }}>
                <strong>LED 1</strong></button>

              <div className="btn4">
              <span className="red">{this.state.LEDStatus3 ? 'ON' : 'OFF'}</span>
              </div>

              <button type="button" className="hello6" onClick={this.handleClick6}
                style={{ backgroundColor: "#808000", width: "80px", height: "60px", cursor: "pointer", display: "inline-block" }}>
                <strong>LED 2</strong></button>

              <div className="btn4">
              <span className="red">{this.state.LEDStatus4 ? 'ON' : 'OFF'}</span>
              </div>

              <button type="button" className="hello7" onClick={this.handleClick7}
                style={{ backgroundColor: "#bfef45", width: "80px", height: "60px", cursor: "pointer", display: "inline-block" }}>
                <strong>LED 3</strong></button>

              <div className="btn4">
              <span className="red">{this.state.LEDStatus5 ? 'ON' : 'OFF'}</span>
              </div>

              <button type="button" className="hello8" onClick={this.handleClick8}
                style={{ backgroundColor: "#800000", width: "80px", height: "60px", 
                cursor: "pointer", display: "inline-block" }}>
                <strong>LED 4</strong></button>

              <div className="btn4">
              <span className="red">{this.state.LEDStatus6 ? 'ON' : 'OFF'}</span>
              </div>
          </div>

          </div>
             
          
        <div className="container">
<h1>the Temperture is {this.state.temperature}</h1>
      <h1>the Altitude is {this.state.Altitude}</h1>
      <h1>the Watermoisture is {this.state.watermoisture}</h1>

      <h1>the Pressure is {this.state.pressure}</h1> 
       
        
      )
    }
  }
  
  export default Page;
      this.databasec.set((this.state.LEDStatus ? 0 : 1)); 
      
    }
    handleClick2 = () => {
      this.setState(state => ({
        LEDStatus0: 1,   
      }));
      this.databaseh.set((this.state.LEDStatus0 ? 0 : 1));   
      
    }
    handleClick3 = () => {
      this.setState(state => ({
        LEDStatus1: 1,    
        }));
      this.databased.set((this.state.LEDStatus1 ? 0 : 1))   
    }
    handleClick4 = () => {
      this.setState(state => ({
        LEDStatus2: 1,
      }));
      this.databasef.set((this.state.LEDStatus2 ? 0 : 1));
  }
  handleClick5 = () => {
      this.setState(state => ({
        LEDStatus3:1,
      }));
      this.databasei.set((this.state.LEDStatus3 ? 0 : 1));
  }
  handleClick6 = () => {
      this.setState(state => ({
        LEDStatus4:1,
      }));
      this.databasej.set((this.state.LEDStatus4 ? 0 : 1));
  }
  handleClick7 = () => {
      this.setState(state => ({
        LEDStatus5:1
      }));
      this.databasek.set((this.state.LEDStatus5 ? 0 : 1));
  }
  handleClick8 = () => {
      this.setState(state => ({
        LEDStatus6:1
      }));
      this.databasel.set((this.state.LEDStatus6 ? 0 : 1));
  }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push(this.state);

       console.log(this.state);
      console.log("Submitted");
    // this.handleSubmit=this.state;

  
     // this.props.history.on('/https://xolcano-edfd3.firebaseio.com/Hello');
    }
    componentDidMount(){
      this.databasee.on('value', snap =>{
        this.setState({
          temperature: snap.val(),
        });
      });
      
      this.databasew.on('value', snape =>{
        this.setState({
          Altitude: snape.val()
        });
      });
      this.databaseb.on('value', snap =>{
        this.setState({
          watermoisture: snap.val(),
        });
      });
      this.databasea.on('value', snap =>{
        this.setState({
          pressure: snap.val(),
        });
      });
    }
    handleChange=()=>{
      this.setState({
        weather:23,
      });
    }
    render(){
      return(
        <div className="contents">

        <form className="white" onSubmit={this.handleSubmit}>
          <h1 className="white-text" 
          style={{ textAlign: "center",backgroundColor:"black",lineHeight:"200%",color:"white"}}>Xolcano IOT DashBoard</h1>
      
          <div className="buttons">
           <button type="button" className="hello"
                // onClick={this.props.history.push('/create')}
                onClick={this.handleClick1}
                style={{ backgroundColor: "lightgray", width: "80px", height: "60px", 
                cursor: "pointer", display: "inline-block" }}><strong>Fan</strong>
              </button>
              <div className="btn1">

                <span className="red">{this.state.LEDStatus ? 'OFF' : 'ON'}</span>
                &nbsp;
              </div>
              <button type="button" className="hello" onClick={this.handleClick2}
                style={{ backgroundColor: "lightblue", width: "80px", height: "60px", cursor: 
                "pointer", display: "inline-block" }}><strong>Bulb</strong></button>

              <div className="btn2">
                <span className="red">{this.state.isToggleOn2 ? 'OFF' : 'ON'}</span>
                &nbsp;
            <span className="green">{this.state.isToggleOn22 ? 'ON' : 'OFF'}</span>
              </div>
              
              <button type="button" className="hello" onClick={this.handleClick3}
                style={{ backgroundColor: "lightpink", width: "80px", height: "60px", cursor: "pointer", display: "inline-block" }}><strong>Fridge</strong></button>
              <div className="btn3">

                <span className="red">{this.state.isToggleOn3 ? 'OFF' : ''}</span>
                &nbsp;
            <span className="green">{this.state.isToggleOn33 ? 'ON' : ''}</span>
              </div>
              <button type="button" className="hello" onClick={this.handleClick4}
                style={{ backgroundColor: "lightgreen", width: "80px", height: "60px", cursor: "pointer", display: "inline-block" }}>
                <strong>Tv</strong></button>

              <div className="btn4">
                <span className="red">{this.state.isToggleOn4 ? 'OFF' : ''}</span>
                &nbsp;
            <span className="green">{this.state.isToggleOn44 ? 'ON' : ''}</span>
              </div>
        <div className="buttons2">
              <button type="button" className="hello" onClick={this.handleClick5}
                style={{ backgroundColor: "#e6beff", width: "80px", height: "60px", cursor: "pointer", display: "inline-block" }}>
                <strong>LED 1</strong></button>

              <div className="btn4">
                <span className="red">{this.state.isToggleOn5 ? 'OFF' : ''}</span>
                &nbsp;
            <span className="green">{this.state.isToggleOn55 ? 'ON' : ''}</span>
              </div>

              <button type="button" className="hello" onClick={this.handleClick6}
                style={{ backgroundColor: "#808000", width: "80px", height: "60px", cursor: "pointer", display: "inline-block" }}>
                <strong>LED 2</strong></button>

              <div className="btn4">
                <span className="red">{this.state.isToggleOn6 ? 'OFF' : ''}</span>
                &nbsp;
            <span className="green">{this.state.isToggleOn66 ? 'ON' : ''}</span>
              </div>

              <button type="button" className="hello" onClick={this.handleClick7}
                style={{ backgroundColor: "#bfef45", width: "80px", height: "60px", cursor: "pointer", display: "inline-block" }}>
                <strong>LED 3</strong></button>

              <div className="btn4">
                <span className="red">{this.state.isToggleOn7 ? 'OFF' : ''}</span>
                &nbsp;
            <span className="green">{this.state.isToggleOn77 ? 'ON' : ''}</span>
              </div>

              <button type="button" className="hello" onClick={this.handleClick8}
                style={{ backgroundColor: "#800000", width: "80px", height: "60px", 
                cursor: "pointer", display: "inline-block" }}>
                <strong>LED 4</strong></button>

              <div className="btn4">
                <span className="red">{this.state.isToggleOn8 ? 'OFF' : ''}</span>
                &nbsp;
            <span className="green">{this.state.isToggleOn88 ? 'ON' : ''}</span>
              </div>
          </div>

          </div>
             
          
        <div className="container">
<h1>the Temperture is {this.state.temperature}</h1>
      <h1>the Altitude is {this.state.Altitude}</h1>
      <h1>the Watermoisture is {this.state.watermoisture}</h1>

      <h1>the Pressure is {this.state.pressure}</h1> 
       {/* <h4>{this.state.weather}</h4>
      <button onClick={this.handleChange}>Change the Value</button>  */}
        </div>

        {/* <div className="Graph">
        <Chart />
                </div> */}
        </form>
        </div>
        
      )
    }
  }
  
  export default Page;
