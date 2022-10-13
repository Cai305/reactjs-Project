import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

import { Welcome } from "./pages/welcome"

function App() {
  return (
    <>
      <Router>
          <div>
            <Routes>
                <Route exact path='/' element={ <Welcome />} />
                <Route exact path='/about' element={ <Welcome />} />
                <Route exact path='/dashboard' element={ <Welcome />} />
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
