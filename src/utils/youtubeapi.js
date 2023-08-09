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
          url: `/search`,
          headers: youtubeApiHeaders,
          params: {
            maxResults: "50",
            regionCode: "IN",
            part: "snippet",
            q: selectedCategory,
          },
        };
      },
    }),
    getChannel: builder.query({
      query: (id) => {
        return {
          url: `/channels`,
          headers: youtubeApiHeaders,
          params: { part: "snippet", id },
        };
      },
    }),
    getChannelVideos: builder.query({
      query: (id) => {
        return {
          url: `/search`,
          headers: youtubeApiHeaders,
          params: {
            maxResults: "50",
            part: "snippet,id",
            channelId: id,
            order: "date",
          },
        };
      },
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetChannelQuery,
  useGetChannelVideosQuery,
} = youtubeApi;
