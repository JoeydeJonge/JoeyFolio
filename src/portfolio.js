/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all 👋 I'm Joey",
  subTitle:
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Drupal / Java and some other cool libraries and frameworks",
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/JoeydeJonge",
  linkedin: "https://www.linkedin.com/in/joey-de-jonge/",
  gmail: "info@joeycode.nl",
  gitlab: "https://gitlab.com/JoeydeJonge1",
  facebook: "https://www.facebook.com/joey.dejonge.9"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "drupal",
      fontAwesomeClassname: "fab fa-drupal"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "google+",
      fontAwesomeClassname: "fab fa-google-plus-square"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "facebook",
      fontAwesomeClassname: "fab fa-facebook-square"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */

  githubConvertedToken: "aed451bb6249831a39dad9c348133a415395b31a",
  githubUserName: "JoeydeJonge"
};


// Some Big Projects You have worked with your company

const bigProjects = {
  /* Your Achievement Section Include Your Certification Talks and More */

  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",

  projects: [
    {
      url: "https://verfbron.nl/",
      image: "https://images.squarespace-cdn.com/content/5c08e517b98a78513643faf1/1553761323321-TQ0I5AF6AJ8I04YCAHR5/8501_1.jpg?format=1500w&content-type=image%2Fjpeg",
      title: "Verfbron Webshop / Bol.com online sales",
      description: "I helped the Verfbron create an online sale platform on bol.com."
    },
    {
      url: "https://www.ramonsportscare.com/",
      image: "https://static.wixstatic.com/media/dcf51a_6c5ed52e0c7441ecba617d3d91a92c05~mv2.jpg/v1/fill/w_264,h_146,al_c,q_80,usm_0.66_1.00_0.01/logo%20ramonsportscare_edited.webp",
      title: "Ramon SportsCare",
      description: "I helped Ramon build his website and the name recognition advice on google"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  /* Your Achievement Section Include Your Certification Talks and More */

  title: "Achievements And Certifications 🏆 ",
  subtitle: "Achievements, Certifications Award Letters and Some Cool Stuff that i have done !",

  achivementsCards: [
    {
      title: "Scalda Application developer",
      description: "Education Certificate ",
      image:
        "https://pbs.twimg.com/profile_images/553218898808406017/M-RlGQrE_400x400.jpeg",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Final Project", url: "www.delphinity.nl" }
      ]
    },
    {
      title: "Google Assistant Action",
      description: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "Facebooks Ads",
      description: "Completed Certifcation from Online course Facebook ads",
      image: "https://www.tcdedriesprong.nl/files/images/offers/facebook-1531746177_n.jpg",
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Facebook Project", url: "https://www.facebook.com/bronverf/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {
  /* Blogs Section */

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff. These are cool blogs",

  blogs: [
    {
      url: "https://css-tricks.com/an-almost-ideal-react-image-component/",
      image: "https://miro.medium.com/max/400/1*pYHONrA_3QM4dgtBSKrYWQ.jpeg",
      title: "An Almost Ideal React Image Component",
      description: "CSS tricks Responisve image."
    },
    {
      url: "https://www.bright.nl/nieuws/artikel/5062806/ook-filmplatform-cinetree-opent-deuren-voor-thuisblijvers",
      image: "https://www.spreekbuis.nl/wp-content/uploads/2020/03/cinetree-1-1024x608.png",
      title: "Gratis films streamen: filmplatform Cinetree tijdelijk kosteloos",
      description: "Nice blog about Dutch company that deals with free movies. Especially the website is fun to visit."
    },
    {
      url: "https://www.tomsguide.com/us/what-is-kodi,review-4160.html",
      image: "https://i.pcmag.com/imagery/articles/06O8kbRaLK2Q89YvM6hNn1t-11.fit_scale.size_1028x578.v1569491296.jpg",
      title: "Use Kodi?",
      description: "The open-source media center software lets you access a wide range of video content on almost any device, but is it for you?"
    }
  ]
};

const gameSection = {
  /* Games Section */

  title: "Games",
  subtitle: "With Love for Games. These are cool blogs",

  games: [
    {
      url: "https://www.forbes.com/sites/games/2019/09/19/nhl-20-review-the-good-the-bad-and-the-bottom-line/#48168f055d94",
      image: "https://specials-images.forbesimg.com/imageserve/5d830b5b18444200084ddbc6/960x0.jpg?fit=scale",
      title: "NHL 20",
      description: "NHL 20 review. This is a game that I play a lot in my spare time now"
    },
    {
      url: "https://www.xgn.nl/review/battlefield-5-review",
      image: "https://d2skuhm0vrry40.cloudfront.net/2018/articles/2018-11-19-15-28/bf5.png/EG11/resize/690x-1/quality/75/format/jpg",
      title: "Battlefield 5 Review - A tribute to World War II",
      description: "Fun game to play with friends. Love for history people"
    },
    {
      url: "https://www.digitaltrends.com/game-reviews/fortnite-battle-royale-review/",
      image: "https://cdn.mos.cms.futurecdn.net/XfUtoGCxQfjw3fn2nsNnT9-970-80.jpg.webp",
      title: "Fortnite Battle Royale review",
      description: "A year later, Fortnite remains the battle royale to beat"
    }
  ]
};


// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO LISTEN TO THESE TALKS 😅",

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

// Podcast Section
const podcastSection = {
  title: "Music 🎙️",
  subtitle: "I LOVE THIS SONG",

  // Please Provide with Your music embeded Link
  podcast: ["https://song.link/i/1444174049"]
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "06-27206897",
  email_address: "info@joeycode.nl"
};

//Twitter Section

const twitterDetails = {

  userName: "jonge_joey"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, achievementSection, blogSection, gameSection, talkSection, podcastSection, contactInfo , twitterDetails};
