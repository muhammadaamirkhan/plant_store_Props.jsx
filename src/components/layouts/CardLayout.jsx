import React from 'react'

const CardLayout = ({ children, hoverEffect = true }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${
      hoverEffect ? 'hover:shadow-xl transition-shadow duration-300' : ''
    }`}>
      {children}
    </div>
  )
}

export default CardLayout