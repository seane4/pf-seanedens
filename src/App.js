import "./App.css"
import Home from "./components/home/Home";
import { ThemeProvider, useTheme } from "./ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Home/>
      </ThemeProvider>
    </div>
  );
}

export default App;
