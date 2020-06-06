import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import {fetchData } from './api'
import   CList  from './components/C_List/C_List';
import Datepicker from './components/DatePicker/datepicker';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Navigationbar from './components/Navbar/Navigationbar';
import Graph from './components/Graph/Graph';
class App extends  React.Component {

  state={
    data: {},
    graphdata : {},
    countries:[],
    country : ''
  }
  async componentDidMount (){
  const fetchdata =  await fetchData()
  this.setState({data:fetchdata.data.Global,countries:fetchdata.data.Countries})
}

handleCountryChange = async (country) =>{

  const data = await fetchData(country)
  this.setState({ graphdata:data, country: country });


}

render(){
  return (
    <div>
          <Navigationbar/>
        

      <Router>
    <Switch>
    <Route exact path="/">
    <Redirect to="/home" />
</Route>


      <Route path="/home" component={Cards}>
      <Cards data= {this.state.data}/>
         
      </Route>
      <Route path="/list" component={CList}>
      <CList countries={this.state.countries}/>
      </Route>
      <Route path="/chart">
      <Datepicker handleCountryChange ={this. handleCountryChange}/>
      <Graph data={this.state.graphdata} country={this.state.country}/>
      </Route>
        </Switch>
      </Router>
    </div>
  );
}
}

export default App;