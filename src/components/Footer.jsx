import React from "react";
import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = ({ smHide }) => {
  return (
    <Typography
      className={smHide ? "copyright" : ""}
      variant="body2"
      sx={{
        my: 1.5,
        color: "#fff",
        textAlign: "center",
        display: { md: !smHide ? "none" : "block" },
      }}
    >
      BitTube | &copy; All rights reserved
      <br />
      Developed by
      <FavoriteIcon
        fontSize="small"
        sx={{ color: "#F31503", position: "relative", top: "3px", mx: 0.5 }}
      />
      <a href="https://github.com/MuminBashir" target="_blank" rel="noreferrer">
        Mumin Bashir
      </a>
    </Typography>
  );
};

export default Footer;
