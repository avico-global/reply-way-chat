import React from 'react'
import FeaturesPageLayout from '../../components/common/FeaturesPageLayout'
import { featuresPagesData } from '../../src/data/featuresPages'

export default function VideoConferencing() {
  const pageData = featuresPagesData['video-conferencing']
  
  return (
    <FeaturesPageLayout sections={pageData.sections} theme="yellow" />
  )
}


