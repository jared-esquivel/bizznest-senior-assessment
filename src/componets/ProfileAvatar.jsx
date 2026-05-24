import React from "react";

function ProfileAvatar() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-32 h-32 rounded-full overflow-hidden bg-zinc-200 border-2 border-zinc-300 flex items-center justify-center relative">
        <img
          src="/src/assets/Jared-Esquivel-Headshot.png"
          alt="Jared Esquivel"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ProfileAvatar;
