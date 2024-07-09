import React from 'react'

export default function Portfolio() {
  return (
<div className='flex justify-start flex-col'>
<button className=' flex flex-col  '>
<a href="/Admin">Admin</a> </button>
<button className=' flex flex-col  '>
<a href="/home">Home</a> </button>
  <div className='w-60'>
      <span><img src="meteo.png" alt="" /></span>
  <h2><a href="http://localhost:6600/">Lien vers le site</a></h2>
  <h2><a href="">Lien vers GitHub</a></h2>
  </div>

  </div>
  )
}
