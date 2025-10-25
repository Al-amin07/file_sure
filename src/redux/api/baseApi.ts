import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://file-sure-server.vercel.app/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.accessToken || "vfgd";
      console.log({ token });
      if (token) {
        headers.set("Authorization", `${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
