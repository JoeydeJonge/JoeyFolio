import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import Projects from "./projects/Projects";
import StartupProjects from "./StartupProjects/StartupProjects";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Games from "./games/Games";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Top from "./topbutton/Top";


export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <Projects />
        <StartupProjects />
        <Achievement />
        <Blogs />
        <Games />
        <Talks />
        <Podcast />
        <Contact />
        <Footer />
        <Top />
      </div>
    );
  }
}
