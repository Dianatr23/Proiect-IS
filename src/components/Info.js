//ADMINISTRATORUL POATE VEDEA DATELEAFLATE IN SISTE,
//vizionarea tuturor cartilor din sistem
//vizionarea tuturor user-ilor existenti
import React, { useState } from 'react';
import './API.js'
import {getAllBooks} from './API'
import {getAllUsers} from './API'
import {getAllComments} from './API'
import Img from './goback.png'

const ListBooks = (props) => {
    const call = props.com.map(({Title}) => Title);
    const call1 = props.com.map(({Id}) => Id);
    return(
        <div>
            <div>
                {call.map(titlu => 
                    <div>
                        <p>{titlu}</p>          
                    </div>
                )}
            </div>

            <div STYLE = "position:absolute; LEFT:600px ;TOP:92px">
                {call1.map(id => 
                    <div>
                        <p>{id}</p>          
                    </div>
                )}
           </div>
        </div>
    );  
}

const ListUsers = (props) => {
    const call = props.com.map(({Username}) => Username);
    const call1 = props.com.map(({Id}) => Id);
    return(
        <div>
            <div>
                {call.map(username => 
                    <div>
                         <p>{username}</p>          
                    </div>
                )}
            </div>

            <div STYLE = "position:absolute; LEFT:660px ;TOP:457px">
                {call1.map(id => 
                    <div>
                        <p>{id}</p>          
                    </div>
                )}
           </div>


        </div>
    );  
}

const ListComments = (props) => {
    const call = props.com.map(({Text}) => Text);
    const call1 = props.com.map(({Id}) => Id);
    return(
        <div>
          <div>
                {call.map(text => 
                    <div>
                        <p>{text}</p>          
                    </div>
                )}
          </div>

          <div STYLE = "position:absolute; LEFT:310px ;TOP:742px">
                {call1.map(id => 
                    <div>
                        <p>{id}</p>          
                    </div>
                )}
          </div>
        </div>
    );  
}

const Info = (props) => {
    const [books, setBooks] = useState([])
    const [users, setUsers] = useState([])
    const [comments, setComments] = useState([])
    return(
        <div align = "center">
            <nav class="navbar navbar-light bg-light">
                    <form class="form-inline">
                         <input type="Image" src={Img} width="40" height="40" onClick = {props.actionAdmin}/>
                    </form>
            </nav>
            <h4>All books:</h4>
            {(() => {getAllBooks().then((res) => setBooks(res.data))})()}           
            <ListBooks com={books}/>
            <br />
            <br />
            <h4>All users:</h4>
            {(() => {getAllUsers().then((res) => setUsers(res.data))})()}           
            <ListUsers com={users}/>
            <br />
            <br />
            <h4>All comments:</h4>
            {(() => {getAllComments().then((res) => setComments(res.data))})()}           
            <ListComments com={comments}/>
        </div>
    );
}

export default Info;