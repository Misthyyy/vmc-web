// src/components/DonationInfo.jsx
import { Box, Card, Typography } from "@mui/material";

export default function DonationInfo() {
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
        variant="h6"
        sx={{
          fontSize: "30px",
          marginBottom: "20px",
          fontFamily: "Goldman, serif",
          color: "rgba(255, 255, 255, 0.9)",
          WebkitTextStroke: "1px #ffff",
        }}
      >
        DONATE INFORMATION
      </Typography>

      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}
      >
        <img
          src="/src/assets/media/qr.png"
          alt="QR Code"
          style={{ width: "250px", height: "250px", borderRadius: "8px" }}
        />
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontFamily: "Goldman",
          fontSize: "2em",
          fontWeight: "bold",
          color: "whitesmoke",
        }}
      >
        VIETCOMBANK THANH DA
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Goldman",
          fontSize: "1.5em",
          color: "whitesmoke",
        }}
      >
        053 100 258 3237
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Goldman",
          fontSize: "1.5em",
          color: "whitesmoke",
        }}
      >
        TRAN HOANG PHUONG LINH
      </Typography>
    </Card>
  );
}
