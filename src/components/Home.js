//PAGINA "ACASA"
//pagina este randata dupa ce user-ul da click pe butonul "Home" 
//contul user-ului
import React from "react"
import WishList from "./WishList"
import ReadBooks from "./ReadBooks"
import ActiveBooks from "./ActiveBooks"
import RecommendedBooks from "./RecommendedBooks"
import Img from './goback.png'

const Home = (props) => {
        return(
            <span>
                <nav class="navbar navbar-light bg-light">
                    <form class="form-inline">
                         <input type="Image" src={Img} width="40" height="40" onClick = {props.action}/>
                    </form>
                </nav>

                <div align = "center">
                    <h3>My Home Page</h3>
                    <WishList id = {props.id} />
                    <ReadBooks id = {props.id} />
                    <ActiveBooks id = {props.id} />
                    <RecommendedBooks id = {props.id} stop = {props.stop} stopv = {props.stopv} titles={props.titles} change={props.change}/>
                </div>
        </span>
        );
}

export default Home;