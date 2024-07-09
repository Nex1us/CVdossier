import React, { useState } from 'react'
import AdminContact from '../composants/admin/AdminContact'
import AdminCompetence from '../composants/admin/AdminCompetence'
import AdminLoisir from '../composants/admin/AdminLoisir'
import AdminLangue from '../composants/admin/AdminLangue'
import Login from './Login'
import AdminFormations from '../composants/admin/AdminFormations'


export default function Admin() {
  const [islog, setislog] = useState(false)
  const[username, setUsername] = useState('')
  const [password, setPassword] = useState('')


function handleSubmit(e) {
  e.preventDefault()
  console.log(username,password);
  if (username ==="anth" && password ==="anth") {
    setislog(true)
  } else {
    alert('les identifiants sont incorrects')
  }
} 

  if (islog === false) { // ou !islog
    return(
      <Login  
      setUsername={(e)=> setUsername(e.target.value)} 
      setPassword={(e)=> setPassword(e.target.value)} 
      handleSubmit={handleSubmit}/>
    )
  }
  return (
    <div>
<button><a href="/">Accueil</a></button>
      <AdminContact />
      <AdminCompetence/>
      <AdminLoisir />
      <AdminLangue />
        <AdminFormations/>

    </div>

  )
}
