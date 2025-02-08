import React from "react";
import profile from '../assets/profile.png'
export default function About() {
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
              <a
                href="resume/Abhishek_Arora_Resume.pdf"
                className="btn download-cv"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
