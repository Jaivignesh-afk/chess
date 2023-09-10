import React from 'react'
import Board from './Board';

function Background(props){
    return (
        <div className={props.className}>
            <Board className={props.class}/>
        </div>
    );
}

export default Background;