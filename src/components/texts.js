import React from 'react'
import './texts.css'
import { Clipboard } from 'react-feather';


function Texts(message) {
    const messages = Object.keys(message.message).map(id =>  message.message[id] )

    if (messages.length === 0) {
        return <h4>No Data yet...</h4>
    }

    return (        
        <div className="card-container">
            {messages.map((msg, id) => 
                {
                    return(             
                        <div key={id} className="card mb-3">                               
                            <div> <button><Clipboard/></button> </div>
                            <div className="card-body"> { msg.message } </div>
                        </div>
                    )
                }
            )}
        </div>
    )
}

export default Texts

