//AFISAREA TUTUROR CARTILOR DIN INTREGUL SISTEM
import React, { useState } from 'react';
import './API.js'
import {getAllBooks, addBookToActiveBooks, addBookToWishList} from './API'

const Books = (props) => {
    const titlesArr = []
    const idsArr = []
    const buttonsWish = []
    const buttonsActive = []
    const call = props.com.map(({Title}) => Title);
    const call1 = props.com.map(({Id}) => Id);
    const finalArr = []

    function handleClickActive(index){
        for(let i = 0; i < idsArr.length; i++){
            if(i === index){
                addBookToActiveBooks(props.pr, idsArr[i])
            }
        }
    }

    function handleClickWish(index){
        for(let i = 0; i < idsArr.length; i++){
            if(i === index){
                addBookToWishList(props.pr, idsArr[i])
            }
        }
    }

    function wishGenerate(){
        for (let i = 0; i < idsArr.length; i++) {
            var button = <button onClick = {() => handleClickWish(i)}>
                Add to WishList
            </button>
            buttonsWish.push(button);
        }
    } 

    function activeGenerate(){
        for (let i = 0; i < idsArr.length; i++) {
            var button = <button onClick = {() => handleClickActive(i)}>
                Add to ActiveList
            </button>
            buttonsActive.push(button);
        }
    }

    function makeArr(){
        call.map(titlu => titlesArr.push(titlu))
        call1.map(id => idsArr.push(id))
    }

    function final(){
        for (let i = 0; i < idsArr.length; i++) {
            finalArr.push(titlesArr[i]);
            finalArr.push(buttonsWish[i]);
            finalArr.push(buttonsActive[i]);
        }
    }

    function handleItem(item){
        if(typeof item === "string"){
            return <div>{item}</div>
        }else{
            return <div STYLE = "display: inline-block">{item}</div>
        }
    }
    

    return(
        <div>
           {makeArr()}
           {wishGenerate()}
           {activeGenerate()}
           {final()}
           {finalArr.map(item => handleItem(item))}
           
        </div>
    );  
}

const ViewAllBooks = (props) => {
    const [books, setBooks] = useState([])
    return(
        <div align = "center">
            <br />
            <br />
            <h4>All the Books:</h4>
            {(() => {getAllBooks().then((res) => setBooks(res.data))})()}  
            <Books  com = {books} pr = {props.id}/>
        </div>
    );
}

export default ViewAllBooks;
