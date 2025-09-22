import React from 'react'

export default function Container({children, className  }) {
  return (
    <div className={`w-full max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 ${className}`}>
        {children}
    </div>
  )
}
