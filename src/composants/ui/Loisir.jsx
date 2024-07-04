import React, { useEffect, useState } from 'react'

export default function Loisir() {
    const  [loisir, setLoisir] = useState([])
    async function fetchLoisir() {
        const response = await fetch('http://localhost:3333/loisir')
        const data = await response.json()
        setLoisir(data)
        console.log(data);
    }
    useEffect(() => {
        fetchLoisir();
    }, [])


return (
    <div>
        <h2>LOISIR</h2>
        <ul>{loisir.map(item => (<li key={item._id}>{item.loisir}</li>))}
        </ul>
    </div>
)
}
