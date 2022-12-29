import React from 'react'
import  "../styles/Breadcrump.css"

const BreadCrump = ({data}) => {
  return (
    
        <div className="breadcrump-container">
        <div className='crumpdata'>{data}</div>
      </div>
    
  )
}

export default BreadCrump