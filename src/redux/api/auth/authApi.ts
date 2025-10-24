import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: ({ data, referralCode }) => {
        console.log({ data, referralCode });
        return {
          url: `user/register${referralCode ? `?r=${referralCode}` : ""}`,
          method: "POST",

          body: data,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
