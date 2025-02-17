import { Box, Typography } from "@mui/material";
import ProgressBar from "../components/ProgressBar";
import TopDonorsTable from "../components/TopDonorsTable";
import DonationInfo from "../components/BankInfo";
// import SocialLinks from "../components/SocialLinks";

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
          src="/media/background_2.mp4"
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
        <Box sx={{ mt: { xs: 5, md: 15 } }}>
          {" "}
          {/* Adjust top margin for different screens */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Oi", sans-serif',
              fontSize: "clamp(1.5rem, 8vw, 4rem)", // Adjust dynamically for mobile/desktop
              backgroundColor: "transparent",
              color: "#ffffff",
              WebkitTextStroke: "3px black", // Reduce thickness for better mobile clarity
              textAlign: "center",
              display: "block",
              lineHeight: { xs: "1.2", md: "1.1" }, // Adjust line spacing for smaller screens
              whiteSpace: { xs: "normal", md: "nowrap" }, // Allow wrapping on mobile, no wrap on desktop
              wordSpacing: "0.2em", // Add slight spacing for readability
              padding: "0 5%", // Prevent text from touching edges on small screens
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
                display: "block",
                marginBottom: "5px",
              }}
            >
              MISTHY'S VƯỜN MÍT
            </span>
            <span style={{ color: "#89fff8", display: "inline" }}>
              CONCERT{" "}
            </span>
            <span style={{ color: "#ffffff", display: "inline" }}>PROJECT</span>
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
