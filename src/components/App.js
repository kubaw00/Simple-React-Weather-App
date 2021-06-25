import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Result from './Result'

const APIKey = '8c705f27c223baf0aa97221bc7cc78bd'

class App extends Component {
  state = { 
    value: "",
    date: "",
    city:"",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
   }

   handleOnChange = (e) => {
      this.setState({
        value: e.target.value
      })
      if(e.target.value === ""){
        this.setState({
          city: e.target.value,
          err: false,
        })
      }
      
   }

  //  handleSubmit = (e) => {
  //    e.preventDefault();
  //    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&appid=${APIKey}`;

  //    fetch(API)
  //    .then(res => {
  //      if(res.ok) {
  //        return res
  //      }

  //      throw Error("nie udało się")
  //    })
  //    .then(res => res.json())
  //    .then(data => {
  //      const date = new Date().toLocaleString()
  //       this.setState( prevState => ({
  //         err: false, 
  //         date,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         temp: data.main.temp,
  //         pressure: data.main.pressure,
  //         wind: data.wind.speed,
  //         city: prevState.value,
          
  //       }))
  //    })
  //    .catch(err => {
  //      console.log(err)
  //      this.setState(prevState => ({
  //        err: true,
  //        city: prevState.value, 
  //      }))
  //  })
  // }

 componentDidUpdate(prevProps, prevState) {

  if(this.state.value.length === 0 ) return
  if(this.state.value !== prevState.value) {

const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&appid=${APIKey}`;

     fetch(API)
     .then(res => {
       if(res.ok) {
         return res
       }

       throw Error("nie udało się")
     })
     .then(res => res.json())
     .then(data => {
       const date = new Date().toLocaleString()
        this.setState( prevState => ({
          err: false, 
          date,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: prevState.value,
          
        }))
     })
     .catch(err => {
       
       this.setState(prevState => ({
         err: true,
         city: prevState.value, 
       }))
   } )


 }
}


  render() { 
    return (  
      <div className="app">
        <Form 
        value={this.state.value}
        change={this.handleOnChange}
        submit={this.handleSubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}
 

export default App;
