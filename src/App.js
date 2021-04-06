import { useEffect, useState } from 'react';
import './App.css';
import AddText from './components/addText';
import Navbar from './components/navbar';
import Texts from './components/texts';
import firebaseDb from './firebase';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function App() {

  var [messageObject, setMessageObject] = useState({})
  // var [currentId, setcurrentId] = useState('')

  useEffect(() => {
    firebaseDb.child('messages').orderByKey().on('value', snapshop => {
        if(snapshop.val()!= null)
        setMessageObject({
            ...snapshop.val()
          
        })
        else
        setMessageObject({})
    })  

}, [])


  const add = obj => {
    // firebaseDb.child('messages').push(obj)

    firebaseDb.child('messages/' + uuidv4()).set({      
      date: obj.date,
      message: obj.message
    });
  } 

  const del = id => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        firebaseDb.child(`messages/${id}`).remove()
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <>
      <Navbar/>

      <div className="container mt-4">
        <AddText {...({add})} />
        <div className="my-5"></div>
        <Texts  {...({messageObject, del})} />
      </div>
    </>
  );
}

export default App;
