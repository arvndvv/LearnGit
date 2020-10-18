import React, { useState } from "react";
import Commands from "./commands";
function Home() {
  const [learn, setLearn] = useState(false);

  const [user, setUser] = useState("");
  const [brd, setBrd] = useState("");
  const handleLearn = () => {
    if (user !== "") {
      setLearn(true);
    } else {
      setBrd("brd-red");
    }
  };
  const handleusr = (e) => {
    //console.log(e.target.value);
    setBrd("");
    setUser(e.target.value);
  };
  return !learn ? (
    <div>
      <div className="row section1">
        <div className="col-12 my-2 col-md-3 order-md-8 img-git">
          <img
            alt="git-logo"
            src="https://cdn.lynda.com/course/711821/711821-637286245793891078-16x9.jpg"
            width=""
          ></img>
        </div>
        <div className="col-12  my-2 col-md-8 p-md-4  order-md-1">
          <p>
            Git is a free and open source distributed version control system
            designed to handle everything from small to very large projects with
            speed and efficiency.
          </p>
          <div className="col-12 p-0 m-0">
            <details>
              <summary>Make it Simple!</summary>
              <p>
                As a starter, all you need to know is, its a tool using which we
                can track our projects. We can run it offline as well as online.
                Our status will be stored locally until we command it to upload
                it to some storage online, like, github, gitlab etc.
              </p>
              <p>
                <b>• Snapshot</b>
                <br />
                Git thinks of its data more like a series of snapshots of a
                miniature filesystem. With Git, every time you commit, or save
                the state of your project, Git basically takes a picture of what
                all your files look like at that moment and stores a reference
                to that snapshot. To be efficient, if files have not changed,
                Git doesn’t store the file again, just a link to the previous
                identical file it has already stored.
              </p>
            </details>
          </div>
          <div className="col-12 p-0 m-0">
            <details>
              <summary>Version Control</summary>

              <p>
                <b>• History Tracking</b>
                <br />
                Includes creating new document, spelling correction, grammar
                fix, color change, adding paragraph, deleting files, etc.
              </p>
              <p>
                <b>• Collaborative History Tracking</b>
                <br />
                When multiple persons work on same project, its hard to see who
                changed what? git keep track of everything each person did(it
                tracks, but we need to ask it to save or it wont save)
              </p>
            </details>
          </div>
        </div>
      </div>
      <div className="row mt-4 text-center">
        <div className="col-12">
          <input
            type="text"
            className={" usr mb-2 " + brd}
            placeholder="UserName"
            onChange={handleusr}
          />
        </div>
        <br />
        <div className="col-12 ">
          <button className=" learn-btn btn btn-primary" onClick={handleLearn}>
            Learn Basic
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Commands user={user} setLearn={setLearn} />
  );
}

export default Home;
