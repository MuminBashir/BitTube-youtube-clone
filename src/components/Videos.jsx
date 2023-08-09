import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

import {
  useGetVideosQuery,
  useGetChannelVideosQuery,
} from "../utils/youtubeapi";

const Videos = ({ selectedCategory, id }) => {
  const { data: videos, isFetching } = useGetVideosQuery(selectedCategory);
  const { data: videos2, isFetching: isFetching2 } =
    useGetChannelVideosQuery(id);

  console.log(videos);

  if (isFetching || isFetching2) {
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
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={3}>
      {selectedCategory &&
        videos?.items?.map((item, i) => (
          <Box key={i}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetails={item} />}
          </Box>
        ))}
      {id &&
        videos2?.items?.map((item, i) => (
          <Box key={i}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetails={item} />}
          </Box>
        ))}
    </Stack>
  );
};

export default Videos;
