import { Grid } from "@aws-amplify/ui-react";
import { AccessAlarm } from "@mui/icons-material";
import { Box, Paper, Rating, Typography } from "@mui/material";
import React from "react";

const Card = ({ text, imgLink }) => {
  return (
    <Paper elevation={1}>
      <img src={imgLink} alt="alt text" className="img" />
      <Box paddingX={1}>
        <Typography variant="subtitle1" component="h2">
          {text}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AccessAlarm sx={{ width: 13 }} />
          <Typography variant="body2" component="p" marginLeft={0.5}>
            5 hours
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          marginTop={1.5}
        >
          <Rating name="read-only" value={2} size="small" />
          <Typography variant="body2" component="p" marginLeft={0.5}>
            3.4
          </Typography>
          <Typography variant="body3" component="p" marginLeft={0.5}>
            (744 reviews)
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Card;
