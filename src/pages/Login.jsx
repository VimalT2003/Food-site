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
  marginBottom: "3vh",

  marginLeft: "7vh",
  "& .MuiOutlinedInput-root": {
    borderRadius: "9px",
    "& fieldset": {
      borderColor: "black",
      borderWidth: "2px",
      height: "100%",
      width: "95%",
    },
  },
  "& .MuiInputBase-input": {
    padding: "10px", // Input padding
  },
}));

const Login = () => {
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
            marginBottom: "1.5vh",
            fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", // Responsive scaling
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          LOGIN WITH US !!
        </Typography>
      </Box>

      {/* Paper Component */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "50%",
          maxWidth: "650px",
          minWidth: "300px",
          transition: "width 0.3s ease",
        }}
      >
        <Paper
          sx={{
            width: "100%",
            padding: "7vh",
            paddingRight: "15vh",
            paddingLeft: "6vh",
            paddingBottom: "4vh",
            borderRadius: "1.2vh",
          }}
        >
          {/* Form Content */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <label
              style={{
                fontSize: "clamp(0.8rem, 1.5vw, 1.1rem)",
                fontFamily: "sans-serif",
                fontWeight: "bold",
                marginBottom: "0.5vh",
              }}
            >
              Email Address:
            </label>
            <StyledTextField variant="outlined" />
            <label
              style={{
                fontSize: "clamp(0.8rem, 1.5vw, 1.1rem)",
                fontFamily: "sans-serif",
                fontWeight: "bold",
                marginBottom: "0.5vh",
              }}
            >
              Password:
            </label>
            <StyledTextField variant="outlined" />
          </Box>

          {/* Checkbox with FormControlLabel */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              marginBottom: "2.5vh",
            }}
          >
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
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Remember me
                </Typography>
              }
            />
            <Link
              href="#"
              sx={{
                fontFamily: "sans-serif",
                fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                fontWeight: "bold",
                textDecoration: "underline",
                color: "#35baf6",
                "&:hover": { textDecoration: "underline" },
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Forgot Password ?
            </Link>
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "center", height: "5vh" }}
          >
            <Button
              sx={{
                color: "black",
                backgroundColor: "#fff179",
                fontSize: "clamp(1rem, 2vw, 1.1rem)",
                paddingX: "19vh",
                textTransform: "capitalize",
                borderRadius: "1.2vh",
                fontFamily: "sans-serif",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              LOGIN
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
            fontWeight: "bold",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            whiteSpace: "nowrap",
          }}
        >
          Not yet a member??
        </Typography>
        <Link
          href="/signup"
          sx={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            whiteSpace: "nowrap",
            textDecoration: "none",
            color: "#35baf6",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Sign Up
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
