import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.NEXT_PUBLIC_API_URL,
    baseUrl: "https://filesurebackend.vercel.app/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.accessToken || "";
      console.log({ token });
      if (token) {
        headers.set("Authorization", `${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
