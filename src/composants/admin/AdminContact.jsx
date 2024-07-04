
import React, { useEffect, useState } from 'react'

export default function AdminContact() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [adresse, setAdresse] = useState('')
    const style = {
        color: 'black',
        padding: '10px'
    }
    const pad = {
        padding: '10px'
    }
    async function fetchContact() {
        const response = await fetch('http://localhost:3333/contact')
        const data = await response.json()
        console.log(data);
        setNom(data[0].nom)
        setPrenom(data[0].prenom)
        setTel(data[0].tel)
        setEmail(data[0].email)
        setAdresse(data[0].adresse)
    }
    useEffect(() => {
fetchContact()
    },[])
    function handleSubmit(event) {
        event.preventDefault()
console.log(tel,email,adresse);
fetch('http://localhost:3333/contact', {
    method:'POST',
    headers:{
"Content-type":"application/json"
    },
    body: JSON.stringify({nom, prenom, tel, email, adresse}) 
})
.then(response => response.json())
.then(data => console.log(data))
    }
  return (
    <form onSubmit={handleSubmit}> 
        <div>
<label style={pad} htmlFor="">Tel</label>
        <input style={style}  value={tel} onChange={(e) => setTel(e.target.value)} type="text" name='Tel' />
        </div>
        <div>
<label style={pad} htmlFor="">Email</label>
        <input style={style} value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        </div>
        <div>
<label style={pad} htmlFor="">Adresse</label>
        <input style={style} value={adresse} onChange={(e) => setAdresse(e.target.value)} type="text" />
        </div>
        <button>Valider</button>
    </form>
  )
}

