//PARTEA 1 - BARA DE CAUTARE
//where user can search for any book in the system
//where he can see the books that tha system recommend

import React, {useState} from 'react';
import './API.js'
import {search} from './API'
import {addBookToWishList} from './API'
import {addBookToActiveBooks} from './API'

const BooksList = (props) => {
    const wishButttons = []
    const activeButtons = []
    const idsArr = []
    const titlesArr =[]
    const call = props.books.map(({Title}) => Title);
    const call1 = props.books.map(({Id}) => Id);
    const finalArr = []

    function buttonWishGenerate(){
        for (let i = 0; i < idsArr.length; i++) {
            var button = <button onClick = {() => handleClick1(i)}>
                Add to WishList
            </button>
            wishButttons.push(button);
        }
    } 

    function buttonActiveGenerate(){
        for (let i = 0; i < idsArr.length; i++) {
            var button = <button onClick = {() => handleClick2(i)}>
                Add to ActiveList
            </button>
            activeButtons.push(button);
        }
    }

    function handleClick2(index){
        for(let i = 0; i < idsArr.length; i++){
            if(i === index){
                addBookToActiveBooks(props.pr, idsArr[i])
            }
        }
    }

    function makeArr(){
        call.map(titlu => titlesArr.push(titlu))
        call1.map(id => idsArr.push(id))
    }

    function handleClick1(index){
        for(let i = 0; i < idsArr.length; i++){
            if(i === index){
                addBookToWishList(props.pr, idsArr[i])
            }
        }
    }
    
    function final(){
        for (let i = 0; i < titlesArr.length; i++) {
            finalArr.push(titlesArr[i]);
            finalArr.push(wishButttons[i]);
            finalArr.push(activeButtons[i]);
        }
    }

    return(
        <div>
            {makeArr()}
            {buttonActiveGenerate()}
            {buttonWishGenerate()}
            {final()}
            {finalArr.map(item => <div>{item}</div>)}
        </div>
    );  
}

const SearchBox = (props) => {
    const [term, setTerm] = useState('')
    const [books, setBooks] = useState([])
    return (
        <div align = "center">
        <br />
        <br />
        <input 
           type = "text"
           placeholder="Search..." 
           value={term}
           onChange={(e) => {
                 setTerm(e.target.value)
           }}/>
       <button  onClick={() => search(term).then((res) => setBooks(res.data))}>
           Search
       </button>
       <br />
       <BooksList books={books} pr={props.id}/>
       </div>
    )
}  

export default SearchBox;