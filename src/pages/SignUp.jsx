import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  styled,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "0.5vh",

  marginLeft: "5vh",
  "& .MuiOutlinedInput-root": {
    borderRadius: "9px",
    "& fieldset": {
      borderColor: "black",
      borderWidth: "2px",
      height: "85%",
      width: "90%",
    },
  },
  "& .MuiInputBase-input": {
    padding: "10px", // Input padding
  },
}));

const SignUp = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "90vh",
      }}
    >
      {/* Header Text */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            letterSpacing: "0.5vh",
            fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", // Responsive scaling
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          CREATE AN ACCOUNT !!
        </Typography>
      </Box>

      {/* Paper Component */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "24%",
          maxWidth: "600px",
          minWidth: "300px",
          transition: "width 0.3s ease",
        }}
      >
        <Paper sx={{ width: "100%", padding: "5vh" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "1.5vh",
              fontSize: "clamp(0.9rem, 2vw, 1.2rem)", // Responsive scaling
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            It's free and only takes a minute
          </Typography>

          {/* Form Content */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <label
              style={{
                fontSize: "clamp(0.8rem, 1.5vw, 1.1rem)", // Responsive scaling
                fontFamily: "sans-serif",
              }}
            >
              Username:
            </label>
            <StyledTextField variant="outlined" />
            <label
              style={{
                fontSize: "clamp(0.8rem, 1.5vw, 1.1rem)",
                fontFamily: "sans-serif",
              }}
            >
              Email Address:
            </label>
            <StyledTextField variant="outlined" />
            <label
              style={{
                fontSize: "clamp(0.8rem, 1.5vw, 1.1rem)",
                fontFamily: "sans-serif",
              }}
            >
              Password:
            </label>
            <StyledTextField variant="outlined" />
            <label
              style={{
                fontSize: "clamp(0.8rem, 1.5vw, 1.1rem)",
                fontFamily: "sans-serif",
              }}
            >
              Phone:
            </label>
            <StyledTextField variant="outlined" />
          </Box>

          {/* Checkbox with FormControlLabel */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)} // Toggle checkbox on change
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: "1.5rem", // Adjust size if necessary
                    },
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
                  }}
                >
                  I agree to terms and conditions
                </Typography>
              }
            />
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "center", height: "5vh" }}
          >
            <Button
              sx={{
                color: "black",
                backgroundColor: "#ffef50",
                fontSize: "clamp(1rem, 2vw, 1.1rem)",
                paddingX: "11.5vh",
                textTransform: "capitalize",
                borderRadius: "1.2vh",

                fontFamily: "sans-serif",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* Below Paper - Links and Text */}
      <Box sx={{ display: "flex", gap: 1, marginTop: "1.5vh" }}>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "sans-serif",
            fontSize: "clamp(0.9rem, 2vw, 1.2rem)", // Responsive scaling matching the Paper
            whiteSpace: "nowrap",
          }}
        >
          Already a user?
        </Typography>
        <Link
          href="/"
          sx={{
            fontFamily: "sans-serif",
            fontSize: "clamp(0.9rem, 2vw, 1.2rem)", // Responsive scaling matching the Paper
            whiteSpace: "nowrap",
            textDecoration: "none",
            color: "blue",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Login here
        </Link>
      </Box>
    </Box>
  );
};

export default SignUp;
