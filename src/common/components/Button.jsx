import React from "react";

// Mui
import MuiButton from "@mui/material/Button";

// Utils
import { Colors } from "../utils/constants";

const Button = ({ onClick, title }) => {
  return (
    <MuiButton
      variant="contained"
      onClick={onClick}
      type="submit"
      fullWidth
      sx={{
        bgcolor: Colors.primaryGreen,
        p: 1,
        "&:hover": {
          bgcolor: Colors.primaryGreen,
        },
      }}
    >
      {title}
    </MuiButton>
  );
};

export default Button;
