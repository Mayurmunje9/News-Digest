import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
// import NewsItem from "./components/NewsItem";


let setProgress = (progress)=>{
  this.setState({progress: progress})
}
const App = () => {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      // document.NewsItem.this.setMode="dark"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      <NavBar mode={mode} changeMode={changeMode} />
      <Routes>
        <Route
          path="/"
          element={
            <News  key="general" pageSize={5} country="in" category="general" mode={mode} />
          }
        />
        <Route
          path="/business"
          element={
            <News  key="business" pageSize={5} country="in" category="business" mode={mode} />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News  key="entertainment" pageSize={5} country="in" category="entertainment" mode={mode} />
          }
        />
        <Route
          path="/general"
          element={
            <News  key="general" pageSize={5} country="in" category="general" mode={mode} />
          }
        />
        <Route
          path="/health"
          element={
            <News  key="health" pageSize={5} country="in" category="health" mode={mode} />
          }
        />
        <Route
          path="/science"
          element={
            <News  key="science" pageSize={5} country="in" category="science" mode={mode} />
          }
        />
        <Route
          path="/sports"
          element={
            <News  key="sports" pageSize={5} country="in" category="sports" mode={mode} />
          }
        />
        <Route
          path="/technology"
          element={
            <News  key="technology" pageSize={5} country="in" category="technology" mode={mode} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
