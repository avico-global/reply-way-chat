import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function FeaturesPageLayout({ sections, theme = "blue" }) {
  return (
    <>
      <Navbar />
      <main>
        {sections?.map((section, index) => {
          const Component = section.component
          return Component ? (
            <Component key={index} {...section.props} />
          ) : null
        })}
      </main>
      <Footer />
    </>
  )
}
