import React, { useEffect, useState} from 'react';
import {db} from './firebase-config'
import {collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore'
const App=() =>{
 const [users ,setUsers]=useState([])
 const[name ,setName]=useState('')
 const [isUpdate,setIsUpdate]=useState(false)
 const [updateUser,setUpdateUser]=useState({name:'',id:0})
 const [visible,setVisible]=useState(false)
const userColloectionRef=collection(db,"Users")
  useEffect(()=>{
    const getUsers=async()=>{
      try{
        setVisible(false)
        const data= await getDocs(userColloectionRef)
        setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id })))
      }catch(e){
        console.log(e)
      }
     
    }
    getUsers()
  },[isUpdate])
  const createUser= async()=>{
   try{
    setName('')
     await addDoc(userColloectionRef,{name})
     setIsUpdate(true)
   }catch(e){
     console.log(e)
   }
  }
  const handleDelete=async(id)=>{
    try{
      const userDocs= doc(db,"Users",id)
      await deleteDoc(userDocs)
      setIsUpdate(true)

    }catch(e){
      console.log(e)
    }
  }
  const handleDisplayModel= async(user)=>{
    setVisible(true)
    setUpdateUser({name:user.name,id:user.id})
  }
  const handleUpdate =async()=>{
       try{
      const userDocs=doc(db,"Users",updateUser.id)
      await updateDoc(userDocs,{name:updateUser.name})
      setIsUpdate(true)
    }catch(e){
      console.log(e,'error')
    }
  }
  return (  
    <div>
      <input placeholder='Name ...' value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={()=>createUser()}>Create User</button>
    {users.map((user)=>{  
  return (   
    <div  key={user.id}>
      <p>{user.name}</p>
      <button onClick={()=>handleDelete(user.id)}>Delete</button>
      <button onClick={()=>handleDisplayModel(user)}>Edit</button>
      </div>
      )})}
     <div className='modle'>
       {visible? <>
        <input value={updateUser.name} onChange={(e)=>setUpdateUser({...updateUser,name:e.target.value})}/>
        <button onClick={()=>handleUpdate()}>close</button>
       </>:null}
    
    </div>
    </div>

  );
}

export default App;