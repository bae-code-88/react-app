import { Grid, Typography } from "@mui/material";
import CustomizedSteppers from "./StepperInquiry";

const Inquiry = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: "flex-end",
        position: "absolute",
        top: "10vh",
        left: "0",
        overflow: "hidden",
      }}
    >
      <Grid item xs={6}>
        <Typography
          variant="h1"
          sx={{
            marginLeft: "20%",
            color: "#1d1d1b",
            fontWeight: "600",
            letterSpacing: "1px",
            fontSize: "100px",
            fontFamily: "Usual",
          }}
        >
          Zapytanie
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          variant="body1"
          sx={{ width: "80%", fontSize: "16px", fontFamily: "Usual" }}
        >
          Formularz zapytania pozwoli{" "}
          <span style={{ color: "#a85f3f", fontFamily: "Usual" }}>
            w kilku prostych krokach
          </span>{" "}
          zebrać najważniejsze informacje na temat Twoich potrzeb. Dzięki temu{" "}
          <span style={{ color: "#a85f3f", fontFamily: "Usual" }}>szybko</span>{" "}
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
  );
};
export default Inquiry;
