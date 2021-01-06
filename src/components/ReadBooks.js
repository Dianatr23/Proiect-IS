//AFISAREA CARTILOR CITITE DEJA DE USER
import React, { useState } from 'react';
import './API.js'
import {getReadBooks} from './API'
import {addRating} from './API'

const List = (props) => {
    const titlesArr = []
    const idsArr =[]
    const finalArr = []
    const call = props.com.map(({Title}) => Title);
    const call1 = props.com.map(({Id}) => Id);
    const buttonsArr = []

    
    function buttonsGenerate(){
        //j for index, i for rating value
        //fac cate 5 butoane cu acelasi id, dar cu valori deiferite
        for(let j = 0; j < titlesArr.length; j++){
            for (let i = 1; i < 6; i++) {
                 var button = <button onClick = {() => handleClick(j, i)}>
                                    {i}
                              </button> 
                buttonsArr.push(button);
            }
        }
    }
    
    function handleClick(index, rating){
        for(let i = 0; i < idsArr.length; i++){
            if(i === index){
                console.log("user: " + props.pr);
                console.log("book_id: " + idsArr[i]);
                console.log("rating: " + rating);
                addRating(props.pr, idsArr[i], rating);
            }
        }
    }

    function makeArr(){
        call.map(titlu => titlesArr.push(titlu));
        call1.map(id => idsArr.push(id));
    }

    function final(){
        for(let i = 0; i<titlesArr.length; i++){
            finalArr.push(titlesArr[i]);
            finalArr.push(buttonsArr[i*5]);
            finalArr.push(buttonsArr[i*5+1]);
            finalArr.push(buttonsArr[i*5+2]);
            finalArr.push(buttonsArr[i*5+3]);
            finalArr.push(buttonsArr[i*5+4]);
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
            {buttonsGenerate()}
            {final()}
            {finalArr.map(item => handleItem(item))} 
        </div>
    );  
}

const ReadBooks= (props) => {
    const [books, setBooks] = useState([])
    return(
        <div align = "center">
            <br />
            <br />
            <h4>The books I have already read:</h4>
            {(() => {getReadBooks(props.id).then((res) => setBooks(res.data))})()}           
            <List com = {books} pr = {props.id}/>
        </div>
    );
}

export default ReadBooks;