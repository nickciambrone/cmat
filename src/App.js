import "./App.scss";

import NavBar from "./components/nav-bar/NavBar.component.jsx";
import SignInPage from "./pages/sign-in/sign-in.page.jsx";
import Dashboard from "./pages/dashboard/dashboard.page.jsx";

import { Routes, Route, Redirect } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <NavBar />
      <div style={{marginLeft:'10%', width:'80%', marginTop:'10px'}}>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/dashboard/:operation/" element={<Dashboard />} />
        <Route path="/dashboard/:operation/:element" element={<Dashboard />} />

      </Routes>
      </div>

    </div>
  );
}

export default App;
