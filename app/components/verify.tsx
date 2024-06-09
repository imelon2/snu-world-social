"use client";
import { useEffect, useState } from "react";
// import user from "../mock/user.json";
import { userMeApi } from "../apis/user";
import { useRouter } from "next/navigation";

export default function Verify() {
  const [user, setUser] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem("World-Sns-Session");
    if (!storedData) return;
    getInfo(storedData);
  }, []);

  const getInfo = async (session: string) => {
    const user = await userMeApi(session);
    setUser(user?.data.user);
  };

  const toggle = () => {
    if(user) {
      logout()
    } else {
      login()
    }
  }

  const login = () => {
    router.push(
      "https://id.worldcoin.org/authorize?redirect_uri=http://localhost:3000/api/auth/callback/worldcoin&response_type=code&scope=openid+profile+email&client_id=app_staging_50b34237d4df42e937aa85d71b30d3a4"
    );
  };
  const logout = () => {
    localStorage.setItem("World-Sns-Session", "");
    setUser("");
  };

  const parseAddress = (address: string) => {
    return (
      address.substring(0, 6) + " ... " + address.substring(address.length - 4)
    );
  };

  return (
    <>
      <button onClick={toggle}>
        <div className="border hover:bg-blue-500 p-2 font-semibold">
          {user ? "Logout" : "Verify with World ID"}
        </div>
      </button>
      {user && (
        <div key={user.emain} className="">
          <div className="font-bold">@{user.name}</div>
          <div>✅: {user.verificationLevel}</div>
          <div>👛 {parseAddress(user.email.split("@")[0])}</div>
          <div>🌏: {user.worldBalance}</div>
        </div>
      )}
    </>
  );
}
