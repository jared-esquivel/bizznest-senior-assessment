import React from "react";
import "./App.css";
import ProfileAvatar from "./componets/ProfileAvatar.jsx";

function App() {
  return (
    // min-h-screen covers full height, bg changes backdrop, p-4 gives space around edges

    <div className="min-h-screen bg-zinc-50 p-4 flex flex-col items-center">
      {/* Max width limits this container to 480px (typical mobile width) even on desktop */}

      <div className="w-full max-w-md flex flex-col items-center text-center mt-10">
        {/* 01: Profile Section */}

        <header className="mb-8 w-full flex flex-col items-center">
          <ProfileAvatar />

          <h1 className="text-2xl font-bold mt-4 text-zinc-900">
            Jared Esquivel
          </h1>
          <p className="text-zinc-600 mt-2 text-sm px-4">
            HackWatsonville Founder | Web Dev Associate @ BizzNEST | National
            Hispanic Heritage Youth Awardee in Technology
          </p>

          <p className="text-red-600 font-bold pt-4">
            Connecting students with opportunities in engineering and
            technology. Coffee enthusiast ☕
          </p>

          {/* Our Location Section */}

          <div className="flex items-center gap-1.5 mt-3 text-blue-500 font-bold text-xs tracking-wide ">
            <span>📍</span>
            <span>Santa Cruz County</span>
          </div>
        </header>

        {/* 02: Link List Section */}

        <main className="w-full">{/* Links will go here */}</main>
      </div>
    </div>
  );
}

export default App;
