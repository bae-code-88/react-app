import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import AiOutlineCheck from "react-icons/ai";

const InquiryFinishedSteps = ({ activeStep, handleReset, steps }) => {
  return (
    <>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3, width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              marginBottom: "10px",
              fontSize: "30px",
              color: "#a85f3f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <AiOutlineCheck /> */}
          </Box>
          <Typography sx={{ fontFamily: "Usual", textAlign: "center" }}>
            Wszystkie kroki pomyślnie zakończone!<br></br> Zapytanie zostało
            wysłane.
          </Typography>
          <Box
            sx={{
              width: "100%",
              marginBottom: "10px",
              fontSize: "40px",
              color: "#a85f3f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={handleReset}
              sx={{
                mt: 1,
                mr: 1,
                color: "#a85f3f",
                border: "1px solid #a85f3f",
                borderRadius: "0",
                width: "100px",
                backgroundColor: "white",
                fontFamily: "Usual",
                marginTop: "5vh",
              }}
            >
              Resetuj
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
};

export default InquiryFinishedSteps;
