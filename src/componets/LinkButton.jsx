import React from "react";

function LinkButton({ title, url, IconComponent }) {
  // This is check the if the type of our icon is a link (string)
  const isImageIcon = typeof IconComponent === "string";

  return (
    <a
      href={url}
      target="_blank"
      rel="is_image"
      // this "group" class will allow us to style the children
      className="group flex items-center justify-between w-full p-4 mb-4 bg-white hover:bg-zinc-100 border border-zinc-100 rounded-[24px] transition-all duration-200 shadow-sm text-left"
    >
      {/* This is the leftside container */}

      <div className="flex items-center gap-4">
        {/* This is the icon square if we get one */}
        {IconComponent && (
          <div className="w-12 h-12 shrink-0 bg-[#eef2f6] group-hover:bg-[#e2e8f0] rounded-[16px] flex items-center justify-center text-[#1d4ed8] transition-colors duration-200 overflow-hidden">
            {/* Checks if it has a path to reder a img or a Lucide vector block */}
            {isImageIcon ? (
              <img
                src={IconComponent}
                alt={`${title} logo`}
                className="w-full h-full object-cover"
              />
            ) : (
              <IconComponent size={22} strokeWidth={2.2} />
            )}
          </div>
        )}

        {/* This is the bold tittle of the text */}
        <span className="font-bold text-zinc-900 text-lg tracking-tight">
          {title}
        </span>
      </div>

      {/* This is the right sid conatainer: it has an arrow */}
      <div className="text-zinc-400 group-hover:text-zinc-600 transition-colors duration-200 pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5" // This math brings in our arrow
          />
        </svg>
      </div>
    </a>
  );
}

export default LinkButton;
