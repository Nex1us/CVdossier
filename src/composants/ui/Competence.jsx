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
    <div className='rounded-xl  border-5'>
      <h2 className="bg-green-950 rounded-xl" >COMPETENCES</h2>
      <table>
    <tbody>
      {competence.map((item) => (
<tr>
  <td> {item.skill} </td>

</tr>
      ))}
          </tbody>
        
      </table>
    </div>
  )
}
