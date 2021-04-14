import "../styles/globals.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { common } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: common["white"],
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
