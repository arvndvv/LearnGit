import React, { useState } from "react";

function Commands({ user, setLearn }) {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  const [cmd, setcmd] = useState("");
  const [err, seterr] = useState("");
  const handlecmd = (e) => {
    seterr("");
    setcmd(e.target.value);
  };
  const submit = (e) => {
    if (e.which === 13) {
      if (cmd === "") {
        seterr("no command given!");
      } else if (cmd === "exit") {
        setLearn(false);
      } else {
        seterr("Wrong command!");
      }
    }
  };

  return (
    <div>
      <div className="monitor" autoFocus>
        <i></i>
        <i></i>
        <i></i>
        <p className="editor-title">{user}:~/learnGit</p>

        <span className="terminal-xtra">
          <span className="text-danger">{user}</span> :
          <span className="text-primary">~/learnGit </span>$
        </span>
        <code className="ml-1">git init</code>
        <p>
          This command creates an empty Git repository - basically a .git
          directory
        </p>
      </div>
      <div className="monitor">
        <i></i>
        <i></i>
        <i></i>
        <p className="editor-title">{user}:~/learnGit</p>

        <span className="terminal-xtra">
          <span className="text-danger">{user}</span> :
          <span className="text-primary">~/learnGit </span>$
        </span>
        <code className="ml-1">git config --global user.name "{user}"</code>
        <p className="editor-title">{user}:~/learnGit</p>
        <br></br>
        <span className="terminal-xtra">
          <span className="text-danger">{user}</span> :
          <span className="text-primary">~/learnGit </span>$
        </span>
        <code className="ml-1">
          git config --global user.email "{user}@gmail.com"
        </code>

        <p>
          This command lets us assign some default details for our project, like
          author name, email, etc.
        </p>
      </div>
      <div className="monitor">
        <i></i>
        <i></i>
        <i></i>
        <p className="editor-title">{user}:~/learnGit</p>

        <span className="terminal-xtra">
          <span className="text-danger">{user}</span> :
          <span className="text-primary">~/learnGit </span>$
        </span>
        <code className="ml-1">git status</code>
        <p>
          This command shows us the changes we made which are yet to be
          commited. (commit is term for saving into the git.)
        </p>
      </div>
      <div className="monitor">
        <i></i>
        <i></i>
        <i></i>
        <p className="editor-title">{user}:~/learnGit</p>

        <span className="terminal-xtra">
          <span className="text-danger">{user}</span> :
          <span className="text-primary">~/learnGit </span>$
        </span>
        <code className="ml-1">git add .</code>
        <p>
          This command saves all our changes locally.<br></br> "." here implies
          all files that have changes can be saved to git. !Remember, git add
          only adds these files to git index, making it ready to be
          commited(saved)
        </p>
      </div>
      <div className="monitor">
        <i></i>
        <i></i>
        <i></i>
        <p className="editor-title">{user}:~/learnGit</p>

        <span className="terminal-xtra">
          <span className="text-danger">{user}</span> :
          <span className="text-primary">~/learnGit </span>$
        </span>
        <code className="ml-1">git add index.html</code>
        <p>
          if we want only specific files to be added to git commit, we can
          specify the filename.
        </p>
      </div>
      <div className="monitor">
        <i></i>
        <i></i>
        <i></i>
        <p className="editor-title">{user}:~/learnGit</p>

        <span className="terminal-xtra">
          <span className="text-danger">{user}</span> :
          <span className="text-primary">~/learnGit </span>$
        </span>
        <code className="ml-1">git reset index.html</code>
        <p>
          Used if we have indexed a file using git add and we now want to remove
          it from index so that all others files except this can be saved.
        </p>
      </div>
      <div className="monitor">
        <i></i>
        <i></i>
        <i></i>
        <p className="editor-title">{user}:~/learnGit</p>

        <span className="terminal-xtra">
          <span className="text-danger">{user}</span> :
          <span className="text-primary">~/learnGit </span>$
        </span>
        <code className="ml-1">git commit -m "a_message"</code>
        <p>
          The git commit command captures a snapshot of the project's currently
          staged changes. Committed snapshots can be thought of as “safe”
          versions of a project—Git will never change them unless you explicitly
          ask it to.
        </p>
      </div>
      <p className="mt-2">
        The <code>-m</code> stands for message. When calling git commit, it is
        required to include a message. The message should be a short description
        of the changes being committed.
      </p>
      <div className="monitor">
        <i></i>
        <i></i>
        <i></i>
        <p className="editor-title">{user}:~/learnGit</p>

        <span className="terminal-xtra">
          <span className="text-danger">{user}</span> :
          <span className="text-primary">~/learnGit </span>$
        </span>
        <code className="ml-1">git log</code>
        <p>
          The Git Log tool allows you to view information about previous commits
          that have occurred in a project.
        </p>
      </div>
      <code className="d-block my-3 px-2">
        Now basics you need to know, inorder to keep track of your project
        locally, has been covered! There are more features and commands which is
        out of scope for this page.
      </code>
      <h6 className="">Check full Tutorials</h6>
      <a href="https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud#create-the-repository">
        Atlassian.com
      </a>
      <br></br>
      <a href="https://git-scm.com/book/en/v2">Documentation</a>
      <div className="monitor">
        <i></i>
        <i></i>
        <i></i>
        <p className="editor-title">{user}:~/learnGit</p>
        <code>Type "exit" in terminal and hit go or enter to go back</code>
        <br></br>
        <span className="terminal-xtra">
          <span className="text-danger">{user}</span> :
          <span className="text-primary">~/learnGit </span>$
        </span>
        <code className="ml-1">
          <input
            className="usrinput"
            type="text"
            onKeyPress={submit}
            onChange={handlecmd}
          ></input>
        </code>
        <br></br>
        <code>{err}</code>
      </div>
    </div>
  );
}
export default Commands;
