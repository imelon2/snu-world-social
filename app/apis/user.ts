import { headers } from "next/headers";
import { baseApi } from "./base";

export const loginApi = async (code: string) => {
  try {
    const response = await baseApi.post("login", { code });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const userMeApi = async (sessionToken: string) => {
  try {
    const response = await baseApi.get("users/me", {
      headers: {
        "World-Sns-Session": sessionToken,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
