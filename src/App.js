import { useEffect, useState } from 'react';
import './App.css';
import AddText from './components/addText';
import Navbar from './components/navbar';
import Texts from './components/texts';
import firebaseDb from './firebase';
import { v4 as uuidv4 } from 'uuid';

function App() {

  var [messageObject, setMessageObject] = useState({})
  var [currentId, setcurrentId] = useState('')

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

  return (
    <>
      <Navbar/>

      <div className="container mt-4">
        <AddText {...({add})} />
        <div className="my-5"></div>
        <Texts message={messageObject} />
      </div>
    </>
  );
}

export default App;
