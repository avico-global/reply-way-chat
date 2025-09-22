import React from 'react'
import FeaturesPageLayout from '../../components/common/FeaturesPageLayout'
import { featuresPagesData } from '../../src/data/featuresPages'

export default function InstantMessaging() {
  const pageData = featuresPagesData['instant-messaging']
  
  return (
    <FeaturesPageLayout sections={pageData.sections} theme="green" />
  )
}


