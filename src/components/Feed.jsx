import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Sidebar, Videos } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "93vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ my: 1.5, color: "#fff" }}
        >
          BitTube | &copy; All rights reserved
          <br />
          Developed by
          <FavoriteIcon
            fontSize="small"
            sx={{ color: "#F31503", position: "relative", top: "3px", mx: 0.5 }}
          />
          <a
            href="https://github.com/MuminBashir"
            target="_blank"
            rel="noreferrer"
          >
            Mumin Bashir
          </a>
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos selectedCategory={selectedCategory} />
      </Box>
    </Stack>
  );
};

export default Feed;
