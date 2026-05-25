import React from "react";
import "./App.css";

// These are our Reusable UI componets
import ProfileAvatar from "./componets/ProfileAvatar.jsx";
import LinkButton from "./componets/LinkButton.jsx";
import ProjectCard from "./componets/ProjectCard.jsx";

// These are vector Icons from Lucide React
import { Terminal, User, FileText, Folder, Newspaper } from "lucide-react";

// These are media assets being imported
import HackWatsonvilleLogo from "./assets/hackwatsonville-logo.webp";
import CabrilloHonorsClub from "./assets/CabrilloHonorsClub-logo.webp";
import ProjectBackground from "./assets/project-bg.webp";
import Lookout from "./assets/LookoutSantacruzLogo.webp";
import Background from "./assets/bg.webp";

function App() {
  // Storing links in an array is faster than copy and pasting them
  const linksData = [
    {
      title: "Explore Portfolio",
      url: "https://jared-esquivel.github.io/Jared-Esquivel-s-Portfolio-/",
      IconComponent: Folder,
    },
    {
      title: "GitHub",
      url: "https://github.com/jared-esquivel",
      IconComponent: Terminal,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/jared-esquivel-0a699632a/",
      IconComponent: User,
    },
    {
      title: "Résumé",
      url: "https://docs.google.com/document/d/1xftrHe08N7Z4mA4a2XI278PutR-lzjn4/edit?usp=sharing&ouid=103862160462904518417&rtpof=true&sd=true",
      IconComponent: FileText,
    },
    {
      title: "Media & Recognition",
      url: "https://www.santacruzworks.org/news/meet-the-ahsc-interns-jared-esquivel-at-innovation-within",
      IconComponent: Newspaper,
    },
    {
      title: "HackWatsonville",
      url: "https://jared-esquivel.github.io/hackwatsonville-site/",
      IconComponent: HackWatsonvilleLogo,
    },
    {
      title: "Cabrillo Honors Club",
      url: "https://jared-esquivel.github.io/Honors_Club_Webpage/",
      IconComponent: CabrilloHonorsClub,
    },
    {
      title: "Published Author: Lookout",
      url: "https://lookout.co/unsung-santa-cruz-digital-nest-provides-a-powerful-space-for-latinx-youth-to-grow-tech-skills/story",
      IconComponent: Lookout,
    },
  ];

  return (
    // Our Main Bacground
    // I use Tailwind for responsiveness, centering things and coloring.
    <div
      className="w-full min-h-screen bg-cover bg-no-repeat bg-fixed px-4 sm:px-6 py-8 flex flex-col items-center select-none antialiased overflow-y-auto"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center top",
      }}
    >
      {/* This is a Content Wrapper and it takes care of max width for mobile and desktop */}
      <div className="w-full max-w-md flex flex-col items-center text-center mt-4 sm:mt-10">
        {/* Our Profile Header section */}
        <header className="mb-6 w-full flex flex-col items-center">
          <ProfileAvatar />
          <h1 className="text-2xl font-black mt-4 text-white tracking-tight">
            Jared Esquivel
          </h1>
          <p className="text-white mt-2 text-xs sm:text-sm font-medium px-2 sm:px-4 leading-relaxed">
            HackWatsonville Founder | Web Dev Associate @ BizzNEST | National
            Hispanic Heritage Youth Awardee in Technology
          </p>
          <p className="text-white font-bold text-lg sm:text-xl pt-3 px-2">
            "Connecting students with opportunities in engineering and
            technology. Coffee enthusiast ☕"
          </p>
        </header>

        {/* Label for our Custom Feature Block */}
        <div className="w-full text-left px-1 mb-2">
          <h2 className="text-[10px] sm:text-xs font-black text-white uppercase tracking-widest pl-1">
            Project Spotlight
          </h2>
        </div>

        {/* Main Content Begins in this container */}
        <main className="w-full px-1 flex flex-col gap-1.5">
          {/* Our Custom Feature Componet: Project Spotlight */}
          <ProjectCard
            title="Prompt-Us-Pizzeria"
            description="An interactive 2D simulation built with JavaScript OOP to manage custom station logic and modular game states."
            backgroundImage={ProjectBackground}
            link="https://prompt-us-pizzeria.pages.dev/"
          />

          {/* Iterates through our link data array and also
          leaves a styled link navibation :D */}
          {linksData.map((link, index) => (
            <LinkButton
              key={index}
              title={link.title}
              url={link.url}
              IconComponent={link.IconComponent}
            />
          ))}
        </main>

        {/* Footer Block */}
        <footer className="w-full mt-12 mb-4 pt-6 border-t border-white text-center flex flex-col gap-1">
          <p className="text-[11px] font-semibold text-white tracking-wide">
            © {new Date().getFullYear()} Jared Esquivel. All rights reserved.
          </p>
          <p className="text-[10px] font-medium text-white">
            "Don't wait for opportunities, build them!"
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
