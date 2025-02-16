/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/ProgressBar.jsx
import {
  LinearProgress,
  Box,
  Typography,
  Card,
  useTheme,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { donationAmount, milestones, percentage } from "../data/donors";

export default function ProgressBar() {
  const theme = useTheme();
  const formatAmount = (amount: any) => {
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
      {/* Donation Amount Title */}
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

      {/* Progress Bar with Motion Animation */}
      <Box sx={{ position: "relative", width: "100%", marginBottom: 3 }}>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${100}%` }}
          transition={{ duration: 1 }}
        >
          <LinearProgress
            variant="determinate"
            value={percentage}
            sx={{
              height: 30,
              borderRadius: 5,
              backgroundColor: theme.palette.grey[200],
              fontFamily: "Goldman, serif",
            }}
          />
        </motion.div>

        {/* Milestone Indicators Over the Progress Bar */}
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            transform: "translateY(-50%)",
            padding: "0 10px",
          }}
        >
          {milestones.map((milestone) => (
            <Typography
              key={milestone.id}
              sx={{
                fontFamily: "Goldman, serif",
                fontSize: 12,
                fontWeight: "bold",
                color:
                  donationAmount >= milestone.amount
                    ? theme.palette.success.main
                    : theme.palette.text.secondary,
              }}
            >
              {formatAmount(milestone.amount)}
            </Typography>
          ))}
        </Box> */}
      </Box>

      {/* Milestone Cards Below the Progress Bar */}
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
          <Card sx={{ maxWidth: 150, minWidth: 150 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="body1"
                sx={{
                  fontFamily: "Goldman, serif",
                }}
              >
                {milestone.activity}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontFamily: "Goldman, serif" }}
              >
                {formatAmount(milestone.amount)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Card>
  );
}
