import React from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import millify from "millify";
import { Stack, Typography, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos, Loading } from "./";
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
        <Loading />
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
          <Box sx={{ width: "100%", mt: 2 }}>
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
          sx={{
            borderLeft: "1px solid #3d3d3d",
            borderBottom: "1px solid #3d3d3d",
            height: { md: "95vh", sm: "auto" },
            px: { sx: 0, md: 2 },
          }}
        >
          <Typography
            variant="h5"
            mb={{ xs: 3, sm: 3, md: 1 }}
            px={3}
            py={1}
            color="#fff"
            sx={{
              backgroundColor: "darkred",
              borderRadius: "20px",
            }}
          >
            Related Videos
          </Typography>
          <Stack
            sx={{
              overflowY: "auto",
              height: { sx: "auto", md: "92%" },
              flexDirection: { md: "column" },
            }}
          >
            <Videos direction="column" videoId={id} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
