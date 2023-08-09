import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

import {
  useGetSearchVideosQuery,
  useGetChannelVideosQuery,
  useGetRelatedVideosQuery,
} from "../utils/youtubeapi";

const Videos = ({ selectedCategory, channelId, videoId, direction }) => {
  const { data: videos, isFetching } =
    useGetSearchVideosQuery(selectedCategory);
  const { data: videos2, isFetching: isFetching2 } =
    useGetChannelVideosQuery(channelId);
  const { data: videos3, isFetching: isFetching3 } =
    useGetRelatedVideosQuery(videoId);

  if (isFetching || isFetching2 || isFetching3) {
    return (
      <Box
        style={{
          width: "100%",
          height: "80%",
          display: "Flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "2rem",
        }}
      >
        Loading...
      </Box>
    );
  }

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={3}
    >
      {selectedCategory &&
        videos?.items?.map((item, i) => (
          <Box key={i}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetails={item} />}
          </Box>
        ))}
      {channelId &&
        videos2?.items?.map((item, i) => (
          <Box key={i}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetails={item} />}
          </Box>
        ))}
      {videoId &&
        videos3?.items?.map((item, i) => (
          <Box key={i}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetails={item} />}
          </Box>
        ))}
    </Stack>
  );
};

export default Videos;
