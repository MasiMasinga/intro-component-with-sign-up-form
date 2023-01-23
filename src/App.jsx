import React from "react";

// Mui
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

// Utils
import { Colors } from "./common/utils/constants";

// Images
import DesktopImage from "./assets/images/bg-intro-desktop.png";

function App() {
  return (
    <Stack
      justifyContent="center"
      sx={{
        height: { xs: "100%", md: "100vh" },
        width: "100vw",
        bgcolor: Colors.red,
        backgroundImage: `url(${DesktopImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ alignSelf: "center" }}>
          <Stack sx={{ px: 8, pt: 3 }}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "bold",
                mb: 1,
                textAlign: { xs: "center", md: 'left' },
              }}
            >
              Learn to code by watching others
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: Colors.white, mt: 2, textAlign: { xs: "center", md: 'left' } }}
            >
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mb: { xs: 5 } }}>
          <Stack spacing={2}>
            <Stack
              justifyContent="center"
              direction="row"
              alignItems="center"
              alignSelf="center"
              sx={{
                width: "60%",
                height: "50px",
                bgcolor: Colors.secondaryBlue,
                borderRadius: 2,
                color: Colors.white,
                cursor: "pointer",
                boxShadow: 1,
              }}
            >
              <Typography align="center" sx={{ fontWeight: "bold", fontSize: 14  }}>
                Try it free 7 days
              </Typography>
              <Typography align="center" sx={{ ml: 0.3, fontSize: 14 }}>
                then R20/mo. thereafter
              </Typography>
            </Stack>
            <Box
              sx={{
                width: "60%",
                height: "350px",
                bgcolor: Colors.white,
                borderRadius: 2,
                alignSelf: "center",
              }}
            >
              <Stack spacing={2} sx={{ p: 3 }}>
                <TextField
                  label="First Name"
                  defaultValue="Jonathan"
                  size="small"
                />
                <TextField label="Last Name" size="small" />
                <TextField label="Email Address" size="small" />
                <TextField label="Password" size="small" />
              </Stack>
              <Stack sx={{ px: 3 }}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: Colors.primaryGreen, p: 1 }}
                >
                  CLAIM YOUR FREE TRIAL
                </Button>
              </Stack>
              <Stack
                justifyContent="center"
                direction="row"
                sx={{ px: 3, pt: 2 }}
              >
                <Typography align="center" sx={{ fontSize: 8 }}>
                  By clicking the button you are agreeing to our
                </Typography>
                <Typography
                  align="center"
                  sx={{
                    fontSize: 8,
                    color: "red",
                    fontWeight: "bold",
                    ml: 0.3,
                    cursor: "pointer",
                  }}
                >
                  Terms and Services
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default App;
