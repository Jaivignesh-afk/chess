import React from 'react';
import Checker from './Checker'




function Board(props){
    return <div className={props.className}>
        <Checker className="checker" class="grid-container"/>
    </div>
}
export default Board;