import React from 'react'
import Dots from '../assets/dots.svg'

function Heading(props) {
  return (
    <div>
       <div className='conatiner'>
                            <div>
                          <img src={Dots} alt="....." className='opacity-50 m-0 ml-16 xl:w-[50vw] w-[100vw] h-auto' />
                          </div>
                      <div className=' flex text-[7vh] xl:-mt-[40vh] -mt-[20vh] text-highlight text-right font-semibold'>
                      {props.text}
                      </div>
                      <div className=' text-[2.2vh] text-center tracking-wider'>
                     {props.subtext}
                      </div>
                      </div> 
                <div>
                </div>     

      </div>
  )
}

export default Heading
