import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/image.png'; 
import image2 from '../../assets/image 2.png'; 
import image3 from '../../assets/image 3.png'; 
import image4 from '../../assets/image 4.png'; 
import image5 from '../../assets/image 5.png'; 
import image6 from '../../assets/image 6.png'; 
import image7 from '../../assets/image 7.png';
import imagess from '../../assets/imagess.png';
import image11 from '../../assets/image 11.png';
import image12 from '../../assets/image 12.png';
import image13 from '../../assets/image 13.png';
import image14 from '../../assets/image 14.png';


import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <>
      <div className='mt-5 ' style={{ backgroundColor: "gray", height: "20px", border: "none" }} ></div>
      <div className="hero-sectio" style={{ backgroundColor: "#171728" }}>
        <div className='container'>
          <div className='row mx-auto align-items-center'>
            <div className='col-lg-6 col-md-6 col-sm-12 mt-5 d-flex justify-content-center'>
              <img src={image} alt="" className='w-100 px-auto d-block' />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
              <div className='text-center mt-4 pb-5'>
                <h1 className='text-white'>Code the fun way</h1>
                <p className='mt-5 mx-auto text-white'>Empowering kids to become tech creators through fun, interactive coding lessons. Building problem-solving skills, creativity, and confidence to shape the tech leaders of tomorrow!</p>
                 <Link to="/signup" className="btn bg-white fw-bold mt-5 px-4 text-dark text-decoration-none">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-learn-section">
        <div>
          <p className="why-learn-title fw-bold">Why Learn to Code</p>
          <h2 className="why-learn-description">Coding is like a superpower. It boosts creativity, problem-solving, and lets you build cool projects!</h2>
        </div>
        <div className="container mt-5">
          <div className="row mx-auto align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <span>
                <img src={image2} alt="Image 2" className="img-fluid" />
                <span className='mx-3'>Fun Learning (Coding for Kids)</span>
                <p className='mx-5'>Coding becomes enjoyable with interactive lessons, games, and projects designed specifically for kids. It encourages hands-on learning and creative thinking.</p>
              </span>
              <span>
                <img src={image2} alt="Image 2" className="img-fluid" />
                <span className='ms-3'>Problem-Solving Skills (Critical Thinking)</span>
                <p className='mx-5'>Coding teaches kids to break down complex tasks into simple steps, helping them develop logical reasoning and analytical skills essential for real-world challenges.</p>
              </span>
              <span>
                <img src={image2} alt="Image 2" className="img-fluid" />
                <span className='mx-3'>Future-Ready Skills (Digital Literacy)</span>
                <p className='mx-5'>Learning to code prepares kids for future careers in technology and innovation, giving them the skills to thrive in an ever-evolving digital world.</p>
              </span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mx-auto d-flex justify-content-center">
              <img src={image3} alt="Image 3" className="img-fluid h-75 mx-5" />
            </div>
          </div>
        </div>
      </div>
      <div className='pt-4' style={{ backgroundColor: "#171728" }}>
        <div className='text-center text-white '>
          <h4  className='py-3'>Courses We Offer</h4>
          <p >Explore a variety of expertly designed course to fuel your learning growth.</p>
        </div>
        <div className='container pb-5'>
          <div className='row mx-auto'>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='card mt-5 pb-5' style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
                <img src={image6} alt="Image 6" className="img-fluid h-50 w-50 d-block mx-auto mt-5" />
                <h5 className='text-center mt-3'>Get Started with HTML</h5>
                <p className='text-center mx-auto'>Discover the foundation of web development with HTML! Learn to structure your pages with headings, paragraphs, lists, and images. Start building websites from scratch and bring your ideas to life</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='card mt-5 pb-5' style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
                <img src={image4} alt="Image 4" className="img-fluid h-50 w-50 d-block mx-auto mt-5" />
                <h5 className='text-center mt-3'>Style Your Web Pages with CSS</h5>
                <p className='text-center mx-auto'>Unlock the power of CSS to add colors, fonts, and layouts to your websites! Learn to make your pages visually appealing with responsive designs and animations. Transform basic HTML into stunning web experiences!</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='card mt-5 pb-5' style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
                <img src={image5} alt="Image 5" className="img-fluid h-50 w-50 d-block mx-auto mt-5" />
                <h5 className='text-center mt-3'>Interactive JavaScript</h5>
                <p className='text-center mx-auto'>Add interactivity and functionality to your websites with JavaScript! Learn to create dynamic elements, handle user actions, and build engaging apps. Turn your ideas into interactive web projects!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-5 pb-2' style={{ backgroundColor: "#ffffff" }}>
        <h3 className='pt-3 text-center'>Creative Coding Projects</h3>
        <div className='container'>
          <div className='row mx-auto align-items-center'>
            <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
              <div className='mt-5 pt-3'>
                <h5>1. Easy to Use</h5>
                <p>
                  The website should be simple and friendly, with big buttons and clear instructions.
                  Kids should know what to do next without needing help.
                  Menus and pages must be easy to find and easy to understand.
                </p>
              </div>
              <div className='pt-5'>
                <h5>2. Engaging and Interactive</h5>
                <p>
                  Lessons should include animations, sounds, and rewards to keep kids excited.
                  Children should click, drag, and type — not just read.
                  Games, quizzes, and fun activities should appear often.
                  Bright visuals and positive feedback ("Great Job!") boost motivation.
                  Every click should feel like an adventure, not a chore.
                </p>
              </div>
              <div className='pt-5'>
                <h5>3. Structured in Levels</h5>
                <p>
                  Learning is divided into levels (easy to hard) like a game.
                  Each level teaches a new coding skill, building on the last.
                  Kids "level up" after completing lessons or challenges.
                  They earn badges, stars, or certificates as they progress.
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 mt-5 d-flex justify-content-center'>
              <img src={image7} alt="Image 7" className="img-fluid d-block mx-auto h-75 mt-5" />
            </div>
          </div>
        </div>
      </div>
      <div  style={{ backgroundColor: "#171728" }}>
        <div className='text-center text-white py-5'>
          <h2 className='t'>How Learning Code Works</h2>
          <img src={imagess} alt="" className='img-fluid mx-auto p-5' />
        </div>
      </div>
      <div>
      <div className='' style={{ backgroundColor: "gray", height: "10px", border: "none" }} ></div>
      </div>
      <div className='pb-5' style={{ backgroundColor: "#171728" }}>
        <div>
          <h4 className='text-center text-white py-5'>Join Us Now</h4>
        </div>
        <div className='container'>
         <div className='row mx-auto mt-5'>
            <div className='col-lg-4 col-md-4 col-sm-12  d-flex '>
              <div className=' text-white justify-content-center text-center'>
              <img src={image12} alt="Image 12" className="img-fluid  " />
              <p>Wilson Catherine.  Stage 2(CSS).  </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12  d-flex'>
             <div  className=' text-white justify-content-center text-center'>
             <img src={image11} alt="Image 11" className="img-fluid  " />
             <p>Wilson Catherine.  Stage 2(CSS).  </p>
             </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 '>
             <div  className=' text-white justify-content-center text-center'>
             <img src={image13} alt="Image 13" className="img-fluid  mx-auto  " />
             <p>Wilson Catherine.  Stage 2(CSS).  </p>
             </div>
            </div>
         </div>

        </div>
      </div>
      <div  style={{ backgroundColor: "#ffffff" }}>
        <div className='text-center pt-5'>
          <h3>Ready to Start your coding Adventure</h3>
        </div>
        <div className='container'>
          <div className='row mx-auto align-items-center'>
           <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center' >
            <img src={image14} alt="Image 11" className="img-fluid  "  />
           </div>
           <div className='col-lg-6 col-md-6 col-sm-12 '>
              <div className='text-center mt-4 pb-5'>
                <h1 className='text-dark'>join us now!!!</h1>
                <p className='mt-5 mx-auto text-dark fs-5'>If you've made it this far, you must be at least a little curious. Sign up and take the first step toward your goals</p>

                <Link to="/signup" className="btn bg-success fw-bold mt-5 px-4 text-decoration-none">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;