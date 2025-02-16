import { Box, Typography } from "@mui/material";
import ProgressBar from "../components/ProgressBar";
import TopDonorsTable from "../components/TopDonorsTable";
import DonationInfo from "../components/BankInfo";
// import SocialLinks from "../components/SocialLinks";
import backgroundVideo from "../assets/media/background_2.mp4";

const Home = () => {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* Video Background */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1, // Keeps the video behind the content
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "0.8",
          }}
          src={backgroundVideo}
        />
      </Box>

      {/* Content on top */}
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
        <Box sx={{ mt: { xs: 10, md: 20 } }}>
          {" "}
          {/* Adjust margin for small screens */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Oi", sans-serif',
              fontSize: "clamp(2rem, 6vw, 4rem)", // Responsive font size
              backgroundColor: "transparent",
              color: "#ffffff",
              WebkitTextStroke: "3px black", // Thick black outline
              textAlign: "center",
              display: "block",
              justifyContent: "center",
              alignItems: "center",
              lineHeight: "1.1", // Reduce spacing between lines
              whiteSpace: "nowrap", // Prevents line breaks
              padding: "0 10px", // Add some padding for smaller screens
              animation: "fadeIn 1s ease-in-out, glow 2s infinite alternate",
              "@keyframes fadeIn": {
                from: {
                  opacity: 0,
                  transform: "translateY(-20px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <span
              style={{
                color: "#ff66c4",
                display: "inline-block",
                marginBottom: "5px",
              }}
            >
              MISTHY'S VƯỜN MÍT
            </span>
            <br />
            <span style={{ color: "#89fff8" }}>CONCERT </span>
            <span style={{ color: "#ffffff" }}>PROJECT</span>
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <ProgressBar />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TopDonorsTable />
        </Box>
        <Box sx={{ mt: 2 }}>
          <DonationInfo />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
