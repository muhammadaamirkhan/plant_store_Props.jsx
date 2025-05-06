import React from 'react'
import CardLayout from '../../layouts/CardLayout'

const TestimonialCard = ({ name, role, content, rating }) => {
  return (
    <CardLayout>
      <div className="p-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <blockquote className="text-lg text-gray-600 mb-6 relative">
          <span className="absolute -top-4 -left-2 text-4xl text-green-100 opacity-70">"</span>
          <p className="relative z-10">{content}</p>
          <span className="absolute -bottom-6 -right-2 text-4xl text-green-100 opacity-70">"</span>
        </blockquote>
        
        <div>
          <p className="font-semibold text-gray-800 text-lg">{name}</p>
          <p className="text-sm text-gray-500 mt-1">{role}</p>
        </div>
      </div>
    </CardLayout>
  )
}

export default TestimonialCard