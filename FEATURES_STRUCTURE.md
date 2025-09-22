# Features Pages Structure

This document explains how to use the reusable features page structure based on dynamic components.

## Overview

All features pages now use a consistent structure with dynamic components. This makes it easy to:
- Maintain consistency across all feature pages
- Add new features quickly by just providing data
- Update common elements in one place
- Use the same beautiful design across all features

## Structure

### 1. FeaturesPageLayout Component
Located at: `components/common/FeaturesPageLayout.jsx`

This is the main layout component that:
- Renders the Navbar and Footer
- Dynamically renders sections based on the provided data
- Accepts a `sections` prop with component configurations

### 2. Dynamic Components
Located at: `components/container/Features/`

These are dynamic components that accept props for customization:

- **DynamicHero.jsx** - Hero section with customizable title, subtitle, stats, and CTAs
- **DynamicFeatures.jsx** - Features grid with customizable features and demo section
- **DynamicBenefits.jsx** - Benefits section with stats, use cases, and customizable content
- **DynamicFAQ.jsx** - FAQ section with expandable questions and help section
- **DynamicGetStarted.jsx** - Get started section with platforms, stats, and CTAs

### 3. Features Data Configuration
Located at: `src/data/featuresPages.js`

This file contains:
- All dynamic component imports
- Comprehensive data for each feature page
- Icons and content specific to each feature

### 4. Individual Feature Pages
Located at: `src/pages/features/[feature-name].js`

Each feature page:
- Imports the FeaturesPageLayout
- Gets data from the featuresPagesData configuration
- Renders the layout with the appropriate sections

## How to Create a New Feature Page

### Step 1: Add Feature Data
Add your feature configuration to `src/data/featuresPages.js`:

```javascript
'your-feature-name': {
  sections: [
    {
      component: DynamicHero,
      props: {
        bannerText: "Your banner text",
        title: "Your Feature Title",
        subtitle: "Your feature description",
        primaryCtaText: "Get Started",
        secondaryCtaText: "Watch Demo",
        stats: [
          { value: "10M+", label: "Users" },
          { value: "4K", label: "Quality" },
          { value: "99.9%", label: "Reliability" },
          { value: "24/7", label: "Support" }
        ]
      }
    },
    {
      component: DynamicFeatures,
      props: {
        title: "Express More with",
        subtitle: "Your features description",
        features: [
          {
            icon: Monitor, // Import from lucide-react
            title: "Feature 1",
            description: "Description of feature 1"
          },
          // ... more features
        ],
        demoTitle: "See it in Action",
        demoDescription: "Your demo description",
        demoFeatures: ["Feature 1", "Feature 2", "Feature 3"]
      }
    },
    {
      component: DynamicBenefits,
      props: {
        title: "How Your Feature Can",
        subtitle: "Your benefits description",
        benefits: [
          {
            icon: TrendingUp,
            title: "Benefit 1",
            description: "Description of benefit 1"
          },
          // ... more benefits
        ],
        statsTitle: "Your Feature Impact",
        statsSubtitle: "Your stats description",
        useCasesTitle: "Popular Use Cases",
        useCases: [
          { title: "Use Case 1", description: "Description of use case 1" },
          // ... more use cases
        ]
      }
    },
    {
      component: DynamicFAQ,
      props: {
        subtitle: "Your FAQ description",
        faqs: [
          {
            question: "Your question?",
            answer: "Your answer"
          },
          // ... more FAQs
        ]
      }
    },
    {
      component: DynamicGetStarted,
      props: {
        title: "Get Started with Your Feature Today",
        subtitle: "Your get started description",
        mainCtaTitle: "Ready to Start?",
        mainCtaSubtitle: "Your CTA description",
        platforms: [
          {
            icon: Monitor,
            name: "Desktop",
            description: "Windows, macOS, Linux",
            features: ["Feature 1", "Feature 2", "Feature 3"]
          },
          // ... more platforms
        ],
        finalCtaTitle: "Transform Your Experience Today",
        finalCtaSubtitle: "Your final CTA description"
      }
    }
  ]
}
```

### Step 2: Create the Page File
Create `src/pages/features/your-feature-name.js`:

```javascript
import React from 'react'
import FeaturesPageLayout from '../../../components/common/FeaturesPageLayout'
import { featuresPagesData } from '../../data/featuresPages'

export default function YourFeature() {
  const pageData = featuresPagesData['your-feature-name']
  
  return (
    <FeaturesPageLayout sections={pageData.sections} />
  )
}
```

## Available Icons

Import icons from `lucide-react` for use in features and benefits:

```javascript
import { 
  Monitor, Users, Shield, Zap, Eye, Share2, Settings, BarChart3, 
  Video, MessageCircle, Phone, FileText, TrendingUp, Globe, 
  Clock, DollarSign, Target, CheckCircle, Lock, Wifi, 
  Smartphone, Tablet, Search 
} from 'lucide-react'
```

## Benefits

1. **Consistency**: All feature pages have the same beautiful design
2. **Maintainability**: Common elements are updated in one place
3. **Speed**: New features can be created in minutes by just providing data
4. **Flexibility**: All content is customizable through props
5. **Scalability**: Easy to add new features without duplicating code
6. **Quality**: All pages inherit high-quality design and functionality
7. **Clean Codebase**: No duplicate components - everything uses the same dynamic structure

## Example Usage

See the following files for examples:
- `src/pages/features/screen-sharing.js` - Screen Sharing using dynamic components
- `src/pages/features/online-meetings.js` - Online Meetings using dynamic components
- `src/pages/features/video-conferencing.js` - Video Conferencing using dynamic components
- `src/pages/features/instant-messaging.js` - Instant Messaging using dynamic components

## Data Structure

Each feature page consists of 5 sections:
1. **Hero** - Main title, subtitle, stats, and primary CTAs
2. **Features** - Feature grid with icons and descriptions, plus demo section
3. **Benefits** - Benefits grid, impact stats, and use cases
4. **FAQ** - Frequently asked questions with expandable answers
5. **Get Started** - Platform support, stats, and final CTAs

All sections are fully customizable through props while maintaining the consistent design and functionality.

## Clean Architecture

- ✅ All old static components have been removed
- ✅ All feature pages now use the same dynamic components
- ✅ No code duplication across features
- ✅ Easy to maintain and extend
- ✅ Consistent design and functionality across all pages 