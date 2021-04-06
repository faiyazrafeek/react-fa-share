import React from 'react'
import './texts.css'
import { Trash, Copy } from 'react-feather';
import copy from "copy-to-clipboard"; 
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


function Texts(props) { 
    const len = Object.keys(props.messageObject).map(id => id)

    if (len == 0) {                
        return <h4>No Data yet...</h4>        
    }

    const del  = (id) => {
        props.del(id)
    }

    const copytext  = (msg) => {
        copy(msg);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Text copied!',
            showConfirmButton: false,
            timer: 1200
        })
    }


    return (        
        <div className="card-container">
            {
            
            Object.keys(props.messageObject).map(id => 
                {
                    return(             
                        <div key={id} className="msg-item mb-2 py-3 px-2">                              
                            <div>{ props.messageObject[id].message } </div>
                            <div className="del">
                                <button onClick={() => {del(id)}}><Trash/></button>
                                <button onClick={() => {copytext(props.messageObject[id].message)}}><Copy/></button>                            
                            </div>
                        </div>
                    )
                }
            )
            }
        </div>
    )
}

export default Texts

