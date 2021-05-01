import React, {Component} from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css';


export default class App extends Component{

  state = {
    users: [], // users init array
    isFirst: true, // if first load page
    isLoading: false, // mark if in loading process
    err: '' // store request related error message
  }


  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    const {users} = this.state
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    );
  }
}
