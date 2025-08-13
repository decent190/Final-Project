import React from 'react';
import image8 from '../../assets/image 8.png';

const Footer = ({ bgColor = "#171728", textColor = "#fff" }) => {
  return (
    <div className='pt-4 pb-5' style={{ backgroundColor: bgColor }}> 
      <div className='container'>
          <div className='row mx-auto'>
             <div className='col-lg-3 col-md-6 col-sm-12'>
                 <h5 className='text-center pt-5' style={{ color: textColor }}>My Profile</h5>
                 <p className='text-center pt-2' style={{ color: textColor }}>Sign In</p>
                 <p className='text-center' style={{ color: textColor }}>Create Account</p>
                 <p className='text-center' style={{ color: textColor }}>My Account</p>
                 <p className='text-center' style={{ color: textColor }}>Profile Settings</p>
             </div>
             <div className='col-lg-3 col-md-6 col-sm-12'>
                 <h5 className='text-center pt-5' style={{ color: textColor }}>Customer Care</h5>
                 <p className='text-center pt-2' style={{ color: textColor }}>Contact Us</p>
                 <p className='text-center' style={{ color: textColor }}>Help Center</p>
                 <p className='text-center' style={{ color: textColor }}>FAQs</p>
             </div>
             <div className='col-lg-3 col-md-6 col-sm-12'>
                 <h5 className='text-center pt-5' style={{ color: textColor }}>About Us</h5>
                 <p className='text-center pt-2' style={{ color: textColor }}>Our Story</p>
                 <p className='text-center' style={{ color: textColor }}>Mission Statement</p>
                 <p className='text-center' style={{ color: textColor }}>Team Members</p>
                 <p className='text-center' style={{ color: textColor }}>Careers</p>
             </div>
             <div className='col-lg-3 col-md-6 col-sm-12'>
                 <h5 className='text-center pt-5' style={{ color: textColor }}>Policies</h5>
                 <p className='text-center pt-2' style={{ color: textColor }}>Terms of service</p>
                 <p className='text-center' style={{ color: textColor }}>Privacy Policy</p>
                 <p className='text-center' style={{ color: textColor }}>Refund Policy</p>
                 <p className='text-center' style={{ color: textColor }}>Shipping Policy</p>
             </div>
          </div>
      </div>
      <div className='pt-5 text-center' style={{ color: textColor }}>
        <div>
            <p>follow us</p>
             <img src={image8} alt="Image 8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;