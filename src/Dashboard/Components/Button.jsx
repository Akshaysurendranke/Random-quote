import React from 'react'

function Button(props) {
  return (
    <div className='buttons' >
      <button className='button' style={{color:"black"}} onClick={props.Handleclick}>New Quote</button>
       
    </div>
  )
}

export default Button