import React from 'react'
import { 
    Linkedin, Github, Instagram, Youtube, Twitter, Book
} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className="header">
          <div className="first__container">
            <div className="pfp__img__container"><img src="komuk.jpg" alt="img-pfp" className="pfp__img"></img></div>
            <div className="pfp__detail">
              <div className="name">M ACLA ALAMSYAH PUTRA</div>
              <div className="pfp__content light-gray"><Book size={15} /> Final Year Software Engineering student at Universitas Raharja</div>
              <div className="pfp__content">Fullstack Deveveloper Intern <a href="https://www.solutif.co.id/" className="no-deco">@Solutif</a></div>
              <div className="pfp__content">Tangerang, Indonesia</div>

              <div className="skills__pfp">
                <div className="skills__pfp-up">
                  <div>PHP</div> <div>Java</div> <div>JavaScript</div> 
                </div>
                <div className="skills__pfp-down">
                  <div>Laravel</div> <div>Spring</div> <div className="skills__fullstack">React</div> <div>Fullstack</div> <div>Cloud</div> <div>Linux</div>
                </div>
              </div>

              <div className="pfp__content">
                <a href="https://www.linkedin.com/in/m-acla-alamsyah-putra-bbb8071b9/">
                  <Linkedin className="socialMedias__content" size={20}/>
                </a>
                <a href="https://github.com/Aclaputra">
                  <Github className="socialMedias__content" size={20}/> 
                </a>
                <a href="https://instagram.com/aclaputra">
                  <Instagram className="socialMedias__content" size={20}/>
                </a>
                <a href="https://www.youtube.com/channel/UCw6TKkKAdEktUv8VDGqZaFQ">
                  <Youtube className="socialMedias__content" size={20}/>
                </a>
                <a href="https://twitter.com/acla_putra">
                  <Twitter className="socialMedias__content" size={20}/> 
                </a>
              </div>
            </div>
          </div>
          <div className="second__container">
            <div>Hi there! I'm Acla Putra a college student passionates in making Awesome Full Stack Applications, I love to explore programming world so i can teach and help people in needs with my skills.
            Having a big dream is a must for me. As a college student with night shift i can learn something new outside the college like from Google, Youtube, Udemy etc, and making <Link to="/projects" className="link__projects no-deco">Projects</Link> in my spare time. <span className="italic">(Normally it is about 4-6 hours in the morning before the class).</span></div>
            <div></div>
          </div>
        </div>
    )
}

export default About
