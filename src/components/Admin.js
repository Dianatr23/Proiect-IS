//INTERFATA ADMINULUI DUPA LOGIN

import React, {useState} from 'react';
import './API.js'
import {addBook} from './API'
import {deleteBook} from './API'
import {addUser} from './API'
import {deleteUser} from './API'
import {deleteComment} from './API'
import {updateTitle} from './API'
import {updateAuthor} from './API'
import {updateYear} from './API'
import {updatePubHouse} from './API'

const Admin = (props) => {
    //datele pe care adminul trebuie sa le introduca pentru a adauga o noua carte in sistem
    const [title, setTitle] = useState('')
    const [id, setId] = useState()
    const [author, setAuthor] = useState('')
    const [year, setYear] = useState()
    const [pubHouse, setPubHouse] = useState('')
    const [description, setDescription] = useState("")
    //datele pe care adminul trebuie sa le introduca pentru a sterge o carte din sistem
    const [idd, setIdd] = useState()
    //datele pe care adminul trebuie sa le introduca pentru a adauga un nou user
    const [idUser, setIdUser] = useState()
    const [isAdmin, setIsAdmin] = useState()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //datele pe care adminul trebuie sa le introduca pentru a sterge un user din sistem
    const [idUserd, setIdUserd] = useState()
    //datele pe care adminul trebuie sa le introduca pentru a sterge un comentariu existent 
    const [idComment, setidComment] = useState()
    //datele pe care adminul trebuie sa le introduca pentru a modifica titlul unei carti
    const [idTitle, setIdTitle] = useState()
    const [newTitle, setNewTitle] = useState('')
    //datele pe care adminul trebuie sa le introduca pentru a modifica autorul unei carti
    const [idAuthor, setIdAuthor] = useState()
    const [newAuthor, setNewAuthor] = useState('')
    //datele pe care adminul trebuie sa le introduca pentru a modifica anul aparitiei unei carti
    const [idYear, setIdYear] = useState()
    const [newYear, setNewYear] = useState('')
    //datele pe care adminul trebuie sa le introduca pentru a modifica editura unei carti
    const [idPh, setIdPh] = useState()
    const [newPh, setNewPh] = useState('')
    return(
        <span>
            <nav class="navbar navbar-light bg-light">
                <form class="form-inline">
                    <button class="btn btn-sm btn-outline-secondary" type="button" onClick = {props.action}>Sign out</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button" onClick = {props.action1}>Info</button>
                </form>
            </nav>

            <div align = "center">
               <h3>Welcome, Admin!</h3>
            </div>

            <input 
                  STYLE="position:absolute; TOP:188px; LEFT:430px"
                  type = "text"
                  placeholder="Id" 
                  value={idd}
                  onChange={(e) => {
                  setIdd(e.target.value)
           }}/>

           <button
                type="button" class="btn btn-outline-danger" 
                STYLE="position:absolute; TOP:230px; LEFT:430px"
                onClick =  {() => {deleteBook(idd); console.log("Clicked")}}
           >
                Delete Book
           </button> 

           <input 
                  STYLE="position:absolute; TOP:430px; LEFT:1030px"
                  type = "text"
                  placeholder="Id" 
                  value={idTitle}
                  onChange={(e) => {
                  setIdTitle(e.target.value)
           }}/>

           <input 
                  STYLE="position:absolute; TOP:460px; LEFT:1030px"
                  type = "text"
                  placeholder="New Title" 
                  value={newTitle}
                  onChange={(e) => {
                  setNewTitle(e.target.value)
           }}/>

           <button
                type="button" class="btn btn-outline-secondary" 
                STYLE="position:absolute; TOP:500px; LEFT:1030px"
                onClick =  {() => {updateTitle(idTitle, newTitle); console.log("Clicked")}}
           >
               Update Title
           </button> 

           <input 
                  STYLE="position:absolute; TOP:188px; LEFT:1150px"
                  type = "text"
                  placeholder="Id" 
                  value={idComment}
                  onChange={(e) => {
                  setidComment(e.target.value)
           }}/>

           <button
                type="button" class="btn btn-outline-danger" 
                STYLE="position:absolute; TOP:230px; LEFT:1150px"
                onClick =  {() => {deleteComment(idComment); console.log("Clicked")}}
           >
                Delete Comment
           </button> 

           <input 
                  STYLE="position:absolute; TOP:188px; LEFT:910px"
                  type = "text"
                  placeholder="Id" 
                  value={idUserd}
                  onChange={(e) => {
                  setIdUserd(e.target.value)
           }}/>

           <button
                type="button" class="btn btn-outline-danger" 
                STYLE="position:absolute; TOP:230px; LEFT:910px"
                onClick =  {() => {deleteUser(idUserd); console.log("Clicked")}}
           >
                Delete User
           </button> 

       
           <input 
                  STYLE="position:absolute; TOP:188px; LEFT:670px"
                  type = "text"
                  placeholder="IsAdmin" 
                  value={isAdmin}
                  onChange={(e) => {
                  setIsAdmin(e.target.value)
           }}/>
           <input 
                  STYLE="position:absolute; TOP:218px; LEFT:670px"
                  type = "text"
                  placeholder="Username" 
                  value={username}
                  onChange={(e) => {
                  setUsername(e.target.value)
           }}/>
           <input 
                  STYLE="position:absolute; TOP:248px; LEFT:670px"
                  type = "text"
                  placeholder="Passweord" 
                  value={password}
                  onChange={(e) => {
                  setPassword(e.target.value)
           }}/>
           <button
                   STYLE="position:absolute; TOP:290px; LEFT:670px"
                   type="button" class="btn btn-outline-secondary" 
                   onClick = {() => {addUser(isAdmin, username,password); console.log("Clicked")}}
           >
                Add User
           </button>

            <input
                  STYLE="position:absolute; TOP:188px; LEFT:190px" 
                  type = "text"
                  placeholder="Title" 
                  value={title}
                  onChange={(e) => {
                  setTitle(e.target.value)
           }}/>
            <input
                  STYLE="position:absolute; TOP:218px; LEFT:190px" 
                  type = "text"
                  placeholder="Year" 
                  value={year}
                  onChange={(e) => {
                  setYear(e.target.value)
           }}/>
           <input 
                  STYLE="position:absolute; TOP:248px; LEFT:190px"
                  type = "text"
                  placeholder="Author" 
                  value={author}
                  onChange={(e) => {
                  setAuthor(e.target.value)
           }}/>
           <input 
                  STYLE="position:absolute; TOP:278px; LEFT:190px"
                  type = "text"
                  placeholder="Publishing House" 
                  value={pubHouse}
                  onChange={(e) => {
                  setPubHouse(e.target.value)
           }}/>
           <input 
                  STYLE="position:absolute; TOP:308px; LEFT:190px"
                  type = "text"
                  placeholder="Short Description" 
                  value={description}
                  onChange={(e) => {
                  setDescription(e.target.value)
           }}/>
           <button
               STYLE="position:absolute; TOP:350px; LEFT:190px"
              type="button" class="btn btn-outline-secondary" 
              onClick = {() => {addBook(title, author, year, pubHouse, description); console.log("Clicked")}}>
              Add Book
           </button>

           <input 
                  STYLE="position:absolute; TOP:430px; LEFT:300px"
                  type = "text"
                  placeholder="Id" 
                  value={idAuthor}
                  onChange={(e) => {
                  setIdAuthor(e.target.value)
           }}/>
           <input 
                  STYLE="position:absolute; TOP:460px; LEFT:300px"
                  type = "text"
                  placeholder="New Author" 
                  value={newAuthor}
                  onChange={(e) => {
                  setNewAuthor(e.target.value)
           }}/>
           <button
              STYLE="position:absolute; TOP:500px; LEFT:300px"
              type="button" class="btn btn-outline-secondary" 
              onClick = {() => {updateAuthor(idAuthor, newAuthor); console.log("Clicked")}}>
              Update Author
           </button>

           <input 
                  STYLE="position:absolute; TOP:430px; LEFT:550px"
                  type = "text"
                  placeholder="Id" 
                  value={idYear}
                  onChange={(e) => {
                  setIdYear(e.target.value)
           }}/>
           <input 
                  STYLE="position:absolute; TOP:460px; LEFT:550px"
                  type = "text"
                  placeholder="New Year" 
                  value={newYear}
                  onChange={(e) => {
                  setNewYear(e.target.value)
           }}/>
           <button
                type="button" class="btn btn-outline-secondary" 
                STYLE="position:absolute; TOP:500px; LEFT:550px"
                onClick =  {() => {updateYear(idYear, newYear); console.log("Clicked")}}
           >
                Update Year
           </button> 

           <input 
                  STYLE="position:absolute; TOP:430px; LEFT:790px"
                  type = "text"
                  placeholder="Id" 
                  value={idPh}
                  onChange={(e) => {
                  setIdPh(e.target.value)
           }}/>
           <input 
                  STYLE="position:absolute; TOP:460px; LEFT:790px"
                  type = "text"
                  placeholder="New PublishingHouse" 
                  value={newPh}
                  onChange={(e) => {
                  setNewPh(e.target.value)
           }}/>
           <button
                type="button" class="btn btn-outline-secondary" 
                STYLE="position:absolute; TOP:500px; LEFT:790px"
                onClick =  {() => {updatePubHouse(idPh, newPh); console.log("Clicked")}}
           >
                Update PublishingHouse
           </button>
    
        </span>
    );
}

export default Admin;