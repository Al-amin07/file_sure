import { baseApi } from "../baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    order: builder.mutation({
      query: (data) => ({
        url: "/order",
        method: "POST",
        body: data,
      }),
    }),
    history: builder.query({
      query: () => ({
        url: "/order/history",
      }),
    }),
  }),
});

export const { useOrderMutation, useHistoryQuery } = orderApi;
