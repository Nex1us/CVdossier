import React from 'react'
import Contact from '../composants/ui/Contact.jsx'
import Competence from '../composants/ui/Competence.jsx'
import Loisir from '../composants/ui/Loisir.jsx'
import Langue from '../composants/ui/Langue.jsx'
import Formations from '../composants/ui/Formations.jsx'

export default function Home() {
  return (
<div className='p-12'>
  <div className='flex  justify-between p-12 border-spacing-2 rounded-xl'>
<Contact/>

  </div>
  <div >
<Competence />

  </div>
  <div>
    <Loisir />
  </div>
  <div>
    <Langue/>
  </div>
  <div>
  <Formations/>
  </div>
</div>

  
  )
}
