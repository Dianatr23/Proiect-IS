//the header of the page where user can search for books and see the books the system recommend
import React, {Component} from "react" 
import Img from './user.png'

class Header1 extends Component{
    render(){
        return(
            <span>
            <nav class="navbar navbar-light bg-light">
                <form class="form-inline">
                    <button class="btn btn-sm btn-outline-secondary" type="button" onClick = {this.props.action1}>My page</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button" onClick = {this.props.action}>Sign out</button>
                </form>
            </nav>
            <div align = "center">
               <h3>Welcome, user!</h3>
               <img src={Img} alt="User's Icon" width="120" height="120"/>
            </div>
            </span>
        )
    }
}

export default Header1;