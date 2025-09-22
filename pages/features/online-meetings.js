import React from 'react'
import FeaturesPageLayout from '../../components/common/FeaturesPageLayout'
import { featuresPagesData } from '../../src/data/featuresPages'

export default function OnlineMeetings() {
  const pageData = featuresPagesData['online-meetings']
  
  return (
    <FeaturesPageLayout sections={pageData.sections} theme="blue" />
  )
}


