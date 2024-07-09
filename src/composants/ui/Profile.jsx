import React from 'react'


export default function Profile({nom,prenom}) {
    const taille = {
        width:'400px',
        height:'400px'
    }
  return (
    <div >
        <img style={taille} src='avatar.jpg' alt="" />
        <h2>{nom} {prenom}</h2>
    </div>
  )
}
