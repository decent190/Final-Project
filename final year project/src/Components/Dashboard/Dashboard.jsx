import { Link } from 'react-router-dom';
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from '../../assets/animation.png';
import { useEffect, useState } from 'react';
import imagegal from '../../assets/imagegal.png';
import frame from '../../assets/frame.png';
import percent from '../../assets/percent.png';
import image4 from '../../assets/image 4.png';
import image5 from '../../assets/image 5.png';
import image6 from '../../assets/image 6.png';
import progress from '../../assets/progress.png';
import Footer from "../Footer/Footer";


const Dashboard = () => {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) setUserName(storedName);
  }, []);

  const activities = [
    "✅ Completed: HTML Basics",
    "⭐ Unlocked badge: CSS Novice",
    "🧠 Quiz Taken: JS Variables – Score: 8/10",
    "🔥 Streak: 3 days in a row",
    "🕒 Time spent today: 45 mins",
    "➡️ Continued: JS Loops",
  ];

  return (
    <div>
     
      <nav className="navbar fixed-top" style={{ backgroundColor: '#171728' }}>
        <div className="container-fluid">
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row" style={{ gap: '12px' }}>
            <li className="nav-item">
              <a className="navbar-brand d-none d-lg-block text-white" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand d-none d-lg-block text-white" href="#">Classes</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand d-none d-lg-block text-white" href="#">My Project</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand d-none d-lg-block text-white" href="#">Code Editor</a>
            </li>
          </ul>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ backgroundColor: '#171728' }}>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Welcome</h5>
              <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">Dashboard</a>
                </li>
                <li className="nav-item">
                   <Link to="/quiz" className="nav-link active text-white" href="#">Quiz</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">Challenges</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">Code Editor</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">My Progress</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <div className='mt-5' style={{ backgroundColor: "gray", height: "15px", border: "none" }}></div>

        <div className="container mt-5">
          <div className="row mx-auto align-items-start">
            {/* Left Side */}
            <div className="col-lg-6 col-md-6 col-sm-12">
            <span>
                <img src={imagegal} alt="Imagegal" className="img-fluid" />
                <span className='ms-3 fs-3 fw-bold'>
                  {userName ? `Hello, ${userName} welcome` : 'Hello, welcome'}
                </span>
              </span>

              <div className="container mt-4">
                <div className="row mx-auto align-items-center">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className='rounded-3 text-center' style={{ backgroundColor: '#171728' }}>
                      <h3 className='p-2 text-white'>10 Lessons completed</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className='rounded-3 text-center' style={{ backgroundColor: '#171728' }}>
                      <h3 className='p-2 text-white'>4/10 Average score</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className='rounded-3 text-center' style={{ backgroundColor: '#171728' }}>
                      <h3 className='p-4 text-white'>Reward earned</h3>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className='mt-4'>Continue Learning</h4>
                </div>

                <div className='' style={{ borderRadius: "8px", outline: "1px solid gray" }}>
                  <span className='d-flex mt-4'>
                    <img src={frame} alt="Frame" className="img-fluid p-3 h-50 w-50 mx-auto" />
                    <p className='ms-3 mt-2 fs-5'>
                      JavaScript Basics: Responsiveness into multiple lines of code. <br />
                      6/10 Lessons | 50% <br />
                      <img src={percent} alt="Progress" className="img-fluid p-2 mx-auto" />
                    </p>
                  </span>
                </div>

                <div className='mt-5'>
                  <h2>Recommended Courses</h2>
                </div>

                <div className='container pb-5'>
                  <div className='row mx-auto'>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                      <div className='card mt-5 pb-4' style={{ backgroundColor: "#171728", borderRadius: "10px" }}>
                        <img src={image6} alt="Image 6" className="img-fluid h-50 w-50 d-block mx-auto mt-3" />
                        <h5 className='text-center text-white mt-4'>Learn HTML</h5>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                      <div className='card mt-5 pb-4' style={{ backgroundColor: "#171728", borderRadius: "10px" }}>
                        <img src={image4} alt="Image 4" className="img-fluid h-50 w-50 d-block mx-auto mt-3" />
                        <h5 className='text-center text-white mt-4'>Learn CSS</h5>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                      <div className='card mt-5 pb-2' style={{ backgroundColor: "#171728", borderRadius: "10px" }}>
                        <img src={image5} alt="Image 5" className="img-fluid h-50 w-50 d-block mx-auto mt-3" />
                        <h5 className='text-center text-white mt-3'>Learn JAVASCRIPT</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <img src={progress} alt="Progress" className="img-fluid" />
                </div>
              </div>
            </div>

            
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div style={{ borderRadius: "8px", border: "1px solid gray", padding: "15px", backgroundColor: "#f8f9fa" }}>
                <h4 className='fw-bold'>Recent Activities</h4>
                <ul className="list-group mt-3">
                  {activities.map((item, index) => (
                    <li key={index} className="list-group-item">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center mt-5 mb-5">
  <Player
    autoplay
    loop
    src={animationData}
    style={{ height: "250px", width: "250px", margin: "auto" }}
  />
  <p className="mt-3 text-muted">
    You're doing great, Wilson! Keep it up 💪🚀
  </p>
</div>
          </div>
        </div>
             
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
