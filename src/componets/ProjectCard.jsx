import React, { useState } from "react";
import { MousePointerClick } from "lucide-react";

function ProjectCard({ title, description, backgroundImage, link }) {
  // 1. Just a simple click counter starting at 0
  const [clicks, setClicks] = useState(0);

  // 2. Simple function that adds 1 every time you click
  const handleCardClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleCardClick}
      className="relative block w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-zinc-800 bg-zinc-950 mb-6 group"
    >
      {/* Background Project Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-all duration-300"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark tint over the image so text is easy to read */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Real Counter Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-700 text-white text-xs font-medium">
        <MousePointerClick className="w-3.5 h-3.5 text-emerald-400" />
        <span>{clicks} clicks on this visit</span>
      </div>

      {/* Text on the bottom of the card */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col text-left">
        <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1">
          Featured Project
        </span>
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-xs text-zinc-300 leading-relaxed max-w-[90%]">
          {description}
        </p>
      </div>
    </a>
  );
}

export default ProjectCard;
