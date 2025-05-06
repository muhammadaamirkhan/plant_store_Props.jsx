import React from 'react'
import CardLayout from '../../layouts/CardLayout'
const CategoryCard = ({ name, description, image, icon }) => {
  return (
    <CardLayout>
      <div className="relative h-56 overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <span className="absolute top-4 right-4 text-3xl">{icon}</span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        <button className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors">
          Explore Collection
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </CardLayout>
  )
}
export default CategoryCard