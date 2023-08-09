import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

import { useGetVideosQuery } from "../utils/youtubeapi";

const Videos = ({ selectedCategory }) => {
  const { data: videos, isFetching } = useGetVideosQuery(selectedCategory);
  if (isFetching) {
    return "loading...";
  }
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos?.items?.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetails={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
