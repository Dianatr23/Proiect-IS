//the page rendered after user log in
import React from "react"
import Header1 from "./Header1"
import SearchBox from "./SearchBox"
import ViewAllBooks from "./ViewAllBooks"

class Page1 extends React.Component {

    render(){
        return(
            <div>
                <Header1 action = {this.props.action} action1 = {this.props.action1}/>
                <SearchBox id = {this.props.id}/>
                <ViewAllBooks id = {this.props.id}/>
            </div>
        );
    }
}

export default Page1;