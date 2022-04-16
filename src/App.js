import "./App.css";
import React, { useState } from "react";
import Header from "./Componenets/Header/Header";
import About from "./Componenets/About/About";
import Section from "./Componenets/Section/Section";
import Wrap from "./Componenets/Project/Wrap/Wrap";
import Card from "./Componenets/Project/Card";
import Description from "./Componenets/Project/Description";
import image1 from "./Img/image1.png";
import pandelumImg from "./Img/pandelum.jpg";
import clockImg from "./Img/clock.jpg";
import generateImg from "./Img/generate.png";
import rpsImg from "./Img/rps.png";
import solitareImg from "./Img/solitare1.jpg";
import Footer from "./Componenets/Footer/Footer";
import SingleUse from "./Componenets/Project/SingleUse";

function App() {
  const [aboutState, setAboutState] = useState(null);
  const [projectState, setProjectState] = useState(1);
  const getAboutState = (about, project) => {
    console.log(about, project);
    setAboutState(about);
    setProjectState(project);
  };
  return (
    <div className="App">
      <Header getAbout={getAboutState} />
      {aboutState && <About />}
      {projectState && (
        <React.Fragment>
          <Section
            title={"HTML & CSS"}
            style={{
              // borderRight: "solid 100px white",
              background: "var(--section-color-one)",
            }}
          >
            <Wrap>
              <Card
                image={image1}
                title={"PORTFOLIO WEBSITE"}
                description={
                  "This Portfolio Website was my first solo project.It is simple Portfolio website but have some nice effects,grid layout and it is responsive."
                }
                linkSite={"https://brave-pasteur-515aff.netlify.app/"}
                linkGithub={"https://github.com/Sejtanic/portofolio"}
              ></Card>
              <Description
                color={"--color-nav"}
                title={"LANDING PAGE"}
                description={"My first solo project"}
              ></Description>
            </Wrap>
            <Wrap>
              <Description
                title={"PANDELUM"}
                description={
                  "Perfecting my HTML & CSS skills and work with animations"
                }
              />
              <Card
                image={pandelumImg}
                title={"PANDELUM MOVEMENT"}
                description={
                  "To make something different to perfect my HTML & CSS i made simple Pandleum movement with use of Animation and Grid."
                }
                linkSite={"https://pandelum.netlify.app/"}
                linkGithub={"https://github.com/Sejtanic/Pandelum"}
              ></Card>
            </Wrap>
            <Wrap>
              <Card
                image={clockImg}
                title={"WATCH"}
                linkSite={"https://clock-sat.netlify.app/"}
                linkGithub={"https://github.com/Sejtanic/Clock-Css"}
                description={
                  "As final test for my HTML & CSS skills i wanted to make project where you need some logic.To test myself I decided to make analog watch."
                }
              />
              <Description
                color={"--color-nav"}
                title={"WATACH"}
                description={"Implement Logic to get correct movements"}
              />
            </Wrap>
          </Section>
          <Section
            title={"JavaScript"}
            // color={"--color-overlay"}
            style={{
              background: "var(--color-overlay)",
              // borderLeft: "var(--section-color-one) 100px solid",
            }}
          >
            <Wrap>
              <Description
                color={"--section-color-one"}
                title={"ROCK PAPER SCISSORS"}
                description={"Building simple games to start my JS journey"}
              />
              <Card
                linkSite={"https://rckpprscrs.netlify.app/"}
                linkGithub={"https://github.com/Sejtanic/Rock-Paper-Scissors"}
                image={rpsImg}
                title={"ROCK PAPER SCISSORS"}
                description={
                  "I think best way to learn something is to go step by step so i start to learn JavaScript by building interactive games.Even if project is small i always try to make it look nice and user friendly"
                }
              />
            </Wrap>
            <Wrap>
              <Card
                image={generateImg}
                title={"MINIMALISTIC SITE"}
                description={
                  "Need random number or maybe you forgot dice and you need one to play board game with friends .Try my simple and minimalistic site. You can also use dark or light theme for mood"
                }
                linkSite={"https://number-dice-coin.netlify.app/"}
                linkGithub={"https://github.com/Sejtanic/Generator"}
              />
              <Description
                color={"--white"}
                title={"MINIMALISTIC GENERATOR WEBSITE"}
                description={
                  "Need random number or maybe dice to play with friends?Check my site"
                }
              ></Description>
            </Wrap>
            <Wrap>
              <Description
                color={"--section-color-one"}
                title={"SOLITAIRE"}
                description={
                  "To challenge myself i decided to make Solitaire as my final project in JS before i start to learn React"
                }
              />
              <Card
                title={"SOLITAIRE"}
                image={solitareImg}
                linkSite={"https://solitair.netlify.app/"}
                linkGithub={"https://github.com/Sejtanic/solitaire"}
                description={
                  "This was my most challenging project in JS not only because it is complex but also because i wanted to make it as professional as i can and use OOP and DRY code"
                }
              />
            </Wrap>
          </Section>
          <Section
            title={"ReactJs"}
            style={{ background: "grey", color: "white" }}
          >
            <SingleUse />
          </Section>
          <Footer />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
