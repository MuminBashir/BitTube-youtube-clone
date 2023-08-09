import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const youtubeApiHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
};

const baseUrl = "https://youtube-v31.p.rapidapi.com";

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: (selectedCategory) => {
        return {
          url: `/search?part=snippet&q=${selectedCategory}`,
          headers: youtubeApiHeaders,
          params: { maxResults: "50", regionCode: "IN" },
        };
      },
    }),
  }),
});

export const { useGetVideosQuery } = youtubeApi;
