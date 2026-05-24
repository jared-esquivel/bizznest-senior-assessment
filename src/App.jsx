import React from "react";
import "./App.css";
import ProfileAvatar from "./componets/ProfileAvatar.jsx";
import LinkButton from "./componets/LinkButton.jsx";
import { Terminal, User, FileText, Folder } from "lucide-react";

import HackWatsonvilleLogo from "./assets/hackwatsonville-logo.png";

function App() {
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
      title: "HackWatsonville",
      url: "https://jared-esquivel.github.io/hackwatsonville-site/", // Or your preferred landing page
      IconComponent: HackWatsonvilleLogo, // 2. Pass the imported image path straight in!
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f4f6] to-[#e5e7eb] p-6 flex flex-col items-center">
      <div className="w-full max-w-md flex flex-col items-center text-center mt-10">
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
          <div className="flex items-center gap-1.5 mt-3 text-blue-500 font-bold text-xs tracking-wide ">
            <span>📍</span>
            <span>Santa Cruz County</span>
          </div>
        </header>

        <main className="w-full px-2">
          {linksData.map((link, index) => (
            <LinkButton
              key={index}
              title={link.title}
              url={link.url}
              IconComponent={link.IconComponent}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
