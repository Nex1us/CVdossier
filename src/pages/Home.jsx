import React from 'react'

import Contact from '../composants/ui/Contact.jsx'
import Competence from '../composants/ui/Competence.jsx'
import Loisir from '../composants/ui/Loisir.jsx'
import Langue from '../composants/ui/Langue.jsx'
import Formations from '../composants/ui/Formations.jsx'

export default function Home() {

  return (
<div className='p-12  bg-stone-700 flex flex-wrap '>
<header>
<div>
    <button className=' flex flex-col  '>
  <a href="/Admin">Admin</a> </button>
  </div>
</header>


  <div className='flex  justify-between p-12 border-spacing-2 rounded-xl border-5 bg-red-950 w-5/6 ml-14'>
<Contact/>

  </div>
  <div className=' flex flex-wrap justify-center  space-x-36 ml-32 border-spacing-2 rounded-xl bg-red-950 mt-12 w-5/6'>
  <div  className='  justify-between p-12 border-spacing-2 rounded-xl border-5 '> 
<Competence />

  </div>
  <div className='flex-wrap  justify-between p-12 border-spacing-2 rounded-xl border-5'>
    <Langue />
  </div>
  <div className='flex-wrap  justify-between p-12 border-spacing-2 rounded-xl border-5 '>
    <Loisir/>
  </div>
  </div>
  <div className='flex-wrap  justify-between p-12 border-spacing-2 rounded-xl bg-red-950 ml-32 m-12 w-5/6'>
  <Formations/>
  </div>

<div className='flex flex-wrap flex-col ml-96'>
  <h2>Mes liens github pour mon portfolio et mon Api</h2>
  <button><a href="https://github.com/Nex1us/CVdossier">Portfolio</a></button>
  <button><a href="https://github.com/Nex1us/cvAPI"> Mon API</a></button>
</div>

</div>

  
  )
}
