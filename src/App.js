import React from "react"
import Page1 from "./components/Page1"
import LogIn from "./components/LogIn"
import Admin from "./components/Admin"
import Home from "./components/Home"
import Info from "./components/Info"
import "./components/API.js"
import {getUserId} from './components/API'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      login: 0,
      username: " ",
      id: 5,
      stop: 0,
      titles: []
    };
    this.handleLogInAdmin = this.handleLogInAdmin.bind(this);
    this.handleLogInUser = this.handleLogInUser.bind(this);
    this.handleHomePage = this.handleHomePage.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleTitles = this.handleTitles.bind(this);
  }
  //stabilim in contul carui user se va face logarea
  handleAccount(){
    //console.log(this.state.username);
    getUserId(this.state.username).then((res) => this.setState({id: res.data}));
    //console.log(this.state.id);
  }

  //login in modul admin
  handleLogInAdmin() {
    this.setState({login: 1});
  }

  handleStop(){
    this.setState({stop: 1});
  }

  handleTitles(t){
    this.setState({titles: t})
  }

  //preluam username-ul introdus de user pentru a sti in ce cont sa logam user-ul respectiv
  handleUsername(user) {
    this.setState({username: user});
  }
  
  //pagina de informatii a admin-ului
  handleInfo() {
    this.setState({login: 4});
  }
  
  //login in modul user
  handleLogInUser() {
    this.setState({login: 2});
  }

  //logout
  handleLogOut() {
    this.setState({login: 0});
    //this.setState({username: " "});
    //this.setState({id: -1});
  }

  //pagina cu informatiile personale despre carti ale user-ului
  handleHomePage() {
    this.setState({login: 3});
    //console.log(this.state.login);
  }

  render() { 
    //randarea conditionata intre componente/pagini
    const renderAuthButton = ()=>{
      if(this.state.login === 2){
        //console.log(this.state.login);
        //stabilim id-ul user-ului care tocmai s-a logat
        this.handleAccount();
        return <div> <Page1 action = {this.handleLogOut} action1 = {this.handleHomePage} id = {this.state.id}/> </div>
      } else if(this.state.login === 0){
        return <div> <LogIn actionUser = {this.handleLogInUser} actionAdmin = {this.handleLogInAdmin} action = {this.handleLogOut} husername = {this.handleUsername}/> </div>
      } else if(this.state.login === 1){
        return <div> <Admin action = {this.handleLogOut} action1 = {this.handleInfo}/> </div>
      } else if(this.state.login === 3){
        return <div> <Home action = {this.handleLogInUser} id = {this.state.id} stop = {this.handleStop} stopv = {this.state.stop}
        titles={this.state.titles} change={this.handleTitles}/> </div>
      } else if(this.state.login === 4){
        return <div> <Info actionAdmin = {this.handleLogInAdmin}/> </div>
      }
    }

    return (
      <div className="App">
        {renderAuthButton()}
      </div>
    );
  }
}

export default App;
