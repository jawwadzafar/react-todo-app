import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from './HomePage';
import Login from './Login';
import Signup from './Signup';
import NotFoundPage from './NotFoundPage'

class Index extends React.Component {
    constructor(props){
      
        super(props)
        this.state ={
          isLoggedIn:false,
        }
        // if(!localStorage.getItem('todos')){
        //   let todoItems = [];
        //   todoItems.push({index: 1, title: "learn react", description: 'lorem ipsum', done: false, userid: 1});
        //   todoItems.push({index: 2, title: "Go shopping", description: 'lorem ipsum', done: true, userid: 1});
        //   todoItems.push({index: 3, title: "buy flowers", description: 'lorem ipsum', done: true, userid: 1});
        //   todoItems.push({index: 4, title: "11Go shopping", description: 'lorem ipsum', done: false, userid: 2});
        //   todoItems.push({index: 5, title: "23Go shopping", description: 'lorem ipsum', done: true, userid: 2});
        //   localStorage.setItem('todos', JSON.stringify(todoItems))
        // }

        if(!localStorage.getItem('users')){
          this.users = [];
          this.users.push({userid: 1, username: "test", password: "test"});
          this.users.push({userid: 2, username: "admin", password: "admin"});
          this.users.push({userid: 3, username: "jawwad", password: "jawwad"});
          localStorage.setItem('users', JSON.stringify(this.users));

        }
      }
      

  handleLogin = (token)=>{
    localStorage.setItem('user', token);
    this.setState({
      isLoggedIn:true,
    })
  }
  handleLogout = () =>{
    localStorage.removeItem("user");
    this.setState({
      isLoggedIn:false,
    })
  }
  componentWillMount(){
    if(localStorage.getItem('user')){
      this.setState({
        isLoggedIn:true,
      })
    }
  }
  render() {
    return (
      <Fragment>
        {this.state.isLoggedIn?<Navbar handleLogout={this.handleLogout}/>:null}
        <Switch>
          <Route exact path="/login" render={(props)=><Login  {...props}  handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn}/>} />
          <Route exact path="/signup" render={(props)=><Signup  {...props}  handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn}/>} />
          <Route exact path="/" render={(props)=>this.state.isLoggedIn?<HomePage {...props} />:<Redirect to="/login" />}/>
          <Route render={(props)=><NotFoundPage  {...props} handleLogout={this.handleLogout} />}/>
        </Switch>
        <div className="footer">Made with React.js By <a href="https://github.com/jawwadzafar" target="_blank">Jawwad Zafar</a></div>
      </Fragment>
    );
  }
}

export default Index;
