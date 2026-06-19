import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution updates and campaign reach',
      description: 'Explore media distribution tasks, campaign updates, syndication briefs, publisher outreach, and performance-ready content.',
      openGraphTitle: 'Media distribution updates and campaign reach',
      openGraphDescription: 'Discover distribution tasks, publication updates, outreach briefs, and campaign stories through a polished media-first experience.',
      keywords: ['media distribution', 'press distribution', 'publisher outreach', 'campaign updates'],
    },
    hero: {
      badge: 'Media distribution command center',
      title: ['Move every media story', 'to the right audience.'],
      description: 'Browse distribution tasks, publisher-ready summaries, campaign placements, outreach notes, and performance updates from one focused media archive.',
      primaryCta: { label: 'Browse distribution tasks', href: '/media-distribution' },
      secondaryCta: { label: 'Search media archive', href: '/search' },
      searchPlaceholder: 'Search campaigns, publishers, categories, and tasks',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for media teams that need clear distribution workflows.',
      paragraphs: [
        'This site brings together distribution briefs, outreach notes, publication records, and campaign context so teams can move naturally from one media task to the next.',
        'Instead of burying posts inside disconnected pages, the platform keeps media distribution content connected in one place with consistent navigation and easier exploration.',
        'Whether someone starts with a publisher update, a campaign task, or a search result, they can keep discovering related distribution work without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with text-forward distribution cards.',
        'Connected sections for campaigns, publishers, outreach, and results.',
        'Cleaner browsing rhythm designed for normal-width layouts.',
        'Lightweight animations that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse media distribution', href: '/media-distribution' },
      secondaryLink: { label: 'Search archive', href: '/search' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore media distribution work through one connected experience.',
      description: 'Move between campaign updates, outreach tasks, publisher notes, and distribution results through one clearer visual system.',
      primaryCta: { label: 'Browse Distribution', href: '/media-distribution' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A calmer, clearer way to manage media distribution.',
    description: `${slot4BrandConfig.siteName} is built to make campaign distribution, publisher outreach, and media-ready content feel like one unified experience.`,
    paragraphs: [
      'Instead of splitting distribution tasks into disconnected pages, the platform keeps related content easy to move through and easy to understand.',
      'Whether someone starts with a campaign note, publisher update, or archive search, they can continue exploring without losing context.',
    ],
    values: [
      {
        title: 'Distribution-first experience',
        description: 'We prioritize clarity, pacing, and structure so media teams can read, browse, and act without noise.',
      },
      {
        title: 'Connected campaign surfaces',
        description: 'Tasks, briefs, outreach notes, and publication records stay connected so discovery feels natural across the site.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We focus on clean navigation and clear page structure to help visitors find useful content faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Contact the media distribution desk.',
    description: 'Tell us what you are trying to publish, syndicate, correct, or launch. We will route it through the right distribution lane.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find campaigns, publishers, briefs, and distribution tasks faster.',
      description: 'Use keywords, categories, and content types to discover media distribution posts from every active section of the site.',
      placeholder: 'Search by campaign, publisher, category, or title',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create new content.',
      description: 'Use your account to open the publishing workspace and create media distribution posts for the active sections of this site.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create media distribution content for every active section.',
      description: 'Choose the content type, add details, and prepare a clean distribution post with links, summaries, publisher notes, and body content.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your media desk.',
      description: 'Login to continue browsing distribution tasks, managing submissions, and creating new campaign content from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start distributing.',
      description: 'Create an account to access the media distribution workspace, save details, and submit campaign content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
