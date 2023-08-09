import React from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import millify from "millify";
import { Stack, Typography, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { useGetVideoDetailsQuery } from "../utils/youtubeapi";

const VideoDetail = () => {
  const { id } = useParams();
  const { data: video, isFetching } = useGetVideoDetailsQuery(id);

  if (isFetching) {
    return (
      <Box
        minHeight="95vh"
        color="white"
        fontSize="2rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Loading...
      </Box>
    );
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = video?.items?.[0];

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "13px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" textAlign="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {millify(viewCount)} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {millify(likeCount)} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Stack
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5" mb={2} px={3} py={1} color="#fff" sx={{backgroundColor: "darkred", borderRadius: "20px"}}>
            Related Videos
          </Typography>
          <Videos direction="column" videoId={id} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
