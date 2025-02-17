import { Box, Typography, Card, useTheme, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { donationAmount, milestones, percentage } from "../data/donors";

export default function ProgressBar() {
  const theme = useTheme();
  const formatAmount = (amount: number) => {
    return amount >= 1_000_000 ? `${amount / 1_000_000}M` : amount;
  };

  return (
    <Card
      sx={{
        width: "80%",
        margin: "auto",
        textAlign: "center",
        padding: 3,
        borderRadius: "15px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        boxShadow: 3,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "Goldman, serif",
          fontSize: "30px",
          marginBottom: "20px",
          color: "rgba(255, 255, 255, 0.9)",
          WebkitTextStroke: "1px #fff",
        }}
      >
        Progress: {donationAmount.toLocaleString()} VND
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          marginBottom: 3,
          overflow: "visible",
        }}
      >
        {/* White Bar as Background */}
        <Box
          sx={{
            height: 30,
            borderRadius: 5,
            backgroundColor: theme.palette.grey[200],
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />

        {/* Rainbow and Cat Animation */}
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
          style={{
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            position: "relative",
            zIndex: 3, // Ensure rainbow and cat are above the white bar
            overflow: "visible",
          }}
        >
          <Box
            sx={{
              height: "85px",
              width: "100%",
              position: "absolute",
              top: "-27px",
              left: 0,
              backgroundImage: "url(/src/assets/media/rainbow.gif)",
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 85px",
              zIndex: 2, // Ensure rainbow is above white bar
            }}
          />
          <img
            src="/src/assets/media/cat.gif"
            alt="Nyan Cat"
            style={{
              height: "50px",
              position: "absolute",
              top: "-9px",
              right: "-20px",
              zIndex: 4, // Ensure cat is above everything
            }}
          />
        </motion.div>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
          marginTop: 2,
        }}
      >
        {milestones.map((milestone) => (
          <Card
            key={milestone.id}
            sx={{
              maxWidth: 150,
              minWidth: 150,
              position: "relative",
              border:
                donationAmount >= milestone.amount ? "2px solid gold" : "none", // Highlight if achieved
              boxShadow: donationAmount >= milestone.amount ? 6 : 1, // Add highlight shadow
              opacity: donationAmount >= milestone.amount ? 1 : 0.7, // Highlight card opacity
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="body1"
                sx={{ fontFamily: "Goldman, serif" }}
              >
                {milestone.activity}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontFamily: "Goldman, serif" }}
              >
                {formatAmount(milestone.amount)}
              </Typography>

              {/* Milestone Illustration */}
              <Box sx={{ textAlign: "center", marginTop: 2 }}>
                <img
                  src={milestone.illustration} // Dynamic image for each milestone
                  alt={milestone.activity}
                  style={{
                    width: "auto",
                    height: "60px",
                    marginBottom: "10px",
                  }}
                />
              </Box>

              {/* Achievement Badge */}
              {donationAmount >= milestone.amount && (
                <img
                  src="/src/assets/media/achieve.png" // Your achievement badge image
                  alt="Milestone Completed"
                  style={{
                    width: "auto",
                    height: "80px",
                    marginTop: "10px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    opacity: "0.8",
                  }}
                />
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Card>
  );
}
