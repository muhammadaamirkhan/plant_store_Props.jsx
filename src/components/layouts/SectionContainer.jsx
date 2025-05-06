import React from 'react'

const SectionContainer = ({ title, children, bg }) => {
  return (
    <section className={`py-12 ${bg}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </div>
        {children}
      </div>
    </section>
  )
}

export default SectionContainer