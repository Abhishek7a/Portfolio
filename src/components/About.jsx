import React from "react";
import profile from '../assets/profile.png'
import resume from '../resume/Abhishek_Arora_Resume.pdf'
export default function About() {

  // const resumeUrl = {resume}; 
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = {resume};
    link.download = "Abhishek_Arora_Resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="about" className="bg-gray-900 text-white py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-full shadow-lg">
          <img
            src={profile}
            alt="Abhishek Arora"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Details */}
        <div className="flex-1 text-center md:text-left space-y-3">
          <p>
            <strong className="text-orange-400">Name:</strong> Abhishek Arora
          </p>
          <p>
            <strong className="text-orange-400">Date of Birth:</strong> March 29, 2003
          </p>
          <p>
            <strong className="text-orange-400">Address:</strong> Bathinda, Punjab
          </p>
          <p>
            <strong className="text-orange-400">Email:</strong> abhishekarora5437@gmail.com
          </p>

          {/* Download CV Button */}
          <button
            onClick={downloadResume}
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  </section>
  );
}
