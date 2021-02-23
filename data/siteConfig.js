module.exports = {
  siteTitle: 'Hi! I\'m Tomás!',
  siteDescription: 'This is my personal page',
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Tomás Novau',
  twitterUsername: 'Tomas30715282',
  githubUsername: 'tnovau',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `Sr. Full-Stack & DevOps - Javascript enthusiast, Guitarist and EU Citizen.
    I started programming at 12. <br />
    In 2016 I started working as a TSQL developer.
    In 2017, I moved to JS and C#. Working on that languages since then <br />
    I work as a Sr. Full-stack & DevOps mainly with <strong>AWS, CI/CD, Javascript, Typescript, C#, NodeJS & React.</strong> at Tiendeo`,
  skills: [
    {
      name: 'Front-end',
      level: 90
    },
    {
      name: 'Back-end',
      level: 90
    },
    {
      name: 'Mobile Cross-Platform',
      level: 80
    },
    {
      name: 'Devops',
      level: 75
    },
    {
      name: 'Unit testing',
      level: 95
    },
    {
      name: 'Automation',
      level: 75
    },
    {
      name: 'Team leading',
      level: 50
    },
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Tiendeo",
      begin: {
        month: 'nov',
        year: '2020'
      },
      duration: null,
      occupation: "Sr. Full-stack developer",
      description: "Maintenance and development of a webapp to claim for money of your purchases, for multiple countries and currencies. Maintenance of infrastructure and CI/CD."
    },
    {
      company: "ALTRAN(Axa Assistance Client)",
      begin: {
        month: 'apr',
        year: '2019'
      },
      duration: '1 yrs 8 mos',
      occupation: "Full-Stack & DevOps",
      description: "Maintenance of a claims app for a single client. Development of a new app that supports multiple clients. Maintenace of infrastructure and CI/CD."
    }, {
      company: "Whyline, INC",
      begin: {
        month: 'nov',
        year: '2018'
      },
      duration: '6 mos',
      occupation: "Full-Stack & DevOps",
      description: "Maintenance and Development of the whyline mobile app & admin portal."
    }, {
      company: "Endava(WellSky - formerly Mediware)",
      begin: {
        month: 'jul',
        year: '2018'
      },
      duration: '5 mos',
      occupation: "Full-Stack developer",
      description: "Mantainance of healthcare web app."
    }, {
      company: "Holistor SA",
      begin: {
        month: 'feb',
        year: '2018'
      },
      duration: '6 mos',
      occupation: "Full-Stack & Team lead",
      description: "Leading distributed team of 5 people. Developing mobile & web solutions. I+D & architecture proposals."
    }, {
      company: "AAJ Technologies",
      begin: {
        month: 'jan',
        year: '2017'
      },
      duration: '1 yrs',
      occupation: "Mobile & web developer",
      description: "Developing mobile(cross-platform) & web solutions for multiple clients."
    }, {
      company: "NEORIS (Ternium Client)",
      begin: {
        month: 'jan',
        year: '2017'
      },
      duration: '5 mos',
      occupation: "SQL Developer",
      description: "Mantainance of the Ternium's Data WareHouse."
    },
  ],
  portifolio: [
    {
      image: "/images/react-circle-flags.png",
      description: "react-circle-flags",
      url: "https://github.com/tnovau/react-circle-flags"
    }
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/Tomas30715282",
    linkedin: "https://www.linkedin.com/in/tom%C3%A1s-novau-foresi-78b1b6125",
    github: "https://github.com/tnovau",
    email: "tnovau@gmail.com"
  },
  siteUrl: 'https://tnovau.github.io',
  pathPrefix: '',
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-168259966-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}