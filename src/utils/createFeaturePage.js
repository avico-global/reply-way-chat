import { featuresPagesData } from '../data/featuresPages'

export function createFeaturePage(featureName) {
  const pageData = featuresPagesData[featureName]
  
  if (!pageData) {
    throw new Error(`No data found for feature: ${featureName}`)
  }
  
  return function FeaturePage() {
    const FeaturesPageLayout = require('../../components/common/FeaturesPageLayout').default
    
    return (
      <FeaturesPageLayout sections={pageData.sections} />
    )
  }
} 