//AFISAREA CARTILOR RECOMANDATE
//aici user-ul poate cauta orice carte din sistem dupa un cuvant cheie crae se afla in titlul cartii
//aici poate vedea lista cartilor recomandate
//poate adauga cartile recomandate la lista sa de carti aflate in curs de citire si la lista de carti pe care si-ar dori sa le citeasca

import React, { useState } from 'react';
import './API.js'
import {getRecommandationNames} from './API'

//de afisat butoanele de ad doar cand se face hover peste titlu
const RecommendedBooksList = (props) => {
    //const t = []
    //const [t, setT] = useState(props.com1)
    
    //generam o singura data recomandare
    function condition(){
        console.log(props.stopv)
        if(props.com1.length > 0 && props.stopv === 0){
            props.stop();
            props.change(props.com1);
            //for(let i = 0; i<props.com1.length; i++){
                //titlesArr.push(props.com1[i])
            //}
            //t = props.com1.map((titlu) => titlu)
        }
    }

    return(
        <div>
           {condition()}
           {props.titles.map((titlu) => <div>{titlu}</div>)}
           {console.log(props.titles)}
                   </div>
    );  
}

const ViewAllBooks = (props) => {
    const [books, setBooks] = useState([])
    return(
        <div align = "center">
            <br />
            <br />
            <h4>Books that we recommend for you:</h4>
            {(() => {getRecommandationNames(props.id).then((res) => setBooks(res.data))})()}  
            <RecommendedBooksList  com1 = {books} pr = {props.id} stop = {props.stop} stopv = {props.stopv} titles={props.titles} change = {props.change}/>
        </div>
    );
}

export default ViewAllBooks;
