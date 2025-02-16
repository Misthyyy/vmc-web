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
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
        <Box sx={{ mt: 20 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Goldman", serif',
              fontSize: "4rem",
              backgroundColor: "transparent",
              color: "rgba(255, 255, 255, 0.9)",
              WebkitTextStroke: "1px #fff",
              textAlign: "center",
              display: "flex",
              paddingBottom: "10px",
              justifyContent: "center",
              alignItems: "center",
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
              "@keyframes glow": {
                "0%": {
                  textShadow:
                    "0 0 5px #fff, 0 0 10px #ff00ff, 0 0 15px #ff00ff",
                },
                "100%": {
                  textShadow:
                    "0 0 10px #fff, 0 0 20px #ff00ff, 0 0 30px #ff00ff",
                },
              },
            }}
          >
            MISTHY'S VƯỜN MÍT <br />
            CONCERT PROJECT
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
