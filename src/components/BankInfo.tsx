// src/components/DonationInfo.jsx
import { Box, Card, Typography } from "@mui/material";

export default function DonationInfo() {
  return (
    <Card
      sx={{
        width: { xs: "90%", sm: "80%" }, // Smaller width on phones
        margin: "auto",
        textAlign: "center",
        padding: { xs: 2, sm: 3 }, // Adjust padding for small screens
        borderRadius: "15px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        boxShadow: 3,
      }}
    >
      {/* Donation Amount Title */}
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "24px", sm: "30px" }, // Reduce font size on phones
          marginBottom: "15px",
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
          src="/QRcode.svg"
          alt="QR Code"
          style={{
            width: "100%", // Make QR code responsive
            maxWidth: "250px", // Keep max size
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontFamily: "Goldman",
          fontSize: { xs: "1.5em", sm: "2em" }, // Adjust font size
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
          fontSize: { xs: "1.2em", sm: "1.5em" }, // Adjust font size
          color: "whitesmoke",
        }}
      >
        053 100 258 3237
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Goldman",
          fontSize: { xs: "1.2em", sm: "1.5em" }, // Adjust font size
          color: "whitesmoke",
        }}
      >
        TRAN HOANG PHUONG LINH
      </Typography>
      <a href="https://forms.gle/gSWaJc5T7fULBM2r8">
        {" "}
        Fill out the form after completed
      </a>
    </Card>
  );
}
