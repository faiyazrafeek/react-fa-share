import React, { useState } from 'react'
import './addText.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function AddText(props) {
    const initValue = {
        message: '',
        date: Math.floor(Date.now() / 1000),
    } 

    const [text, setText] = useState(initValue);

    const handleInputChange = e => {
        var { name, value} = e.target
        setText({
            ...text,
            [name]: value
        })
    }


    const postText = (e) => {
        text.message === '' ? 
        MySwal.fire({ 
            title: 'Empty Field!',
            icon: 'warning',
            confirmButtonText: 'Ok'
        }) 
        : 
        props.add(text)
        setText(initValue);      
    }  

    return (
        <>
            <div>               
                <textarea 
                    name="message"
                    className="form-control textarea"
                    placeholder="Add text here..."     
                    value={text.message}           
                    onChange={handleInputChange}
                />
            </div>           
            <div className="mt-3">
                <button type="submit"  className="btn btn-dark" onClick={postText}>Submit</button>
            </div>
        </>
    )
}

export default AddText
