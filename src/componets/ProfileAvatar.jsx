import React from "react";
import Headshot from "../assets/Jared-Esquivel-Headshot.webp";

function ProfileAvatar() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-zinc-200 border-2 border-zinc-300 flex items-center justify-center relative shadow-sm">
        <img
          src={Headshot}
          alt="Jared Esquivel"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ProfileAvatar;
