import { useState, useEffect } from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import ProgressBar from "../components/ProgressBar";
import TopDonorsTable from "../components/TopDonorsTable";
import DonationInfo from "../components/BankInfo";

const Home = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* Video Background with delay */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -10,
          overflow: "hidden",
          background: "url('/media/background_2.webm') center/cover no-repeat", // Low-res preview
        }}
      >
        <video
          autoPlay
          playsInline
          loop
          muted
          preload="auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "0",
            animation: "fadeIn 2s ease-in-out forwards",
          }}
        >
          <source src="/media/background_2.webm" type="video/webm" />
        </video>
      </Box>

      {/* Content on top with skeleton placeholders */}
      <Box
        sx={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100vw",
          minHeight: "100vh",
          textAlign: "center",
          paddingBottom: "50px",
        }}
      >
        <Box sx={{ mt: { xs: 5, md: 15 } }}>
          {contentLoaded ? (
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Oi", sans-serif',
                fontSize: "clamp(1.5rem, 8vw, 4rem)",
                backgroundColor: "transparent",
                color: "#ffffff",
                WebkitTextStroke: "3px black",
                textAlign: "center",
                display: "block",
                lineHeight: { xs: "1.2", md: "1.1" },
                whiteSpace: { xs: "normal", md: "nowrap" },
                wordSpacing: "0.2em",
                padding: "0 5%",
                animation: "fadeIn 1s ease-in-out, glow 2s infinite alternate",
                "@keyframes fadeIn": {
                  from: { opacity: 0, transform: "translateY(-20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <span
                style={{
                  color: "#ff66c4",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                MISTHY'S VƯỜN MÍT
              </span>
              <span style={{ color: "#89fff8", display: "inline" }}>
                CONCERT{" "}
              </span>
              <span style={{ color: "#ffffff", display: "inline" }}>
                PROJECT
              </span>
            </Typography>
          ) : (
            <Skeleton
              variant="text"
              width="60%"
              height={80}
              sx={{ mx: "auto" }}
            />
          )}
        </Box>

        <Box sx={{ mt: 2 }}>
          {contentLoaded ? (
            <ProgressBar />
          ) : (
            <Skeleton
              variant="rectangular"
              width="80%"
              height={40}
              sx={{ mx: "auto" }}
            />
          )}
        </Box>
        <Box sx={{ mt: 2 }}>
          {contentLoaded ? (
            <TopDonorsTable />
          ) : (
            <Skeleton
              variant="rectangular"
              width="80%"
              height={200}
              sx={{ mx: "auto" }}
            />
          )}
        </Box>
        <Box sx={{ mt: 2 }}>
          {contentLoaded ? (
            <DonationInfo />
          ) : (
            <Skeleton
              variant="rectangular"
              width="80%"
              height={100}
              sx={{ mx: "auto" }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
