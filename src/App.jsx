import { BrowserRouter } from "react-router-dom";
import MainRouter from "./pages";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
