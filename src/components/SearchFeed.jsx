import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { Videos } from "./";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", ml: { xs: 0, md: 10 } }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span>
      </Typography>
      <Box display="flex">
        <Videos selectedCategory={searchTerm} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
