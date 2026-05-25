import React, { useState } from "react";
import { MousePointerClick } from "lucide-react";

function ProjectCard({ title, description, backgroundImage, link }) {
  // This is track the amount of times someone clicks our project
  const [clicks, setClicks] = useState(0);

  // This is a function that adds 1+ every time the card is clicked
  const handleCardClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      // This is what calls our function for clicking
      onClick={handleCardClick}
      className="relative block w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-zinc-800 bg-zinc-950 mb-6 group"
    >
      {/* This is the background that fades when you hover a mouse over it */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-all duration-300"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* This is a shadow that goes over our background so we can read the white text*/}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

      {/* This button is sitting at the top right */}
      <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-700 text-white text-xs font-medium">
        <MousePointerClick className="w-3.5 h-3.5 text-white" />
        {/* This shows how many times it has been clicked */}
        <span>{clicks} clicks on this visit</span>
      </div>

      {/* This is the text that goes underneath the card */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col text-left">
        <span className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">
          Featured Project
        </span>
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white transition-colors duration-200">
          {title}
        </h3>
        <p className="text-xs text-white leading-relaxed max-w-[90%]">
          {description}
        </p>
      </div>
    </a>
  );
}

export default ProjectCard;
