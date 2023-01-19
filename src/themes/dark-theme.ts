import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const darkTheme = createTheme({
  
    palette: {
      mode: 'dark',
      secondary: {
        main: '#19857b'
      },
      error: {
        main: red.A400
      }
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          elevation: 0
        },
        styleOverrides: {
          root: {
            backgroundColor: '#4a148c'
          }
        }
      },
      MuiCssBaseline: {
        styleOverrides: {
          '&::-webkit-scrollbar': {
            width: 6,
            height: 6,
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'none',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: 50,
          },
          '*': {
            boxSizing: 'border-box',
          }
        },
      },
    }
  });