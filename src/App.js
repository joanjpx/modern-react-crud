// App.js
import React, { Component } from 'react';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



export default class Create extends Component {
  constructor(props) {
      super(props);
      this.onChangePersonName = this.onChangePersonName.bind(this);
      this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
      this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          person_name: '',
          business_name: '',
          business_gst_number:''
      }
  }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.person_name}, ${this.state.business_name}, and ${this.state.business_gst_number}`)
    this.setState({
      person_name: '',
      business_name: '',
      business_gst_number: ''
    })
  }
 
  render() {
      return (

        <div className="container">
          <NavBar/>
        </div>
      )
  }
}