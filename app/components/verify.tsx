"use client";

import { useState } from "react";
import user from "../mock/user.json";

export default function Verify() {
  const [profile, setProfile] = useState(false);

  const toggle = () => {
    setProfile(!profile);
  };

  return (
    <>
      <button onClick={toggle}>
        <div className="border hover:bg-blue-500 p-2 font-semibold">
          {profile ? "Logout" : "Verify with World ID"}
        </div>
      </button>
      {profile &&
        user.map((element) => {
          return (
            <div key={element.id} className="">
              <div className="font-bold">@{element.username}</div>
              <div>✅: {element.verificationLevel}</div>
              <div>
                👛:{" "}
                {element.address.substring(0, 6) +
                  "..." +
                  element.address.substring(element.address.length - 4)}
              </div>
              <div>🌏: {element.worldBalance}</div>
            </div>
          );
        })}
    </>
  );
}
