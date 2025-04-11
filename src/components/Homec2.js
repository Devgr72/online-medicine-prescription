import React from 'react'
import './Homec2.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import ha from './Assets/healthaware.jpg'
import discount from './Assets/discount.jpg'
import service from './Assets/247.jpg'
import consult from './Assets/consult.jpg'
import fda from './Assets/fda.jpg'
import kit from './Assets/kit.jpg'
function Homec2() {
    const responsive = {
        superLargeDesktop: {
       
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
  return (
    <div className='container-homec2'>
     <h1>Your Complete Healthcare Solution</h1>
     <h4>Discover our premium medical services</h4>
      <Carousel responsive={responsive}>
        <div className='place-img'>
            <img src={ha} height={'150px'} width={'300px'} alt='Health Awareness'/>
            <h2 className='place-name'>Health Awareness</h2>
        </div>
        <div className='place-img'>
            <img src={discount} height={'150px'} width={'300px'} alt='discount'/>
            <h2 className='place-name'>Health Discount</h2>
        </div>
        <div className='place-img'>
            <img src={service} height={'150px'} width={'300px'} alt='service'/>
            <h2 className='place-name'>24x7 Service</h2>
        </div>
        <div className='place-img'>
            <img src={consult} height={'150px'} width={'300px'} alt='consult'/>
            <h2 className='place-name'>Doctor Consult</h2>
        </div>
        <div className='place-img'>
            <img src={fda} height={'150px'} width={'300px'} alt='fda'/>
            <h2 className='place-name'>FDA Approved</h2>
        </div>
        <div className='place-img'>
            <img src={kit} height={'150px'} width={'300px'} alt='kit'/>
            <h2 className='place-name'>First Aid Kits</h2>
        </div>
      
      </Carousel>
    </div>
  )
}

export default Homec2