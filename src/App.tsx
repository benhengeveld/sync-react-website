import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "pages/Home/index";
import MagicPrice from "pages/MagicPrice/index";
import About from "pages/About/index";
import PageNotFound from "pages/PageNotFound/index";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <div id="container">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/magic-prices" Component={MagicPrice} />
            <Route path="/about" Component={About} />
            <Route path="*" Component={PageNotFound} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
