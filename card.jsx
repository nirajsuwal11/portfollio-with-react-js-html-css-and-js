import React from "react";
import './card.css';
function Card (){
return (
    <>

    <header>
    <a href="#" class="logo"> <span class="niraj"> NIRAJ </span></a>

    <div class="bx bx-menu" id="menu-icon"></div>

    <ul class="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <div class="bx bx-moon" id="darkmode"></div>
    </ul>
</header>


<section class="home" id="home">
        <div class="social">
            <a href="#"><i class='bx bxl-github'></i></a>
            <a href="#"><i class='bx bxl-dribbble' ></i></a>
            <a href="#"><i class='bx bxl-behance' ></i></a>
        </div>
        <div class="home-img">
        <img src="./images/Untitled design (1)-modified.png" alt=""/>
        </div>
        <div class="home-text">
            <span>Hello, I'm</span>
            <h1>NIRAJ SUWAL</h1>
            <h2><span>FRONT</span>END<span> DEVELOPER</span></h2>
            <p> #React JS  #Next JS</p>
            <a href="#contact" class="btn">Contact Me</a>
        </div>
 
    </section>
    <section class="about" id="about">
        <div class="heading">
            <h2>About Me</h2>
            <span>Introduction</span>
        </div>
  
        <div class="about-container">
            <div class="about-img">
            <img src="./images/niraj.jpg" alt=""/>
            </div>
            <div class="about-text">
                <p> <b class="bold">Greetings</b>,<br/>
                    <br/>
                    I'm Niraj Suwal, and I proudly call Bhaktapur, Nepal, my home. I'm deeply passionate about web development, and it's my mission to craft extraordinary websites and Mobile applications.
                    <br/>
                    <br/>
                    My dedication goes beyond just creating websites; it's about crafting experiences that leave a lasting impression. I'm committed to delivering not just good but outstanding solutions to my clients.
                    <br/><br/>
                    I look forward to connecting with you and exploring how I can contribute my expertise to your digital endeavors.</p>
                <div class="information">
             
                    <div class="info-box">
                        <i class='bx bxs-user' ></i>
                        <span> Niraj Suwal</span>
                    </div>
                   
                    <div class="info-box">
                        <i class='bx bxs-phone' ></i>
                        <span>++977 9749844028</span>
                    </div>
           
                    <div class="info-box">
                        <i class='bx bxs-envelope' ></i>
                        <span>suwalniroj111@gmail.com</span>
                    </div>
                </div>
                <a href="#" class="btn">Download Cv</a>
            </div>
        </div>
    </section>
    <section class="skills" id="skills">
        <div class="heading">
            <h2>Skills</h2>
            <span>My Skills</span>
        </div>

        <div class="skills-container">
            <div class="bars">
            
                <div class="bars-box">
                    <h3>HTML</h3>
                    <span>94%</span>
                    <div class="light-bar"></div>
                    <div class="percent-bar html-bar"></div>
                </div>
        
                <div class="bars-box">
                    <h3>CSS</h3>
                    <span>84%</span>
                    <div class="light-bar"></div>
                    <div class="percent-bar css-bar"></div>
                </div>
     
                <div class="bars-box">
                    <h3>JavaScript</h3>
                    <span>74%</span>
                    <div class="light-bar"></div>
                    <div class="percent-bar js-bar"></div>
                </div>
               
                <div class="bars-box">
                    <h3>React</h3>
                    <span>80%</span>
                    <div class="light-bar"></div>
                    <div class="percent-bar react-bar"></div>
                </div>
            </div>
            <div class="skills-img">
            <img src="./images/123.png" alt=""/>
            </div>
        </div>
 
    </section>
    <section class="services" id="services">
        <div class="heading">
            <h2>Services</h2>
            <span>Our Services</span>
        </div>
        <div class="services-content">
           
            <div class="services-box">
                <i class='bx bx-code-alt' ></i>
                <h3>Web Development</h3>
                <a href="#">Learn More</a>
            </div>
          
            <div class="services-box">
                <i class='bx bx-server' ></i>
                <h3>Backend Development</h3>
                <a href="#">Learn More</a>
            </div>
      
            <div class="services-box">
                <i class='bx bx-brush' ></i>
                <h3>UI/UX Design</h3>
                <a href="#">Learn More</a>
            </div>

            <div class="services-box">
                <i class='bx bxl-wordpress' ></i>
                <h3>Wordpress Developer</h3>
                <a href="#">Learn More</a>
            </div>
        </div>
    </section>
    <section class="portfolio" id="portfolio">
        <div class="heading">
            <h2>Portfolio</h2>
            <span>Our Recent Work</span>
        </div>
        <div class="portfolio-content">
            <div class="portfolio-img">
                <div class="portfolio-img">
            <img src="./images/blog-2.jpg" alt=""/>    
            </div>
            </div>
            <div class="portfolio-img">
            <img src="./images/blog-3.jpg" alt=""/>
            </div>
            <div class="portfolio-img">
            <img src="./images/blog-4.jpg" alt=""/>
            </div>
            <div class="portfolio-img">
            <img src="./images/blog-5.jpg" alt=""/>
            </div>
            <div class="portfolio-img">
            <img src="./images/blog-6.jpg" alt=""/>
            </div>
            <div class="portfolio-img">
            <img src="./images/blog-7.jpg" alt=""/>    
            </div>
           
        </div>
    </section>
    <section class="contact" id="contact">
        <div class="heading">
            <h2>Contact</h2>
            <span>Connect With Us</span>
        </div>
        <div class="contact-form">
            <form action="">
                <input type="text" placeholder="Your Name"/> 
                <input type="email" name="" id="" placeholder="Your Email"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Write Message Here..."></textarea>
                <input type="button" value="Send" class="contact-button"/>
            </form>
        </div>
    </section>
   
    <div class="footer">
        <h2>NIRAJ SUWAL</h2>
        <div class="footer-social">
            <a href="#"><i class='bx bxl-facebook' ></i></a>
            <a href="#"><i class='bx bxl-twitter' ></i></a>
            <a href="#"><i class='bx bxl-instagram' ></i></a>
            <a href="#"><i class='bx bxl-youtube' ></i></a>
        </div>
 
    </div>

    <div class="copyright">
        <p> <a href="">Frontnd Developer</a> | All Right Reserved.</p>
    </div>
 
 
    

</>
    )
}
export default Card;