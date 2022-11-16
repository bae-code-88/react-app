import { Grid, Typography, ThemeProvider } from "@mui/material";
import CustomizedSteppers from "./StepperInquiry";
import theme from "./InquiryThemeMedia";

const Inquiry = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={2}
        sx={{
          flexDirection: { xxs: "column", md: "row" },
          alignItems: "center",
          position: "absolute",
          top: { xxs: "20vh", xs: "15vh", md: "10vh" },
          left: "0",
          overflow: "hidden",
        }}
      >
        <Grid item xs={6}>
          <Typography
            variant="h1"
            sx={{
              marginLeft: { xxs: "0", md: "20%", lg: "20%", xl: "20%" },
              color: "#1d1d1b",
              fontWeight: "600",
              letterSpacing: "1px",
              fontSize: { xxs: "30px", xs: "40px", md: "80px", xl: "100px" },
              fontFamily: "Usual",
            }}
          >
            Zapytanie
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="body1"
            sx={{
              textAlign: { xxs: "center", sm: "center", md: "start" },
              width: { xxs: "100%", sm: "100%", md: "80%" },
              fontSize: { xxs: "14px", sm: "16px", lg: "18px" },
              fontFamily: "Usual",
            }}
          >
            Formularz zapytania pozwoli{" "}
            <span
              style={{
                color: "#a85f3f",
                fontFamily: "Usual",
                fontWeight: "600",
              }}
            >
              w kilku prostych krokach
            </span>{" "}
            zebrać najważniejsze informacje na temat Twoich potrzeb. Dzięki temu{" "}
            <span
              style={{
                color: "#a85f3f",
                fontFamily: "Usual",
                fontWeight: "600",
              }}
            >
              szybko
            </span>{" "}
            przygotujemy dla Ciebie ofertę.
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <div></div>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CustomizedSteppers />
        </Grid>
        <Grid item xs={2}>
          <div></div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Inquiry;
