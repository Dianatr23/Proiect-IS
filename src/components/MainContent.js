import React, { useState } from 'react';
import './API.js'
import {getAllComments} from './API'

const CommentsList = (props) => {
    const call = props.com.map(({Text}) => Text);
    return(
        <div>
            {call.map(coment => 
            <li>
              {coment}              
            </li>
          )}
        </div>
    );  
}

const MainContent = () => {
    const [comments, setComments] = useState([])
    return(
        <div>
            <br />
            <br />
            <button onClick={() => getAllComments().then((res) => setComments(res.data))}>
                Afiseaza comentariile!
            </button>
            <CommentsList com={comments}/>
        </div>
    );
}

export default MainContent;