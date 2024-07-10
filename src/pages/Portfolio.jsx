import React from 'react'

export default function Portfolio() {
  return (


  <div className='flex flex-wrap justify-start flex-row bg-white'>
  <div className='flex flex-col'>
    <button className=' flex flex-col  '>
<a href="/">Home</a> </button>
<button className=' flex flex-col  '>
<a href="/Admin">Admin</a> </button>
  </div>

  <div className='w-32'>
       <img src="meteo.png" alt="" />
  <h2><a href="http://localhost:6600/">Lien vers le site</a></h2>
  <h2><a href="">Lien vers GitHub</a></h2>
  </div>

<div className='w-32' >
 <img src="siteOutDoor.png" alt="" />
  <h2><a href="https://nex1us.github.io/devoir/">Lien vers le site</a></h2>
  <h2><a href="https://github.com/Nex1us/devoir">Lien vers GitHub</a></h2>
</div>
</div>


 
  )
}
