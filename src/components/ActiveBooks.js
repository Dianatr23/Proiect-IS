//AFISAREA CARTILOR ACTIVE(in curs de citire)
//ADAUGAREA CARTILOR DIN LISTA DE ACTIVE(dupa ce user-ul a terminat de citit cartea respectiva), IN LISTA CARTILOR CARE AU FOST DEJA CITITE
import React, {useState} from 'react';
import './API.js'
import {getActiveBooks} from './API'
import {addBookToReadBooks} from './API'
import {deleteBookFromActiveBooks} from './API'

const ActiveList = (props) => {
    const titlesArr = []
    const idsArr = []
    const buttonsArr = []
    const call = props.com.map(({Title}) => Title);
    const call1 = props.com.map(({Id}) => Id);
    const finalArr = []

    function buttonsGenerate(){
        for (let i = 0; i < idsArr.length; i++) {
            var button = <button onClick = {() => handleClick(i)}>
                Add to ReadList
            </button>
            buttonsArr.push(button);
        }
    } 

    function makeArr(){
        call.map(titlu => titlesArr.push(titlu))
        call1.map(id => idsArr.push(id))
    }

    function handleClick(index){
        for(let i = 0; i < idsArr.length; i++){
            if(i === index){
                addBookToReadBooks(props.pr, idsArr[i])
                deleteBookFromActiveBooks(props.pr, idsArr[i])
            }
        }
    }

    function final(){
        for (let i = 0; i < titlesArr.length; i++) {
            finalArr.push(titlesArr[i]);
            finalArr.push(buttonsArr[i]);
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

const ActiveBooks = (props) => {
    const [books, setBooks] = useState([])
    return(
        <div align = "center">
            <br />
            <br />
            <h4>Now I'm reading:</h4>
            {(() => {getActiveBooks(props.id).then((res) => setBooks(res.data))})()}           
            <ActiveList com={books} pr = {props.id}/>
        </div>
    );
}

export default ActiveBooks;