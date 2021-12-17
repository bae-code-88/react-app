import { Grid, Typography } from "@mui/material";

const Inquiry = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography variant="h1">Zapytanie</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1" sx={{ color: "green" }}>
          jdhbfcbwreqcf uwencunewru nfduwenfudwefb uywebfuyhbr ewuyfbrewuyb
          uerbghfyuweb{" "}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <div>xs=4</div>
      </Grid>
      <Grid item xs={8}>
        <div>xs=8</div>
      </Grid>
    </Grid>
  );
};
export default Inquiry;
