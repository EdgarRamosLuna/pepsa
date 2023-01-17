import React from 'react'
import MyComponent from '../components/MyComponent'


const Lazy = () => {
  return (
    <div>

        <div className='spacer' style={{width: '100%', height: '105vh' }}>
        

        </div>
        <div className='spacer' style={{width: '100%', height: '50vh' }}>
        

        </div>
       
        <MyComponent numero="1" />
        <MyComponent numero="2" />
    </div>
  )
}

export default Lazy