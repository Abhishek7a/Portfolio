import React from "react";
import profile from '../assets/profile.png'
import resume from '../resume/Abhishek_Arora_Resume.pdf'
export default function About() {

  const resumeUrl = {resume}; 
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Abhishek_Arora_Resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="profile-image">
              <img src={profile} alt="Abhishek" />
            </div>

            <div className="about-details ">
              <p>
                <strong>Name:</strong>Abhishek Arora
              </p>
              <p>
                <strong>Date of Birth:</strong> March 29, 2003
              </p>
              <p>
                <strong>Address:</strong> Bathinda, Punjab
              </p>
              {/* <p> */}
                {/* <strong>Zip Code:</strong> 151301 */}
              {/* </p> */}
              <p>
                <strong>Email:</strong> abhishekarora5437@gmail.com
              </p>
              {/* <!-- <p><strong>Phone:</strong> 9464647237</p> --> */}
              {/* <!-- <p><strong>Project Complete:</strong> 73</p> --> */}
              <br />
              <button onClick={downloadResume} 
                className="btn download-cv"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
