import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import image9 from '../../assets/image 9.png';
import image6 from '../../assets/image 6.png';
import image4 from '../../assets/image 4.png';
import image5 from '../../assets/image 5.png';
import { Link } from 'react-router-dom';
const IntroToClasses = () => {
  return (
    <>
      <Navbar />
      
        <div className='containe pt-5 mx-auto'>
            <div className='row mx-auto align-items-center' style={{ backgroundColor: "#ffffff" }}>
               <div className='col-lg-6 col-md-6 col-sm-12 mt-5  d-flex justify-content-center' >
               <h1 className='text-dark  pt-3 ms-5' style={{ fontSize:"60px" }}>Your  Tech Journey Starts Here</h1>
               </div>
               <div className='col-lg-6 col-md-6 col-sm-12' >
               <img src={image9} alt="image 9"  className='mx-auto w-100 ' />
               
               </div>
            </div>
        </div>
        <div className='container-fluid pt-5 pb-5' style={{ backgroundColor: "#171728", width: "100%", maxWidth: "none" }}>      
                <div className='row mx-auto'>
                    <div className='col-lg-6 col-md-6 col-sm-12 '>
                      <img src={image6} alt=" image 6"  className=' mt-5  ms-5 ' />
                    </div>
                   <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
                     <p className='text-white pb-3'> Kickstart your web development adventure with HTML! Learn how to structure your pages, add content, and build the foundation of your websites. Whether you're crafting simple layouts or complex designs, HTML is your first step into the world of coding. Begin your journey and bring your ideas to life! From creating headings and paragraphs to embedding images and links, you'll master the essential building blocks of the web. Develop interactive, engaging, and accessible pages that make an impact. Start coding now and watch your vision come to life, one tag at a time.</p>
                     <Link to="/signup"className='text-dark text-decoration-none' style={{ backgroundColor: "#ffffff", borderRadius: "8px", padding: "10px 20px", border: "none", fontWeight:"bold" }} >Get Started</Link>
                   </div>
                </div>
            </div>
        <div className='container-fluid pt-5 pb-5' style={{ backgroundColor: "#ffffff", width: "100%", maxWidth: "none" }}>      
                <div className='row mx-auto'>
                    <div className='col-lg-6 col-md-6 col-sm-12 '>
                      <img src={image4} alt=" image 6"  className=' mt-5  ms-5 ' />
                    </div>
                   <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
                     <p className=' pb-3  text-black'> "Transform your web pages with the magic of CSS! Learn how to style and design your websites with colors, fonts, layouts, and animations. From basic styling to advanced techniques, CSS makes your content visually appealing.
                      Create responsive designs that adapt to any screen size, ensuring accessibility on all devices. Master modern layout techniques like Flexbox and Grid to structure your content efficiently.
                      Add dynamic animations and transitions to make your pages interactive and engaging. Start your CSS journey today and bring your creative visions to life!"
</p>
              <Link to="/signup"className='text-white text-decoration-none' style={{ backgroundColor: "#171728", borderRadius: "8px", padding: "10px 20px", border: "none", fontWeight:"bold" }} >Get Started</Link>
                   </div>
                </div>
            </div>
        <div className='container-fluid pt-5 pb-5' style={{ backgroundColor: "#171728", width: "100%", maxWidth: "none" }}>      
                <div className='row mx-auto'>
                    <div className='col-lg-6 col-md-6 col-sm-12 '>
                      <img src={image5} alt=" image 6"  className=' mt-5  ms-5 ' />
                    </div>
                   <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
                     <p className='text-white pb-3'>Unlock the power of JavaScript to create interactive websites with animations and real-time updates. Master core concepts like variables, functions, and events. Explore advanced topics like APIs, asynchronous programming, and DOM manipulation. Build dynamic forms, games, and web applications. Integrate JavaScript with HTML and CSS for complete, responsive websites. Start your JavaScript journey and bring your ideas to life.</p>
                     
                     <Link to="/signup"className='text-dark text-decoration-none' style={{ backgroundColor: "#ffffff", borderRadius: "8px", padding: "10px 20px", border: "none", fontWeight:"bold" }} >Get Started</Link>
                   </div>
                </div>
            </div>
            <div className='container-fluid pt-5 pb-5' style={{ backgroundColor: "#ffffff", width: "100%", maxWidth: "none" }}>      
                <div className='row mx-auto'>
                    <div className='col-lg-6 col-md-6 col-sm-12 '>
                      <img src={image4} alt=" image 6"  className=' mt-5  ms-5 ' />
                    </div>
                   <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
                     <p className=' pb-3  text-black'> "Transform your web pages with the magic of CSS! Learn how to style and design your websites with colors, fonts, layouts, and animations. From basic styling to advanced techniques, CSS makes your content visually appealing.
                      Create responsive designs that adapt to any screen size, ensuring accessibility on all devices. Master modern layout techniques like Flexbox and Grid to structure your content efficiently.
                      Add dynamic animations and transitions to make your pages interactive and engaging. Start your CSS journey today and bring your creative visions to life!"

</p>
                     <Link to="/signup"className='text-white text-decoration-none' style={{ backgroundColor: "#171728", borderRadius: "8px", padding: "10px 20px", border: "none", fontWeight:"bold" }} >Get Started</Link>
                   </div>
                </div>
            </div>
        <div>
        <Footer />
      </div>

      
        
    </>
  );
};

export default IntroToClasses;