import React from 'react'
import { Row } from 'react-bootstrap'
import '../components/ArtistPane.css'
import mainCirlceOne from '/Users/Jahvon/npx/epicrecords/src/assets/EPIC/Artist Circle Logos/Future-sq-300x300.jpeg'
import mainCircleTwo from '/Users/Jahvon/npx/epicrecords/src/assets/EPIC/Artist Circle Logos/Meghan-Trainor-sq-300x300.jpeg'

function ArtistPane() {

 

  return (
    <div className='container-fluid'>
        <div id='RowOne' className='flex-row justify-content-center align-content-center text-align-center mt-5'>
    
          <div className='imgCont'>
            <img className='img-fluid' src={mainCirlceOne} alt='artist'/>
            <h2 className='text-center'>Future</h2>
          </div>
          <h1 className='bold'>Artist</h1>
          <div className='imgCont justify-content-center'>
             <img className='img-fluid' src={mainCircleTwo} alt='artist'/>
             <h2 className='text-center'>Meghan Trainor</h2>
          </div>
  
        </div>
    </div>
  )
}

export default ArtistPane