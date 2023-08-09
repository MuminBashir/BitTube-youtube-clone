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
    getSearchVideos: builder.query({
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
    getChannelDetails: builder.query({
      query: (id) => {
        return {
          url: `/channels`,
          headers: youtubeApiHeaders,
          params: { part: "snippet,statistics", id },
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
    getVideoDetails: builder.query({
      query: (id) => {
        return {
          url: `/videos`,
          headers: youtubeApiHeaders,
          params: {
            maxResults: "50",
            part: "snippet,statistics",
            id,
          },
        };
      },
    }),
    getRelatedVideos: builder.query({
      query: (id) => {
        return {
          url: `/search`,
          headers: youtubeApiHeaders,
          params: {
            maxResults: "20",
            part: "id,snippet",
            relatedToVideoid: id,
            type: "video",
          },
        };
      },
    }),
  }),
});

export const {
  useGetSearchVideosQuery,
  useGetChannelDetailsQuery,
  useGetChannelVideosQuery,
  useGetVideoDetailsQuery,
  useGetRelatedVideosQuery,
} = youtubeApi;
