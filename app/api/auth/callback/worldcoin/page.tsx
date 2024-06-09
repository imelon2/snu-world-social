"use client";
import { loginApi } from "@/app/apis/user";
import { useSearchParams,useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const params = useSearchParams();
  
  useEffect(() => {
    callback();
  },[router,params])

  const callback = async () => {
    try {
      const code = params.get('code')
  
      if(!code){
        router.push("/");
        return;
      }
  
      const res = await loginApi(code!)
      localStorage.setItem("World-Sns-Session",res!.data.sessionToken)
      router.push("/me");
    } catch (error) {
      router.push("/");
    }
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center align-middle min-h-screen">
        ...
      </div>
    </>
  );
}

// function Home() {
//   const token = async () => {

//     // console.log(result.data);

//   };
//   return (
//     <div>
//       Redirected here with token: {"token"}
//       <button onClick={token}>Wolrd ID 검증하기</button>
//     </div>
//   );
// }

// export default CallbackPage;

// http://localhost:3000/api/auth/callback/worldcoin
