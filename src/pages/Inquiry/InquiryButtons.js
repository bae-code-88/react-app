import React from 'react'
import { styled, ThemeProvider } from '@mui/material/styles'
import theme from './InquiryThemeMedia'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: ' #a85f3f',
    marginTop: '20px',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: ' #a85f3f',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: ' #a85f3f',
      borderRadius: '0px',
      height: '45px',
      lineHeight: '20px',
      fontSize: '14px',
      marginTop: '20px',
    },
    '&:hover fieldset': {
      borderColor: ' #a85f3f',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#a85f3f',
    },
  },
})

const InquiryButtons = ({
  step,
  activeStep,
  handleNext,
  handleBack,
  handleChange,
  value,
  setStepType,
  stepType,
}) => {
  const buttonList = Object.keys(step.buttons)
    .filter((buttonKey) => (stepType ? [stepType, 'allBtn'].includes(buttonKey) : true))
    .map((buttonKey, index) => {
      return step.buttons[buttonKey].map((buttonText) => (
        <Button
          variant='outlined'
          type='button'
          key={index}
          activestep={activeStep}
          onClick={() => {
            if (buttonText === 'Komercyjnym') {
              setStepType('commercialBtn')
            } else if (buttonText === 'Indywidualnym') {
              setStepType('individualBtn')
            }
            handleNext()
          }}
          sx={{
            mt: 1,
            mr: 1,
            color: '#a85f3f',
            border: '1px solid #a85f3f',
            borderRadius: '0',
            width: { xxs: '120px', sm: '30%', md: '190px' },
            lineHeight: '25px',
            backgroundColor: 'transparent',
            fontFamily: 'Usual',
            fontSize: '14px',
            textTransform: 'none',
          }}
        >
          {step.id === step.length - 1 ? 'Wyślij' : buttonText}
        </Button>
      ))
    })

  return (
    <ThemeProvider theme={theme}>
      <Box
        activestep={activeStep}
        step={step}
        name='step_buttons_description_container'
        sx={{
          width: { xxs: '100%', sm: '40vw' },
          height: { sm: '20vh' },
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignContent: { xxs: 'center', sm: 'flex-start' },
          justifyContent: { xxs: 'center' },
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Usual',
            fontSize: '30px',
            textAlign: { xxs: 'center', sm: 'left', md: 'left' },
          }}
        >
          {step.description}*
        </Typography>

        <Box
          name='step_buttons_container'
          step={step}
          activestep={activeStep}
          sx={{
            width: { xxs: '100vw', sm: '50vw' },
            display: { xxs: 'flex' },
            alignItems: { xxs: 'center' },
            justifyContent: { xxs: 'center', sm: 'flex-start' },
            boxSizing: 'border-box',
            flexWrap: 'wrap',
          }}
        >
          {step.id === 4 ? (
            <Box
              sx={{
                mb: 1,
                width: { xxs: '100%' },
                textAlign: { xxs: 'center', sm: 'left' },
              }}
            >
              <CssTextField
                focused
                variant='outlined'
                id='validation-outlined-input'
                type='number'
                label='Metraż'
                maxRows={1}
                value={value}
                onChange={handleChange}
              />
            </Box>
          ) : null}

          {step.id === 6 ? (
            <Box>
              <CssTextField
                focused
                type='textarea'
                label='Oczekiwania'
                id='filled-multiline'
                multiline
                value={value}
                onChange={handleChange}
                variant='outlined'
                rows={2}
                cols={8}
                sx={{
                  width: { xxs: '80vw', sm: '50vw' },
                  mr: 1,
                  mt: 0,
                }}
              />
            </Box>
          ) : null}

          {buttonList}

          {step.id === 5 ? (
            <div>
              <CssTextField
                focused
                type='number'
                label='Budżet'
                maxRows={1}
                value={value}
                activestep={activeStep}
                onChange={handleChange}
                sx={{
                  mr: 1,
                  mt: 0,
                  width: { xxs: '120px', sm: '20vw', md: '190px' },
                  textAlign: { xxs: 'center', md: 'left' },
                }}
              />
            </div>
          ) : null}

          {step.id === 7 ? (
            <div>
              <CssTextField
                focused
                variant='outlined'
                id='validation-outlined-input'
                type='date'
                label='Termin'
                autoComplete
                maxRows={1}
                value={value}
                onChange={handleChange}
                sx={{
                  mr: 1,
                  width: { xxs: '120px', sm: '20vw', md: '190px' },
                }}
              />
            </div>
          ) : null}

          {step.id === 1 ? null : (
            <Button
              activestep={activeStep}
              onClick={handleBack}
              sx={{
                mr: 1,
                mt: 1,
                color: '#a85f3f',
                border: '1px solid #a85f3f',
                borderRadius: '0',
                width: { xxs: '120px', sm: '20%', md: '190px' },
                lineHeight: '25px',
                backgroundColor: 'transparent',
                fontFamily: 'Usual',
                fontSize: '14px',
                textTransform: 'none',
              }}
            >
              Wróć
            </Button>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  )
}
export default InquiryButtons
