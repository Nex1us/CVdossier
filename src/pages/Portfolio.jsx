import React from 'react'

export default function Portfolio() {
  return (


  <div className='flex flex-wrap justify-start flex-row bg-white text-black h-screen w-screen'>
  <header className='flex flex-row justify-between bg-emerald-700'>
    <button className=' flex  '>
<a href="/">Home</a> </button>
<button className=' flex  '>
<a href="/Admin">Admin</a> </button>
  </header>
<div className='flex justify-center'>
    <div className='w-3/6'>
       <img src="meteo.png" alt="" />
  <h2><a href="http://localhost:6600/">Lien vers le site</a></h2>
  <h2><a href="">Lien vers GitHub</a></h2>
  </div>

<div className='w-3/6' >
 <img src="siteOutDoor.png" alt="" />
  <h2><a href="https://nex1us.github.io/devoir/">Lien vers le site</a></h2>
  <h2><a href="https://github.com/Nex1us/devoir">Lien vers GitHub</a></h2>
</div>
</div>

</div>


 
  )
}
