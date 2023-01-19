import { useTranslation } from 'react-i18next'
import { Grid, Typography, ThemeProvider } from '@mui/material'
import CustomizedSteppers from './CustomizedSteppers'
import theme from './InquiryThemeMedia'

const Inquiry = (props) => {
  const { t } = useTranslation()
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={2}
        sx={{
          flexDirection: { xxs: 'column', md: 'row' },
          alignItems: 'center',
          position: 'absolute',
          top: { xxs: '20vh', xs: '15vh', md: '10vh' },
          left: '0',
          overflow: 'hidden',
        }}
      >
        <Grid item xs={6}>
          <Typography
            variant='h1'
            sx={{
              marginLeft: { xxs: '0', md: '20%' },
              color: '#1d1d1b',
              fontWeight: '600',
              letterSpacing: '1px',
              fontSize: { xxs: '30px', xs: '40px', sm: '80px', xl: '100px' },
              fontFamily: 'Usual',
            }}
          >
            {t('Zapytanie')}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant='body1'
            sx={{
              fontFamily: 'Usual',
              letterSpacing: '1px',
              textAlign: { xxs: 'center', sm: 'center', md: 'start' },
              width: { xxs: '100%', sm: '100%', md: '80%' },
              fontSize: { xxs: '16px', sm: '16px', lg: '18px' },
            }}
          >
            {t('Zapytanietxt1')}{' '}
            <span
              style={{
                color: '#a85f3f',
                fontFamily: 'Usual',
                fontWeight: 'bold',
              }}
            >
              {t('Zapytanietxt2')}
            </span>{' '}
            {t('Zapytanietxt3')}{' '}
            <span
              style={{
                color: '#a85f3f',
                fontFamily: 'Usual',
                fontWeight: '600',
              }}
            >
              {t('Zapytanietxt4')}
            </span>{' '}
            {t('Zapytanietxt5')}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <div></div>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <CustomizedSteppers />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
export default Inquiry
