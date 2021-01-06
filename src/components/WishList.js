//AFISAREA CARTILOR DIN WISHLIST(cartile pe care user-ul si-ar dori sa le citeasca)
//ADAUGAREA CARTILOR DIN WISHLIST, IN LISTA CARTILOR ACTIVE(care se afla in curs de citire)
import React, { useState } from 'react';
import './API.js'
import {getWishList} from './API'
import {addBookToActiveBooks} from './API'
import {deleteBookFromWishList} from './API'

const List = (props) => {
    const titlesArr = []
    const idsArr = []
    const buttonsArr = []
    const call = props.com.map(({Title}) => Title);
    const call1 = props.com.map(({Id}) => Id);
    const finalArr = []

    function buttonsGenerate(){
        for (let i = 0; i < idsArr.length; i++) {
            var button = <button onClick = {() => handleClick(i)}>
                Add to ActiveList
            </button>
            buttonsArr.push(button);
        }
    }

    function final(){
        for (let i = 0; i < titlesArr.length; i++) {
            finalArr.push(titlesArr[i]);
            finalArr.push(buttonsArr[i]);
        }
    }

    function makeArr(){
        call.map(titlu => titlesArr.push(titlu))
        call1.map(id => idsArr.push(id))
    }

    function handleClick(index){
        for(let i = 0; i < idsArr.length; i++){
            if(i === index){
                addBookToActiveBooks(props.pr, idsArr[i])
                deleteBookFromWishList(props.pr, idsArr[i])
            }
        }
    }

    return(
        <div>
            {makeArr()}
            {buttonsGenerate()}
            {final()}
            {finalArr.map(item => <div>{item}</div>)}
        </div>
    );  
}
 
const WishList= (props) => {
    const [books, setBooks] = useState([])
    return(
        <div align = "center">
            <br />
            <br />
            <h4>My WishList:</h4> 
            {(() => {getWishList(props.id).then((res) => setBooks(res.data))})()}       
            <List com={books} pr = {props.id}/>
        </div>
    );
}

export default WishList;