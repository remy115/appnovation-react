import React from 'react';
import '../components-css/centralcontent.css'

export default ({children})=>{
  return (
    <div className="central-content">
      {children}
    </div>
  )
}