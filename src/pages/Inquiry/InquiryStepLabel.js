import React from "react";
import PropTypes from "prop-types";
import {
  AiOutlineEuro,
  AiOutlineSchedule,
  AiOutlineCarryOut,
  AiOutlineMergeCells,
  AiOutlineIdcard,
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineComment,
} from "react-icons/ai";
import { styled, ThemeProvider } from "@mui/material/styles";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import theme from "./InquiryThemeMedia";

const ColorlibStepIconRoot = styled("div")(({ ownerState, theme }) => ({
  // backgroundColor: "red",
  zIndex: 1,
  height: "60px",
  // width: "40vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0",
  border: "none",
  fontSize: "40px",
  color: "#efefef",
  margin: "0px",

  [theme.breakpoints.up("xxs")]: {
    display: "flex",
    alignItems: "center",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    alignItems: "center",
  },

  //ACTIVE step
  ...(ownerState.active && {
    color: "#a85f3f",
    flexWrap: "wrap",
    alignItems: "center",
    [theme.breakpoints.up("xxs")]: {
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
  }),

  //COMPLETED step
  ...(ownerState.completed && {
    color: "#a85f3f",
    flexWrap: "wrap",
    justifySelf: "center",

    [theme.breakpoints.up("xxs")]: {
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
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

const InquiryStepLabel = ({ step, active }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* //H1 number of step */}
        <Typography
          activestep={active}
          sx={{
            color: "#efefef",
            fontFamily: "Usual",
            fontSize: { xxs: "0px", md: "150px" },
            fontWeight: "bold",
            opacity: "0.3",
          }}
        >
          {step.id}
        </Typography>
      </Box>
      <Box name="steplabel_icon_info_container">
        <StepLabel
          StepIconComponent={ColorlibStepIcon}
          activestep={active}
          sx={{
            width: { xxs: "100%", sm: "30vw" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xxs: "center", sm: "center" },
            justifyContent: { xxs: "center", sm: "center" },
            border: "none",
            margin: "0px",
            // backgroundColor: "orange",
          }}
        >
          <Typography
            activestep={active}
            sx={{
              width: "100%",
              fontFamily: "Usual",
              color: "#efefef",
              textAlign: "center",
            }}
          >
            {step.info}
          </Typography>
        </StepLabel>
      </Box>
    </ThemeProvider>
  );
};
export default InquiryStepLabel;
