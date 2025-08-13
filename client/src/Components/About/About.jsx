import React from 'react'
import { Link } from 'react-router-dom';
import image15 from '../../assets/image15.png'; 
import image16 from '../../assets/image16.png'; 
import image17 from '../../assets/image17.png'; 
import image18 from '../../assets/image18.png'; 
import image19 from '../../assets/image19.png'; 
import Footer from "../Footer/Footer";


const About = () => {
return (
    <div>
        <div style={{backgroundImage: `url(${image15})`,backgroundSize:'cover',backgroundPosition:'center', height:'100vh'}} >
            <div className='p-5 text-white text-center justify-content-center  align-items-center'>
           <h1  className='mx-auto py-5'>Empowering young minds through interactive coding experience. learn Create. innovate</h1>
           <p className='fs-2 mx-auto w-75'>Unlock the world of web development with fun, structured lessons designed just for kids.
           Building tomorrow’s tech leaders, one line of code at a time.”</p>
           <div className='text-center p-5'>
           <Link to="/signup"className='text-white  text-decoration-none' style={{ backgroundColor: "black", borderRadius: "8px", padding: "10px 20px", border: "none", fontWeight:"bold" }}>Get Started</Link>
           </div>
            </div>
        </div>
            <div className='p-5 text-black ' >
                <h1 className='text-center'>Our Mission</h1>
                <p className='mx-auto py-3  fs-5'>We are passionate about equipping young minds with the skills to thrive in a digital world. Our mission is to make coding fun, accessible, and empowering for children of all ages. Through interactive lessons and hands-on projects, we nurture creativity, logical thinking, and problem-solving skills. We believe that every child has the potential to become a creator, not just a consumer, of technology. By fostering a love for learning and innovation, we prepare the next generation to confidently tackle challenges, explore their creativity, and shape the future with their ideas. Our goal is to build a community where young learners feel inspired, supported, and capable of achieving greatness through coding.</p>
            </div>
            <div  className='px-5 py-3 text-black ' >
                <h1 className='text-center'>Interactive Learning for Kids</h1>
                <p  className='mx-auto py-3 fs-5'>
                Our platform is designed to make learning to code both engaging and enjoyable for children. We incorporate a unique combination of features that set us apart from the rest. Through gamified learning, kids explore coding concepts by playing interactive games that make problem-solving fun and rewarding. Completing challenges and leveling up boosts their confidence while helping them master new skills.
                Our lessons are structured around hands-on projects, giving young learners the opportunity to apply their knowledge in practical, creative ways. From building games to crafting animations, they gain real-world experience while having a blast.
               To keep learners captivated, we use animated lessons that bring complex coding concepts to life. These vibrant visuals make understanding easier and more enjoyable, ensuring that kids stay motivated throughout their coding journey.
              We also understand the importance of simplicity, which is why we’ve designed an easy-to-navigate website. Children can effortlessly find lessons, track their progress, and start new projects without feeling overwhelmed.
              By combining fun, hands-on experiences with a user-friendly interface, we make tech education exciting, meaningful, and accessible for the next generation of innovators!
                </p>
            </div>
            <div className='container-fluid pt-5 pb-5' >
               <div className='row mx-auto '>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
                <img src={image16} alt="" className='w-100' />
               </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
                <img src={image17} alt=""  className='w-100' />
               </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
                <img src={image18} alt=""  className='w-100' />
               </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
                <img src={image19} alt=""  className='w-100' style={{ height:'42vh', }} />
               </div>
                </div>
            </div>
            <div className='p-5 text-black ' >
                <h1 className='text-center'>Why Chose Us</h1>
                <p className='mx-auto py-3 fs-5'>Choosing our website means giving your child a head start in the digital world. We make coding fun and engaging through interactive games, animated lessons, and hands-on projects, turning learning into an exciting adventure.
               Our kid-friendly approach ensures that the platform is intuitive and easy to navigate, so children can focus on exploring new skills without frustration. We believe that coding should be accessible to all, which is why our lessons are designed to match each child's pace and interests.
               Beyond just coding, our platform fosters essential skills like problem-solving, creativity, and logical thinking—preparing kids for future challenges. With guidance from passionate mentors, young learners receive the support and encouragement they need to thrive.
               We also prioritize safety and community, creating a space where children feel comfortable experimenting and expressing their creativity. Our proven teaching methods have empowered countless kids to become confident, creative coders.
                Give your child the opportunity to learn, create, and innovate with us!</p>
            </div>
            <div className='p-5 text-black ' >
                <h1 className='text-center'>Join The Community</h1>
                <p className='mx-auto py-3 fs-5'>Become part of a vibrant and inspiring community of young coders. Here, creativity meets technology as kids from diverse backgrounds come together to learn, create, and innovate. Whether you’re just starting your coding journey or looking to advance your skills, we’re here to support and guide you every step of the way.
                Connect with peers, share your projects, and get inspired by what others are building. Together, we’ll unlock endless possibilities and shape the future with code.</p>
            </div>
             <div className='text-center pb-5'>
             <Link to="/signup"className='text-white  text-decoration-none' style={{ backgroundColor: "#171728", borderRadius: "8px", padding: "10px 20px", border: "none", fontWeight:"bold" }}>Get Started</Link>
             </div>
             <div>
        <Footer />
      </div>
      </div>
      


   
  )
}

export default About