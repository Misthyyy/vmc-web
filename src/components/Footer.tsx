import { Box, IconButton, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        minHeight: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "10px 0",
      }}
    >
      {/* Social Media Icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0",
        }}
      >
        <IconButton
          component="a"
          href="https://www.facebook.com/FCMisThy"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            fontSize: "2em",
            transition: "0.5s",
            opacity: 0.7,
            "&:hover": {
              opacity: 1,
              transform: "translateY(-5px)",
            },
          }}
        >
          <Icon icon="mdi:facebook" width="50" height="50" />
        </IconButton>

        <IconButton
          component="a"
          href="https://discord.gg/misthy"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            fontSize: "2em",
            transition: "0.5s",
            opacity: 0.7,
            marginLeft: "15px",
            "&:hover": {
              opacity: 1,
              transform: "translateY(-5px)",
            },
          }}
        >
          <Icon icon="ic:baseline-discord" width="54" height="54" />
        </IconButton>
      </Box>{" "}
      <Typography
        variant="body2"
        sx={{
          color: "#fff",
          opacity: 0.8,
          display: "flex",
          alignItems: "center",
          fontSize: "0.8rem",
          fontFamily: "Goldman, serif",
        }}
      >
        <Icon
          icon="mdi:copyright"
          width="20"
          height="20"
          style={{ marginRight: "5px" }}
        />
        Misthy's VM - All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
