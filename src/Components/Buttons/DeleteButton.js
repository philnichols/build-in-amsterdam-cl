import React from 'react'
import Axios from 'axios';


export default function Delete(props){
    return(
    <div>
        <button onClick={Axios.delete(`/deletecase/${props.id}`).then(res => console.log(res))}>Delete</button>
    </div>
    )
}