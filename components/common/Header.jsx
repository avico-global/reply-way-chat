import React from 'react'

export default function Header({title, description}) {
  return (
    <div className='text-start mb-8 sm:mb-10 md:mb-12'>
        <h2 className='text-sm sm:text-base text-gray-600'>{title}</h2>
        <p className='mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 font-medium leading-tight sm:leading-relaxed'>
            {description}
        </p>
    </div>
  )
}
