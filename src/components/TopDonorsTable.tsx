import { useEffect, useState } from "react";
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
import { Donor, fetchSheetData } from "../data/fetchSheet";

const medalIcons = ["🥇", "🥈", "🥉"];

const TopDonorsTable = () => {
  const [expanded, setExpanded] = useState(false);
  const [donors, setDonors] = useState<Donor[]>([]);
  const [lastUpdate, setLastUpdate] = useState<string>("just now");

  useEffect(() => {
    const getDonors = async () => {
      const { donors, lastUpdate } = await fetchSheetData();
      setDonors(donors);
      setLastUpdate(lastUpdate);
    };

    getDonors();
  }, []);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const sortedDonors = [...donors].sort((a, b) => b.amount - a.amount);
  const displayedDonors = expanded
    ? sortedDonors.slice(0, 10)
    : sortedDonors.slice(0, 5);

  return (
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
        variant="h6"
        sx={{
          display: "flex",
          justifyContent: "center",
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
        Last updated {lastUpdate}
      </Typography>
      <TableContainer
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "auto", // Ensures table is scrollable on small screens
        }}
      >
        <Table
          sx={{
            maxWidth: "100%",
            mx: "auto",
            textAlign: "center",
          }}
        >
          <TableHead>
            <TableRow>
              {["Rank", "Name", "Amount"].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    fontFamily: "Goldman",
                    fontSize: { xs: "1em", sm: "1.3em" },
                    color: "whitesmoke",
                    textAlign: "center",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedDonors.map((donor, index) => (
              <TableRow key={donor.id}>
                <TableCell
                  sx={{
                    fontFamily: "Play",
                    fontSize: { xs: "1.2em", sm: "1.8em" },
                    textAlign: "center",
                    color: "whitesmoke",
                  }}
                >
                  {index < 3 ? medalIcons[index] : index + 1}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Play",
                    fontSize: { xs: "1em", sm: "1.2em" },
                    textAlign: "center",
                    color: "whitesmoke",
                  }}
                >
                  {donor.name}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Play",
                    fontSize: { xs: "1em", sm: "1.2em" },
                    textAlign: "center",
                    color: "whitesmoke",
                  }}
                >
                  {donor.amount.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {expanded && (
        <Typography
          component="a"
          href="https://docs.google.com/spreadsheets/d/1zfvgcQbzhvG1E0cdDAom56wE_6NcA749tGZ3F-l0L84/edit?gid=0#gid=0"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontFamily: "Goldman",
            color: "whitesmoke",
            display: "block",
            fontSize: "1.2em",
            textDecoration: "none",
            marginTop: 2,
          }}
        >
          Click here to view all donors
        </Typography>
      )}
      <Button
        onClick={handleExpand}
        variant="contained"
        sx={{
          mt: 2,
          fontFamily: "Goldman",
          fontSize: "1.2em",
          color: "whitesmoke",
        }}
      >
        {expanded ? "Show Less" : "Show All"}
      </Button>
    </Card>
  );
};

export default TopDonorsTable;
