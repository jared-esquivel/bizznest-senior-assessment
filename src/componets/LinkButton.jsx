import React from "react";

function LinkButton({ title, url, IconComponent }) {
  const isImageIcon = typeof IconComponent === "string";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between w-full p-3 sm:p-4 mb-3 bg-white hover:bg-zinc-50 border border-zinc-100/80 rounded-[20px] sm:rounded-[24px] transition-all duration-200 shadow-sm text-left touch-manipulation active:scale-[0.99]"
    >
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        {IconComponent && (
          <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 bg-[#eef2f6] group-hover:bg-[#e2e8f0] rounded-[14px] sm:rounded-[16px] flex items-center justify-center text-[#1d4ed8] transition-colors duration-200 overflow-hidden">
            {isImageIcon ? (
              <img
                src={IconComponent}
                alt={`${title} logo`}
                className="w-full h-full object-cover"
              />
            ) : (
              <IconComponent
                className="w-5 h-5 sm:w-[22px] sm:h-[22px]"
                strokeWidth={2.2}
              />
            )}
          </div>
        )}

        {/* Added min-w-0 and truncation to safely contain extra-long titles on mobile */}
        <span className="font-bold text-zinc-900 text-base sm:text-lg tracking-tight truncate pr-1">
          {title}
        </span>
      </div>

      <div className="text-zinc-300 group-hover:text-zinc-500 transition-colors duration-200 shrink-0 pr-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.8}
          stroke="currentColor"
          className="w-3.5 h-3.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </a>
  );
}

export default LinkButton;
