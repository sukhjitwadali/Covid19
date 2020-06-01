import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import {fetchData } from './api'
import   CList  from './components/C_List/C_List';

class App extends  React.Component {

  state={
    data: {},
    countries:[]
  }
 
  async componentDidMount (){
  // setTimeout("alert('Hello')", 1000);
  const fetchdata =  await fetchData()
  console.log(fetchdata.data)
  this.setState({data:fetchdata.data.Global,countries:fetchdata.data.Countries})
}
render(){
  return (
    <div>
        <Cards data= {this.state.data}/>
        <CList countries={this.state.countries}/>
    </div>
  );
}
}

export default App;