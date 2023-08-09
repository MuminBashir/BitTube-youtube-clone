import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";

import { useGetChannelQuery } from "../utils/youtubeapi";

const ChannelDetail = () => {
  const { id } = useParams();

  const { data: channelDetail, isFetching } = useGetChannelQuery(id);

  if (isFetching) {
    return (
      <Box
        style={{
          width: "100%",
          height: "95vh",
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
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard
          channelDetails={channelDetail?.items?.[0]}
          marginTop="-110px"
        />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos id={id} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
