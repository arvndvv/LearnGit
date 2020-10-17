import React, { useState } from "react";
import Home from "./components/home";
function App() {
  const [menuopen, setmenuopen] = useState(false);
  const handleMenu = () => {
    setmenuopen(~menuopen);
  };
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <header className="col-12  text-light">
            <i className="title-logo"></i>
            <p className="title m-0 ml-2">LearnGit</p>

            <input
              type="checkbox"
              id="info"
              className="info-checkbox"
              value=""
              onChange={handleMenu}
            />
            <label className="info" htmlFor="info">
              !
            </label>
            <span className={`menu  ${menuopen ? "menu-show" : ""}`}>
              <p>
                Made with Love{" "}
                <span role="img" aria-label="heart">
                  ❣️
                </span>
                . Upvote, and provide your remarks.
              </p>
            </span>
          </header>
        </div>
        <Home />
      </div>
    </div>
  );
}

export default App;
