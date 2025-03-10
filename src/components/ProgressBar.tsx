import { Box, Typography, Card, CardContent, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { milestones } from "../data/donors";
import { useEffect, useState } from "react";
import { fetchSheetData } from "../data/fetchSheet";

export default function ProgressBar() {
  const theme = useTheme();
  const formatAmount = (amount: number) => {
    return amount >= 1_000_000 ? `${amount / 1_000_000}M` : amount;
  };

  const [donationAmount, setDonationAmount] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [showSecondCat, setShowSecondCat] = useState(false);

  async function displayDonors() {
    const totalDonation = (await fetchSheetData()).totalAmount;
    const totalGoal = Math.max(...milestones.map((m) => m.amount));
    const calculatedPercentage =
      totalGoal > 0 ? (totalDonation / totalGoal) * 100 : 0;

    setDonationAmount(totalDonation);
    setPercentage(calculatedPercentage);
  }

  useEffect(() => {
    displayDonors();

    setTimeout(() => {
      setShowSecondCat(true);
    }, 3500);
  }, [percentage]);

  return (
    <Box sx={{ position: "relative", width: "100%", margin: "auto" }}>
      <Card
        sx={{
          width: { xs: "90%", sm: "80%" }, // Ensuring responsiveness
          maxWidth: "1000px", // Prevents it from stretching too much
          margin: "auto",
          textAlign: "center",
          padding: 2,
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

        <Box sx={{ position: "relative", width: "100%", marginBottom: 3 }}>
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

          {/* First Cat Animation (Progress-Based) */}
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 4 }}
            style={{
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              position: "relative",
              zIndex: 10,
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
                backgroundImage: "url(/media/rainbow.gif)",
                backgroundRepeat: "repeat-x",
                backgroundSize: "auto 85px",
                zIndex: 2,
              }}
            />
            <img
              src="/media/cat.gif"
              alt="Nyan Cat"
              style={{
                height: "50px",
                position: "absolute",
                top: "-9px",
                right: "-20px",
                zIndex: 4,
              }}
            />
          </motion.div>

          {/* Second Cat Animation (Independent, Looping) */}
          {showSecondCat && (
            <>
              <motion.div
                initial={{ x: "-30%" }}
                animate={{ x: "130%" }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                style={{
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  zIndex: 10,
                  overflow: "visible",
                }}
              >
                <img
                  src="/media/cat.gif"
                  alt="Nyan Cat"
                  style={{
                    height: "50px",
                    position: "absolute",
                    top: "-9px",
                    left: "-20px",
                    zIndex: 4,
                  }}
                />
              </motion.div>
              <Box
                sx={{
                  height: "85px",
                  width: "140%",
                  position: "absolute",
                  top: "-27px",
                  left: "-190px",
                  backgroundImage: "url(/media/rainbow.gif)",
                  backgroundRepeat: "repeat-x",
                  backgroundSize: "auto 85px",
                  zIndex: 2,
                }}
              />
            </>
          )}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // 1 per row on small screens
              sm: "1fr 1fr", // 2 per row on medium screens
              lg: "1fr 1fr 1fr 1fr", // 4 per row on large screens
            },
            gap: 4,
            margin: 2,
          }}
        >
          {milestones.map((milestone, index) => {
            const isAchieved = donationAmount >= milestone.amount;

            return (
              <Card
                key={milestone.id}
                sx={{
                  width: "100%", // Full width of the grid cell
                  height: 230,
                  position: "relative",
                  border: isAchieved ? "2px solid gold" : "none",
                  boxShadow: isAchieved ? 6 : 1,
                  overflow: "hidden",
                }}
              >
                {!isAchieved && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      zIndex: 2,
                    }}
                  />
                )}

                <CardContent
                  sx={{
                    position: "relative",
                    zIndex: 3,
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="body1"
                    sx={{ fontFamily: "Goldman, serif", minHeight: "40px" }}
                  >
                    {milestone.activity}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.primary",
                      fontFamily: "Goldman, serif",
                      fontSize: "1.5em",
                    }}
                  >
                    {formatAmount(milestone.amount)}
                  </Typography>

                  <Box sx={{ textAlign: "center", marginTop: 2 }}>
                    <img
                      src={milestone.illustration}
                      alt={milestone.activity}
                      style={{
                        width: "auto",
                        height: "120px",
                        marginBottom: "10px",
                      }}
                    />
                  </Box>
                </CardContent>

                {isAchieved && (
                  <img
                    src={index === 0 ? "/media/A.png" : "/media/achieve.png"}
                    alt="Milestone Completed"
                    style={{
                      width: "200px",
                      height: "auto",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      opacity: 0.3,
                      zIndex: 1,
                    }}
                  />
                )}
              </Card>
            );
          })}
        </Box>
      </Card>
    </Box>
  );
}
