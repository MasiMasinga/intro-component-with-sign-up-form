import React from "react";

// Mui
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Components
import Button from "./common/components/Button";
import Typography from "./common/components/Typography";

// Utils
import { Colors } from "./common/utils/constants";

// Images
import DesktopImage from "./assets/images/bg-intro-desktop.png";

function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Jonathan",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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
              bold
              mb
              sx={{
                color: "white",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Learn to code by watching others
            </Typography>
            <Typography
              variant="h6"
              mt
              sx={{
                color: Colors.white,
                textAlign: { xs: "center", md: "left" },
              }}
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
              <Typography align="center" bold sx={{ fontSize: 14 }}>
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
              <Stack
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                spacing={2}
                sx={{ p: 3 }}
              >
                <Controller
                  name="firstName"
                  control={control}
                  rules={{
                    required: "First name is required",
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      fullWidth
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      //defaultValue="Jonathan"
                      size="small"
                      autoComplete="given-name"
                      autoFocus
                      onBlur={onBlur}
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                {errors.firstName && (
                  <Typography bold sx={{ color: Colors.red }}>
                    {errors.firstName.message}
                  </Typography>
                )}
                <Controller
                  name="lastName"
                  control={control}
                  rules={{
                    required: "Last name is required",
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      size="small"
                      autoComplete="family-name"
                      onBlur={onBlur}
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                {errors.lastName && (
                  <Typography bold sx={{ color: Colors.red }}>
                    {errors.lastName.message}
                  </Typography>
                )}
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      size="small"
                      autoComplete="email"
                      onBlur={onBlur}
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                {errors.email && (
                  <Typography bold sx={{ color: Colors.red }}>
                    {errors.email.message}
                  </Typography>
                )}
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "Password is required",
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      fullWidth
                      id="password"
                      label="Password"
                      name="password"
                      size="small"
                      autoComplete="current-password"
                      onBlur={onBlur}
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </Stack>
              <Stack sx={{ px: 3 }}>
                <Button title="CLAIM YOUR FREE TRIAL" />
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
                  bold
                  sx={{
                    fontSize: 8,
                    color: "red",
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
