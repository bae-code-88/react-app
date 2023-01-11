import React from 'react'
import { styled, ThemeProvider } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepContent from '@mui/material/StepContent'

import Typography from '@mui/material/Typography'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import theme from './InquiryThemeMedia'
import steps from './DataInquiry'
import InquiryStepLabel from './InquiryStepLabel'
import InquiryButtons from './InquiryButtons'
import InquiryFinishedSteps from './InquiryFinishedSteps'

const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: '10vh',
    color: 'transparent',
    border: 'none',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      color: 'transparent',
      border: 'none',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      color: 'transparent',
      border: 'none',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 0,
    backgroundColor: 'transparent',
    borderRadius: 0,
    border: 'none',
    color: 'transparent',
  },
}))

const CustomizedSteppers = () => {
  const [activeStep, setActiveStep] = React.useState(1)
  const [value, setValue] = React.useState('')
  const [stepType, setStepType] = React.useState()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    console.log(activeStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
    console.log(activeStep)
  }

  const handleReset = () => {
    setActiveStep(0)
    console.log(activeStep)
  }

  const handleChange = (event) => {
    setValue(event.target.value)
    console.log(activeStep)
  }

  return (
    <Stack spacing={0}>
      <ThemeProvider theme={theme}>
        <Stepper
          alternativelabel='true'
          orientation='vertical'
          connector={<ColorlibConnector />}
          sx={{
            maxWidth: '80vw',
            fontFamily: 'Usual',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {steps.map((step, id) => (
            <Step
              key={step.id}
              id={step.id}
              active={step.id === activeStep}
              step={step}
              sx={{
                display: 'flex',
                flexDirection: { xxs: 'column', sm: 'row' },
                alignItems: { xxs: 'center' },
                justifyContent: { sm: 'center' },
                width: '80vw',
                marginTop: { xxs: '0px', sm: '10px' },
                marginLeft: { xxs: '0px', sm: '0px' },
                // backgroundColor: "green",
              }}
            >
              <InquiryStepLabel step={step} id={id} />

              <StepContent
                step={step}
                id={id}
                value={value}
                sx={{
                  boxSizing: 'border-box',
                  margin: 0,
                  width: { xxs: '100%', sm: '40vw' },
                  height: { xxs: 'auto', md: '25vh' },
                  border: 'none',
                  display: 'flex',
                  alignItems: { xxs: 'center' },
                  justifyContent: { xxs: 'center', sm: 'flex-end' },
                  // backgroundColor: "violet",
                  // overflow: "hidden",
                }}
              >
                <Box
                  name='step_content_typo_container'
                  sx={{
                    width: { xxs: '100%', sm: '50%' },
                    boxSizing: 'border-box',
                    display: 'flex',
                    margin: '0px',
                    // backgroundColor: "pink",
                  }}
                >
                  <Typography
                    sx={{
                      display: { xxs: 'none', sm: 'inline' },
                      letterSpacing: '1px',
                      fontFamily: 'Usual',
                      fontSize: '14px',
                      marginRight: '5px',
                    }}
                  >
                    KROK
                  </Typography>
                  <Typography
                    sx={{
                      display: { xxs: 'none', sm: 'inline' },
                      color: '#a85f3f',
                      letterSpacing: '1px',
                      fontWeight: 'medium',
                      fontFamily: 'Usual',
                      fontSize: '14px',
                    }}
                  >
                    {step.label}
                  </Typography>
                </Box>

                <InquiryButtons
                  step={step}
                  handleBack={handleBack}
                  handleChange={handleChange}
                  handleNext={handleNext}
                  value={value}
                  setStepType={setStepType}
                />
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </ThemeProvider>

      <InquiryFinishedSteps active={activeStep} handleReset={handleReset} steps={steps} />
    </Stack>
  )
}
export default CustomizedSteppers
