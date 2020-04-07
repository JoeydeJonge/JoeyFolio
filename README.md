# Software Developer Folio ⚡️ [![GitHub](https://img.shields.io/github/license/saadpasta/developer-portfolio?color=blue)](https://github.com/saadpasta/developer-portfolio/blob/master/LICENSE.md) ![GitHub stars](https://img.shields.io/github/stars/saadpasta/developer-portfolio)  [![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/86c52691ca3c46e4bf887d704c196824)](https://www.codacy.com/manual/saadpasta/developerFolio?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=saadpasta/developerFolio&amp;utm_campaign=Badge_Grade)

## A clean, beautiful and responsive portfolio template for Developers!


<p align="center">
  <kbd>
<img src="src/assests/images/portfolio.gif"></img>
  </kbd>
</p>


Just change `src/porfolio.js` to get your personal portfolio . Feel free to use it as-is or customize it as much as you want.

But if you want to **contribute** and make this much better for other developer have a look at [Issues](https://github.com/saadpasta/developerFolio/issues).


If you created something awesome and want to contribute then feel free to open Please don't hesitate to open an [pull request](https://github.com/saadpasta/developerFolio/pulls).


## Sections
✔️ Summary and About me\
✔️ Skills \
✔️ Open Source Projects Connected with Github\
✔️ Big Projects\
✔️ Achievements And Certifications 🏆\
✔️ Blogs\
✔️ Talks\
✔️ Podcast\
✔️ Contact me

To view a live example, **[click here](http://joeycode.nl/)**


## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer or use [Docker](https://www.docker.com/products/docker-desktop).

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```
### Docker Commands

```
1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -p 3000:3000 developerfolio:latest
```


## Change and customize every section according to your need.

### To Change website content go to `/src/portfolio.js` and change content according to yours.

```javascript
/* Change this file to get your Personal Porfolio */

const gretting = {
  /* Your Summary And Gretting Section */
  title: "Hi all 👋 I'm Saad",
  subTitle: "A passionate Full Stack Software Developer 🚀.
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7"
};


const skillsSection = { .... }

const techStack = { .... }

const openSource = { .... }

const bigProjects = { .... }

const achievementSection = { .... }

const blogSection = { .... }

const gameSection = { .... }

const contactInfo = { .... }

const twitterDetails = { ... }

```

### Adding Twitter Timeline to your Page
Insert your Twitter username in `portfolio.js` to show your recent activity on your page.

```javascript
const twitterDetails = {
  userName : "Your Twitter Username"
};
```
Note: Don't use `@` symbol when adding username.

## Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)

## illustrations
- [UnDraw](https://undraw.co/illustrations)

## Deployment 📦
Once you have done with your setup. You need to put your website online!
I highly recommend to use [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this on the EASIEST WAY.

You could also deploy it directly with Netlify by linking your own repo.

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/saadpasta/developerFolio)



## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details




## For the Future
If you can help us with these. Please don't hesitate to open a [pull request](https://github.com/saadpasta/developerFolio/pulls).

- Connect with LinkedIn to get Summary, Skills, Education and Experience

- Move to Gatsby

- Enable Dark Mode

- Add More Sections and Move to Multi Page


