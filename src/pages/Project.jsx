import React from "react";
import movieTime from "../assets/movieTimeProject.png";
import LagendaryBookStore from "../assets/LegendaryLibraryImage.png";
import InstagramClone from "../assets/InstagramClone.png";
import PotentiaImage from "../assets/PotentiaImage.png";
import ProjectCard from "../components/ProjectCard";
import FoodFusion from "../assets/FoodFusion.png";
import Zomato from "../assets/Zomato.png";
import CodeSnippet from "../assets/CodeSnippet.png";
export default function Project() {
  return (
    <>
      <ProjectCard
        image={CodeSnippet}
        title={"Code Snippet"}
        link="https://code-snippet-livid.vercel.app/ "
        disc="Developed a Code Snippet Sharing Platform where users can quickly copy reusable HTML, CSS, and React components. The platform provides a clean UI to browse, preview, and copy component code"
      />
      <ProjectCard
        image={FoodFusion}
        title={"Food Fusion"}
        link="https://cx23rj-3000.csb.app/"
        disc="Developed a food ordering website with a React frontend, MongoDB Atlas as the database, and AWS as the cloud provider."
      />
      <ProjectCard
        image={movieTime}
        title={"Movie Time"}
        link="https://abhishek7a.github.io/movieTime/"
        disc="Developed a movie ticket booking platform with a React.js
              frontend, styled using TailwindCSS, featuring real‑time data
              rendering from an API and Razorpay integration for payments."
      />
      <ProjectCard
        image={InstagramClone}
        title={"Instagram Clone"}
        link="https://9r2inq.csb.app/"
        disc="Developed a Instagram Clone with a HTML and CSS Developed a Instagram Clone with a HTML and CSSDeveloped a Instagram Clone with a HTML and CSS "
      />

      <ProjectCard
        image={PotentiaImage}
        title={"Potentia Acedmy"}
        link="https://potencia-academy.vercel.app/"
        disc="Developed a Educational platform with a React.js
              frontend, styled using Bootstap."
      />
      <ProjectCard
        image={Zomato}
        title={"Zomato Clone"}
        link="https://zomato-clone-lemon-tau.vercel.app/"
        disc="Developed a Zomato Clone with a HTML and CSS Developed a Instagram Clone with a HTML and CSSDeveloped a Instagram Clone with a HTML and CSS "
      />
      <ProjectCard
        image={LagendaryBookStore}
        title={"Legendary Book Store"}
        link="https://abhishek7a.github.io/legendaryBookStore/"
        disc="Developed a full‑stack project with a React frontend and  MongoDB Atlas as the backend database, featuring an intuitive search bar, bookmarking functionality, custom toast notifications."
      />
    </>
  );
}
//
//
