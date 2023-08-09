import React from "react";
import { Link } from "react-router-dom";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoProfilePicture, demoChannelUrl } from "../utils/constants";

const ChannelCard = ({ channelDetails, marginTop }) => {
  const channelId = channelDetails?.id?.channelId;
  const snippet = channelDetails?.snippet;
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "260px" },
        height: "326px",
        margin: "auto",
        marginTop
      }}
    >
      <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {snippet?.title}
            <CheckCircle sx={{ fontSize: 15, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetails?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetails?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
