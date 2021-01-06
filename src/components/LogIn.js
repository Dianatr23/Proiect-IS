//login page for user and admin
import React, {useState} from "react"
import './API.js'
import {logIn} from './API'

const LogIn = (props) =>{
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')

        function logging(res){
            if(res === 0){
                props.husername(username);
                props.actionUser();
            }else if(res === 1){
                props.actionAdmin();
            }else{
                props.action();
            }
        }

        return(
            <div className = "text-center">      
               <form className = "form-signin">
                    <img width="224" height="224" src="https://www.flaticon.com/premium-icon/icons/svg/2847/2847689.svg" alt="Books premium icon" title="Books premium icon" class="loaded"/>

                    <br/>
                    <br/>
                    <br/>

                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                    <label for="inputUsername" className="sr-only">
                        Username
                    </label>
                    <input type="username" id="inputUsername" value = {username}  placeholder="Username" required autoFocus onChange={({ target }) => setUsername(target.value)}></input>

                    <br/> 

                    <label for="inputPassword" className="sr-only">
                        Password
                    </label>
                    <input type="password" id="inputPassword" value = {password} placeholder="Password" required onChange={({ target }) => setPassword(target.value)}></input>

                    <br/>
                    <br/>
        
                    <button class="btn btn-outline-primary" type="button" onClick={() => logIn(username, password).then((res) => logging(res.data))}>
                        Sign in
                    </button>
               </form> 
            </div>
        )
}

export default LogIn;