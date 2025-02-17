import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Card,
  Typography,
} from "@mui/material";
import { donors } from "../data/donors";

// Medal icons for top 3 donors
const medalIcons = ["🥇", "🥈", "🥉"];

const TopDonorsTable = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  // Sort donors by amount (largest to smallest)
  const sortedDonors = [...donors].sort((a, b) => b.amount - a.amount);

  const displayedDonors = expanded
    ? sortedDonors.slice(0 * 10, 0 * 10 + 10)
    : sortedDonors.slice(0, 5);

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
        color: "whitesmoke",
      }}
    >
      <TableContainer>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "30px",
            marginBottom: "20px",
            fontFamily: "Goldman, serif",
            color: "rgba(255, 255, 255, 0.9)",
            WebkitTextStroke: "1px #ffff",
          }}
        >
          DONOR LIST
        </Typography>
        <Typography
          sx={{
            fontFamily: "Play",
            fontSize: "1em",
            color: "whitesmoke",
            textAlign: "center",
            mb: 2,
          }}
        >
          Last updated 17/02/2025 18:00
        </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ "& > *": { textAlign: "center" } }}>
              <TableCell
                sx={{
                  fontFamily: "Goldman",
                  fontSize: "2em",
                  color: "whitesmoke",
                  textAlign: "center",
                  width: "10%",
                  minWidth: "80px",
                }}
              >
                Rank
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Goldman",
                  fontSize: "2em",
                  color: "whitesmoke",
                  textAlign: "center",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Goldman",
                  fontSize: "2em",
                  color: "whitesmoke",
                  textAlign: "center",
                }}
              >
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedDonors.map((donor, index) => (
              <TableRow key={donor.id}>
                <TableCell
                  sx={{
                    fontFamily: "Play",
                    fontSize: "1.5em",
                    textAlign: "center",
                    color: "whitesmoke",
                  }}
                >
                  {index < 3 ? medalIcons[index] : index + 1}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Play",
                    fontSize: "1.5em",
                    color: "whitesmoke",
                    textAlign: "center",
                  }}
                >
                  {donor.name}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Play",
                    fontSize: "1.5em",
                    color: "whitesmoke",
                    textAlign: "center",
                  }}
                >
                  {donor.amount.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        onClick={handleExpand}
        variant="contained"
        sx={{
          mt: 2,
          fontFamily: "Goldman",
          fontSize: "1.5em",
          color: "whitesmoke",
        }}
      >
        {expanded ? "Show Less" : "Show All"}
      </Button>
    </Card>
  );
};

export default TopDonorsTable;
