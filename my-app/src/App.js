import React, { useState } from "react";
import logo from "./logo.svg";
import "./style.css";

function App() {
  const [scrollState, setScrollState] = useState(false);
  const [menuIsActive, setMenuIsActive] = useState(false);

  const changeValueScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 100) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  };

  function toggleMenu() {
    if (menuIsActive) {
      setMenuIsActive(false);
    } else {
      setMenuIsActive(true);
    }
  }

  window.addEventListener("scroll", changeValueScroll);

  return (
    <>
      <header className={scrollState ? "sticky" : ""}>
        <a href="#" class="logo">
          Portfolio
        </a>
        <div
          className={menuIsActive ? "toggle active" : "toggle"}
          onClick={toggleMenu}
        ></div>

        <ul className={menuIsActive ? "menu active" : "menu"}>
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#toolkit" onClick={toggleMenu}>
              Toolkit
            </a>
          </li>
          <li>
            <a href="#work" onClick={toggleMenu}>
              Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </header>

      {/* <!-- Creating Banner Layout in HTML --> */}
      <section class="banner" id="home">
        <div class="textBx">
          <h2>
            Hi, my name is
            <br /> <span>Michael Cleveland</span>
          </h2>
          {/* <!-- <h3>I'm a software developer and a data analyst <br>with experience 
                in manufacturing engineering and organic agriculture.</h3> --> */}
          <a href="#about" class="btn">
            About Me
          </a>
        </div>
      </section>

      {/* <!-- Creating About Me Layout in HTML --> */}
      <section class="about" id="about">
        <div class="heading">
          <p>Just a Little Bit</p>
          <h2>About Me</h2>
        </div>
        <div class="content">
          {/* <!-- <div class="w50">
                <img src="githubImage" alt="" class="proPic">
            </div> --> */}

          <div class="w50" id="githubImage"></div>

          <div class="contentBx w50">
            <h3>Who am i?</h3>
            {/* <!-- <h2>I'm <b>Michael Cleveland</b>, a software developer and mechanical engineer.</h2>
                <p id="githubBio"></p> --> */}
            <h2 id="githubBio"></h2>
            <p>
              As a member of the Cook Systems FastTrack Program I have created
              three different RESTful APIs with the Java Spring Boot framework
              and tested them using Postman. I have also utilized React.js and
              Node.js to create several front-end web-based applications, and I
              have utilized Vorpal to create a couple of command line
              interfaces. For larger projects I have collaborated remotely with
              other developers via GitHub and Slack. Prior to starting
              FastTrack, I learned Python, Java and PostgreSQL, and in
              October of 2021, I passed the Tableau desktop certified associate
              exam. Of course, this website (composed of HTML, CSS, and
              React.js) is of my making as well.
            </p>
            <br />
            <p>
              In 2011, I graduated from the University of Tennessee with a
              Bachelor of Science degree in mechanical engineering <i> summa cum
              laude </i> as a member of the engineering honor society Tau Beta Pi.
              Afterwards, I worked as a manufacturing engineer for three years
              for a global leader in the upstream oil field services industry,
              during which time I led lean six sigma initiatives and designed
              mechanical fixtures in SolidWorks among other responsibilities.
              <br />
            </p>
            <div class="heading bottom">
              <a
                // href="images/2022-11-16 Resume, Michael Cleveland.pdf"
                // href="./McInputFiles/2022-12-8 Resume Michael Cleveland.pdf"
                href={require("../src/McInputFiles/2022-12-13 Resume Michael Cleveland.pdf")}
                download="2022-12-13 Resume Michael Cleveland"
                target="_blank"
                class="btn round"
              >
                Download CV
              </a>
              <div class="bt">
                <b>Name:</b> Michael Cleveland
                <br />
                <b>Hire-able:</b> YES
              </div>
              <div class="bt">
                <b>Email:</b> m999cleveland@gmail.com
                <br />
                <b>Location:</b> Memphis, TN
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Creating Toolkit Layout in HTML --> */}
      <section class="toolkit" id="toolkit">
        <div class="heading white">
          <h2>My Toolkit</h2>
          <p>Languages, frameworks, & software</p>
        </div>
        <div class="content">
          <div class="toolkitBx">
            <i class="fa-brands fa-java fa-4x"></i>
            <h3>Java</h3>
            <p>
              Apps and Restful APIs. <br />
              Cook Systems FastTrack Java course, Tim Buchalka's course, The
              Complete Java Reference by Herbert Schildt, & HackerRank
              challenges
            </p>
          </div>
          <div class="toolkitBx">
            <i class="fa-brands fa-python fa-4x"></i>
            <h3>Python</h3>
            <p>
              Jose Portilla's course, py.checkio.org, & HackerRank challenges.
            </p>
          </div>
          <div class="toolkitBx">
            <i class="fa-brands fa-js fa-4x"></i>
            <h3>JavaScript</h3>
            <p>
              Web-based applications & Command Line Interface applications with
              Node.js.
            </p>
          </div>
          <div class="toolkitBx">
            <i class="fa-solid fa-database fa-4x"></i>
            <h3>PostgreSQL</h3>
            <p>
              RESTful APIs, Anthony Debarros' course, Cook Systems FastTrack
              course{" "}
            </p>
          </div>
          <div class="toolkitBx">
            <i class="fa-solid fa-chart-line fa-4x"></i>
            <h3>Tableau</h3>
            <p>Certified Tableau Desktop Associate</p>
          </div>
          <div class="toolkitBx">
            <i class="fa-solid fa-power-off fa-4x"></i>
            <h3>Spring Boot</h3>
            <p>RESTful APIs</p>
          </div>
          <div class="toolkitBx">
            <i class="fa-brands fa-react fa-4x"></i>
            <h3>React</h3>
            <p>User interfaces for full-stack applications</p>
          </div>
          <div class="toolkitBx">
            <i class="fa-brands fa-git fa-4x"></i>
            {/* <!-- <h3>Git</h3> --> */}
            <p>Feature-branch workflow, GitHub</p>
          </div>
          <div class="toolkitBx">
            <i class="fa-solid fa-p fa-4x"></i>
            <h3>Postman</h3>
            <p>Test driven development</p>
          </div>
        </div>
      </section>

      {/* <!-- Creating Work Layout in HTML --> */}

      <section class="work" id="work">
        <div class="heading">
          <h2>My Latest Work</h2>
          <p>Some of my projects</p>
        </div>
        <div class="content">
          <div class="workBx">
            <a
              href="https://github.com/M-Cleveland153/Project_Management_App_Front_End_2022-12-10"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("./McInputFiles/TeamProject-Freepik - Front.jpg")}
                alt=""
              />
              <p class="FreepikAttr">Image by katemangostar on Freepik</p>
              <p>Full Stack Project Management App - Front End </p>
              <p>(React)</p>
            </a>
          </div>
          <div class="workBx">
            <a
              href="https://github.com/M-Cleveland153/Project_Management_App_Back_End_2022-12-10"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("./McInputFiles/TeamProject-Freepik - Back - InProgress.jpg")}
                alt=""
              />
              <p class="FreepikAttr">Image by katemangostar on Freepik</p>
              <p>Full Stack Project Management App - Back End</p>
              <p>(Srping Boot)</p>
            </a>
          </div>
          <div class="workBx">
            <a
              href="https://github.com/M-Cleveland153/TwitterReplicaAPI_2022-11-15"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("./McInputFiles/twitter-pexels - resize.jpg")}
                alt=""
              />
              <p>
                Twitter Replica RESTful API <br />
                (Spring Boot)
              </p>
            </a>
          </div>
          <div class="workBx">
            <a
              href="https://github.com/M-Cleveland153/Spotify_Game_App_2022-12-10"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require("./McInputFiles/spotify-pexels.jpg")} alt="" />
              <p>
                Spotify Game Application <br />
                (React)
              </p>
            </a>
          </div>
          <div class="workBx">
            <a
              href="https://github.com/M-Cleveland153/Lemonade_CLI_2022-11-15"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require("./McInputFiles/lemonade-pexels.jpg")} alt="" />
              <p>
                Lemonade Stand Command Line Interface <br />
                (Vorpal)
              </p>
            </a>
          </div>
          <div class="workBx">
            <a
              href="https://github.com/M-Cleveland153/QuizAPI_2022-11-15"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require("./McInputFiles/quiz-pexels.jpg")} alt="" />
              <p>
                Quiz API <br />
                (Spring Boot)
              </p>
            </a>
          </div>
          {/* <div class="heading">
                <a href="https://github.com/M-Cleveland153?tab=repositories" 
                target="_blank" class="btn" style="color:#fff">See All Projects</a>
            </div>  */}
          <div class="workBx">
            <a
              href="https://github.com/M-Cleveland153/Sandwich_Order_App_2022-11-15"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require("./McInputFiles/burger-pexels.jpg")} alt="" />
              <p>
                Sandwich Order Application <br />
                (Java)
              </p>
            </a>
          </div>
          <div class="workBx">
            <a
              href="https://github.com/M-Cleveland153/Blackjack_2022-11-15"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("./McInputFiles/black jack-pexels.jpg")}
                alt=""
              />
              <p>
                Black Jack Game Application <br />
                (Python)
              </p>
            </a>
          </div>
          <div class="heading">
            <a
              href="https://github.com/M-Cleveland153?tab=repositories"
              target="_blank"
              class="btn"
            >
              See All Projects
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Creating Testimonial Layout in HTML -->
    <!-- <section class="testimonial" id="testimonial">
        <div class="heading white">
            <h2>Testimonials</h2>
            <p>Beyond the code</p>
        </div>
        <div class="content">
            <div class="testimonialBx">
                <p>Be the first to give a testimonial about my work</p>
                <h3>anonymous or declared</h3>
            </div>
            <div class="testimonialBx">
                <p>Be the first to give a testimonial about my work</p>
                <h3>anonymous or declared</h3>
            </div>
        </div>
    </section> --> */}

      {/* <!-- Creating Contact Layout in HTML --> */}
      <section class="contact" id="contact">
        <div class="heading white">
          <p>You are welcome to contact me</p>
          <h2>Get in Touch</h2>
        </div>
        <div class="content">
          <div class="contactInfo">
            {/* <h3>Contact Information</h3>
            <p>
              I am available for freelance work if the right project comes along
            </p> */}
            <h3>
              I am available for freelance work if the right project comes along
            </h3>
            <div class="contactInfoBx">
              <div class="box">
                <div className="mcRemovesEmailForm">
                  {" "}
                  {/* I created this div when I removed the email form */}
                  <div class="icon">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div class="text">
                    <h3>Residence</h3>
                    <address>Memphis, TN </address>
                  </div>
                </div>
              </div>
              {/* <div class="box">
                <div class="icon">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div class="text">
                  <h3>Phone no :</h3>
                  <p>901.491.7304</p>
                </div>
              </div> */}
              <div class="box">
                <div className="mcRemovesEmailForm">
                  {" "}
                  {/* I created this div when I removed the email form */}
                  <div class="icon">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div class="text">
                    <h3>Email Address</h3>
                    <p>m999cleveland@gmail.com</p>
                  </div>
                </div>
              </div>
              <br />
              <div class="box">
                <div className="mcRemovesEmailForm">
                  <h3 class="LetsConnect">Let's Connect</h3>
                  <div class="boxSocial">
                    {/* <div class="icon">
                  <a
                    href="https://www.facebook.com/michael.cleveland.1840"
                    target="_blank"
                  >
                    <i class="fa-brands fa-square-facebook"></i>
                  </a>
                </div> */}
                    <div class="icon">
                      <a
                        href="https://www.linkedin.com/in/michael-c-63985744/"
                        target="_blank"
                      >
                        <i class="fa-brands fa-linkedin"></i>
                      </a>
                    </div>
                    <div class="icon">
                      <a
                        href="https://twitter.com/Michael63903865"
                        target="_blank"
                      >
                        <i class="fa-brands fa-square-twitter"></i>
                      </a>
                    </div>
                    {/* <div class="icon">
                  <a
                    href="https://www.instagram.com/m999cleveland/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div> */}
                    <div class="icon">
                      <a
                        href="https://www.hackerrank.com/Lithofalco"
                        target="_blank"
                      >
                        <i class="fa-brands fa-hackerrank"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="formBx">
            <form>
              <h3>Message Me</h3>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <textarea
                name=""
                id=""
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <input type="submit" value="Send Message" name="" />
            </form>
          </div> */}
        </div>
      </section>

      {/* <!-- Creating Footer Layout in HTML--> */}
      <footer class="copyright">
        <p>&copy; 2022, Please respect Michael's rights</p>
      </footer>
    </>
  );
}

export default App;
