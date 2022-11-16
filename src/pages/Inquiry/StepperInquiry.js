import React from "react";
import PropTypes from "prop-types";
import { styled, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack"; //overridable component
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import theme from "./InquiryThemeMedia";
import {
  AiOutlineEuro,
  AiOutlineSchedule,
  AiOutlineCarryOut,
  AiOutlineMergeCells,
  AiOutlineIdcard,
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineComment,
  AiOutlineCheck,
} from "react-icons/ai";

const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: "10vh",
    color: "transparent",
    border: "none",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      color: "transparent",
      border: "none",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      color: "transparent",
      border: "none",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 0,
    backgroundColor: "transparent",
    borderRadius: 0,
    color: "transparent",
  },
}));

const ColorlibStepIconRoot = styled("div")(({ ownerState }) => ({
  backgroundColor: "transparent",
  position: "absolute",
  zIndex: 1,
  height: "60px",
  display: "flex",
  borderRadius: "0",
  border: "none",
  fontSize: "40px",
  color: "#efefef",

  ...(ownerState.active && {
    color: "#a85f3f",
    width: "60px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  }),

  ...(ownerState.completed && {
    color: "#a85f3f",
    width: "60px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <AiOutlineUser />,
    2: <AiOutlineHome />,
    3: <AiOutlineCarryOut />,
    4: <AiOutlineMergeCells />,
    5: <AiOutlineEuro />,
    6: <AiOutlineComment />,
    7: <AiOutlineSchedule />,
    8: <AiOutlineIdcard />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: " #a85f3f",
    marginTop: "10px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: " #a85f3f",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: " #a85f3f",
      borderRadius: "0px",
      height: "50px",
      lineHeight: "30px",
      fontSize: "14px",
      marginTop: "20px",
    },
    "&:hover fieldset": {
      borderColor: " #a85f3f",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#a85f3f",
    },
  },
});

const steps = [
  {
    id: 1,
    info: "Typ klienta",
    label: "1/8",
    description: `Jestem Klientem `,
    buttons: [`Indywidualnym`, `Komercyjnym`],
  },
  {
    id: 2,
    info: "Typ nieruchomości",
    label: "2/8",
    description: "Nieruchomość",
    buttons: [`Mieszkanie`, `Dom`, "Lokal"],
  },
  {
    id: 3,
    info: "Zakres prac",
    label: "3/8",
    description: `Potrzebuję`,
    buttons: [`Realizacji "pod klucz"`, `Projektu`, "Remontu"],
  },
  {
    id: 4,
    info: "Metraż",
    label: "4/8",
    description: `Metraż`,
    buttons: ["Zapisz"],
  },
  {
    id: 5,
    info: "Budżet",
    label: "5/8",
    description: `Budżet`,
    buttons: [`Określony`, `Nieokreślony`],
  },
  {
    id: 6,
    info: "Oczekiwania",
    label: "6/8",
    description: `Oczekiwania`,
    buttons: ["Pomiń", "Zapisz"],
  },
  {
    id: 7,
    info: "Termin",
    label: "7/8",
    description: `Termin`,
    buttons: ["Pomiń"],
  },
  {
    id: 8,
    info: "Kontakt",
    label: "8/8",
    description: `Kontakt`,
    buttons: ["Wyślij"],
  },
];

export default function CustomizedSteppers() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [value, setValue] = React.useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Stack spacing={6}>
      <ThemeProvider theme={theme}>
        <Stepper
          alternativeLabel
          orientation="vertical"
          connector={<ColorlibConnector />}
          // nonlinear
          activeStep={activeStep}
          sx={{
            maxWidth: "1300px",
            fontFamily: "Usual",
            display: "flex",
            alignItems: "center",
          }}
        >
          {steps.map((step, index) => (
            <Step
              key={step.label}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "40px",
                marginLeft: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <StepLabel
                  sx={{
                    width: "300px",
                    display: "flex",
                    alignItems: "center",
                    borderLeft: "none",
                  }}
                  alternativeLabel
                  StepIconComponent={ColorlibStepIcon}
                  activeStep={activeStep}
                >
                  <p
                    alternativeLabel
                    activeStep={activeStep}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#efefef",
                      fontSize: "80px",
                      fontWeight: "bold",
                    }}
                  >
                    {step.id}
                  </p>
                  <p style={{ width: "100%" }}>{step.info}</p>
                </StepLabel>
                {activeStep === index ? (
                  <div
                    activeStep={activeStep}
                    style={{ borderBottom: "1px solid #a85f3f", width: "30px" }}
                  ></div>
                ) : null}
                <StepContent
                  sx={{
                    height: "25vh",
                    display: "flex",
                    alignItems: "center",
                    borderLeft: "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Usual",
                      fontSize: "32px",
                      width: "100%,",
                    }}
                  >
                    <Typography sx={{ fontFamily: "Usual", fontSize: "14px" }}>
                      <span
                        style={{letterSpacing: "1px" }}
                      >
                        KROK
                      </span>{" "}
                      <span
                        style={{
                          color: "#a85f3f",
                          letterSpacing: "1px",
                        }}
                      >
                        {step.label}
                      </span>
                    </Typography>
                    {step.description}{" "}
                    <span style={{ color: "#a85f3f" }}>*</span>
                  </Typography>

                  {step.id === 4 ? (
                    <div>
                      <CssTextField
                        focused
                        variant="outlined"
                        id="validation-outlined-input"
                        type="number"
                        label="Metraż"
                        maxRows={1}
                        value={value}
                        onChange={handleChange}
                        sx={{
                          width: "190px",
                          mt: 2,
                          mb: 2,
                        }}
                      />
                    </div>
                  ) : null}
                  {step.id === 6 ? (
                    <div>
                      <CssTextField
                        focused
                        type="textarea"
                        label="Oczekiwania"
                        id="filled-multiline"
                        multiline
                        value={value}
                        onChange={handleChange}
                        variant="outlined"
                        rows={2}
                        cols={8}
                        sx={{ width: "600px", mt: 3 }}
                      />
                    </div>
                  ) : null}
                  <Box sx={{ mb: 1 }}>
                    <div>
                      {step.buttons.map((button, index) => (
                        <Button
                          variant="outlined"
                          onClick={handleNext}
                          sx={{
                            mr: 1,
                            color: "#a85f3f",
                            border: "1px solid #a85f3f",
                            borderRadius: "0",
                            width: "190px",
                            lineHeight: "30px",
                            backgroundColor: "white",
                            fontFamily: "Usual",
                            fontSize: "14px",
                            textTransform: "none",
                          }}
                        >
                          {index === steps.length - 1 ? "Wyślij" : button}
                        </Button>
                      ))}
                      {step.id === 5 ? (
                        <div>
                          <CssTextField
                            focused
                            type="number"
                            label="Budżet"
                            maxRows={1}
                            value={value}
                            onChange={handleChange}
                            sx={{ width: "190px" }}
                          />
                        </div>
                      ) : null}

                      {step.id === 7 ? (
                        <div>
                          <CssTextField
                            focused
                            variant="outlined"
                            id="validation-outlined-input"
                            type="date"
                            label="Termin"
                            autoComplete
                            maxRows={1}
                            value={value}
                            onChange={handleChange}
                            sx={{ width: "190px" }}
                          />
                        </div>
                      ) : null}
                      <br></br>
                      {index === 0 ? null : (
                        <Button
                          onClick={handleBack}
                          sx={{
                            mt: 2,
                            mr: 1,
                            color: "#a85f3f",
                            border: "1px solid #a85f3f",
                            borderRadius: "0",
                            width: "100px",
                            lineHeight: "28px",
                            backgroundColor: "white",
                            fontFamily: "Usual",
                            fontSize: "14px",
                            textTransform: "none",
                          }}
                        >
                          Wróć
                        </Button>
                      )}
                    </div>
                  </Box>
                </StepContent>
              </Box>
            </Step>
          ))}
        </Stepper>
      </ThemeProvider>
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
            <AiOutlineCheck />
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
    </Stack>
  );
}
