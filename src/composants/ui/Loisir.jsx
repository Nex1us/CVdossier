import React, { useEffect, useState } from 'react'

export default function Loisir() {
    const [hobby, setHobby] = useState([]);
    
    async function fetchLoisir() {
        const response = await fetch('http://localhost:3333/loisir')
        const data = await response.json()
        setHobby(data)
        console.log(data);
    }
    useEffect(() => {
        fetchLoisir();
    }, [])


return (
    <div>
        <h2 className="bg-green-400 rounded-xl">LOISIR</h2>
        <ul>{hobby.map(item => (<li key={item._id}>{item.loisir}</li>))}
        </ul>
    </div>
)
}
