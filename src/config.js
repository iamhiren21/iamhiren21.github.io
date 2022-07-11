module.exports = {
  siteTitle: 'Hiren Savaliya',
  siteDescription:
    'Hiren Savaliya is a Software Quality Assurance Analyst at Invints Infotech LLP.',
  siteKeywords:
    'Hiren Savaliya, Hiren, Savaliya, QA, iamhiren21, software tester, cyber security, cyber, security',
  siteUrl: 'https://iamhiren21.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-VBN5DCBBMW',
  name: 'Hiren Savaliya',
  location: 'Surat, India',
  email: 'hirensavaliya234@gmail.com',
  github: 'https://github.com/iamhiren21',
  twitterHandle: '@im_hiren_',
  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hirensavaliya/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/im_hiren_',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/iamhiren21',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/im.hiren_',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Featured ',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '30px',
    duration: 300,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
