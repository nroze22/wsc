import { PageConfig } from './types';

export const pages: PageConfig[] = [
  {
    id: 'home',
    label: 'Homepage',
    description: 'Main landing page of the website',
    sections: [
      {
        id: 'hero',
        label: 'Hero Section',
        description: 'Main banner with headline and call-to-action',
        component: 'components/hero.tsx'
      },
      {
        id: 'facilities',
        label: 'Facilities Section',
        description: 'Overview of available facilities',
        component: 'components/facilities.tsx'
      },
      {
        id: 'stats',
        label: 'Statistics Section',
        description: 'Key numbers and achievements',
        component: 'components/quick-stats.tsx'
      }
    ]
  },
  {
    id: 'tennis',
    label: 'Tennis Page',
    description: 'Tennis facilities and programs',
    sections: [
      {
        id: 'hero',
        label: 'Tennis Hero',
        description: 'Tennis-specific banner and introduction',
        component: 'components/tennis/hero.tsx'
      },
      {
        id: 'facilities',
        label: 'Tennis Facilities',
        description: 'Tennis court information',
        component: 'components/tennis/facilities.tsx'
      },
      {
        id: 'programs',
        label: 'Tennis Programs',
        description: 'Available tennis programs and classes',
        component: 'components/tennis/programs.tsx'
      },
      {
        id: 'pricing',
        label: 'Tennis Pricing',
        description: 'Court rates and membership options',
        component: 'components/tennis/pricing.tsx'
      }
    ]
  },
  {
    id: 'golf',
    label: 'Golf Page',
    description: 'Golf facilities and programs',
    sections: [
      {
        id: 'hero',
        label: 'Golf Hero',
        description: 'Golf-specific banner and introduction',
        component: 'components/golf/hero.tsx'
      },
      {
        id: 'features',
        label: 'Golf Features',
        description: 'Golf facility features and amenities',
        component: 'components/golf/features.tsx'
      },
      {
        id: 'coaching',
        label: 'Golf Coaching',
        description: 'Golf instruction and coaching programs',
        component: 'components/golf/coaching.tsx'
      },
      {
        id: 'pricing',
        label: 'Golf Pricing',
        description: 'Golf rates and membership options',
        component: 'components/golf/pricing.tsx'
      }
    ]
  }
];