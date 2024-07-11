import React from 'react'

import Contact from '../composants/ui/Contact.jsx'
import Competence from '../composants/ui/Competence.jsx'
import Loisir from '../composants/ui/Loisir.jsx'
import Langue from '../composants/ui/Langue.jsx'
import Formations from '../composants/ui/Formations.jsx'

export default function Home() {

  return (
<div className='p-12  bg-white flex flex-wrap flex-col '>
<header className='bg-emerald-700'>
<div>
    <button className=' flex flex-col text-black '>
  <a href="/Admin">Admin</a> </button>
  <button className=' flex flex-col text-black '>
  <a href="/Portfolio">Portfolio</a> </button>
  </div>
</header>


  <div className='flex text-black  justify-between p-12 border-spacing-2 rounded-xl border-5 bg-blue-500 shadow-blue-800 shadow-2xl w-6/6 '>
<Contact/>

  </div>
  <div className=' text-black flex flex-wrap justify-center  space-x-36 border-spacing-2 rounded-xl bg-blue-500 shadow-blue-800 shadow-2xl mt-12 w-6/6'>
  <div  className='  justify-between p-12 border-spacing-2 rounded-xl border-5 '> 
<Competence />

  </div>
  <div className='flex-wrap text-black justify-between p-12 border-spacing-2 rounded-xl border-5'>
    <Langue />
  </div>
  <div className='flex-wrap text-black justify-between p-12 border-spacing-2 rounded-xl border-5 '>
    <Loisir/>
  </div>
  </div>
  <div className='flex text-black  justify-between p-12 border-spacing-2 rounded-xl border-5 bg-blue-500 shadow-blue-800 shadow-2xl mt-12 w-6/6'>
  <Formations/>
  </div>



</div>

  
  )
}
