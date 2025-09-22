import React from 'react'
import FeaturesPageLayout from '../../components/common/FeaturesPageLayout'
import { featuresPagesData } from '../../src/data/featuresPages'

export default function ScreenSharing() {
  const pageData = featuresPagesData['screen-sharing']
  
  return (
    <FeaturesPageLayout sections={pageData.sections} theme="blue" />
  )
}


