import React from 'react'

//backgroundColor, right , left , top , bottom ,height,width
//style={{...props}}
/*
backgroundColor:"pink",
        height:200,
        width:200,
        right:5,
        left:"10%",
        borderRadius:"0 0 100pc 0"
*/
function Circles(props) {
  return (
    <div className='Circles' 
    style={{
        ...props,
        opacity:0.6,
       // transform: "translate(-50%, -50%)"
    }}
    />
  )
}

export default Circles