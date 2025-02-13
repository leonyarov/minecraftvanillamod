import './App.css';
import Main from "./MainPage/Main";
import Logo from "./Logo/Logo";
import Progress from "./Progress/Progress";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./assets/theme";
import Footer from "./Footer/Footer";
import Socials from "./Socials/Socials";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";

function App() {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Logo></Logo>
    <Progress></Progress>
    <Main></Main>
    <Socials></Socials>
    <About></About>
    <Gallery></Gallery>
    <Footer></Footer>

  </ThemeProvider>
}

export default App;
