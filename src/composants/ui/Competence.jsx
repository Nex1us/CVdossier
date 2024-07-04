import React, { useEffect, useState } from 'react'

export default function Competence() {
  const [competence, setCompetence] = useState([])
    async function fetchCompetence() {
        const response = await fetch('http://localhost:3333/competence')
        const data = await response.json()
        setCompetence(data)
        console.log(data);

    }

    useEffect(() =>{
      fetchCompetence();
    },[])
  return (
    <div>
      <h2 className="bg-blue-500 rounded-xl" >COMPETENCES</h2>
      <ul>
        {competence.map(item => <li key={item._id}>{item.skill}</li>)}
      </ul>
    </div>
  )
}
