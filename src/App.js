import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">Colby Fucking Taylor</div>
        <p className="tagline">Full Stack Developer, Obscenist</p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <div className="content">
        <h1>WTF is GIT?</h1>
        <p>
          A note: this post was written with git installed on a local Windows
          laptop using Visual Studio Code
        </p>
        <p>
          Git, created by Linus Torvalds, is the modern standard in
          <i>version control</i>. The basic premise is that by saving versions
          of a project, you are able to compare or rebuild from an earlier state
          without starting from scratch.
        </p>
        <p>
          Think of git like an open world video game where you can create a save
          point at any time, and return to that point exactly as is, anytime you
          want. When you realize, perhaps 5 hours deep, that the left you took
          has brought you to nothing but wandering aimlessly into the void the
          and you were better off taking a left to find the abandoned ship, you
          can do just that. If you have severe FOMO, you can even save the least
          shitty version of your project and refer again if it turns out taking
          a left wasn't such a great idea, too.
        </p>
        <h2>Why Git Sucks</h2>
        <p>
          As an initial user, it really fucking does. You may feel overwhelmed
          implementing git as you begin your coding journey, and sometimes on
          top of all the other information it can be overwhelming. Are you in
          the right folder? What the hell do all of these errors mean?
        </p>
        <p>
          Your experience will undoubtedly yield it's own headaches, but believe
          in git, just a little bit, and you will be the shit.
        </p>
        <h2>Git is the Shit</h2>
        <p>I'm going to first prove git is amazing with a haiku:</p>
        <i>
          <p>
            git init, that's the shit <br />
            then git commit, or some shit
            <br />
            idk fuck it
          </p>
        </i>
        <p>
          Ok, maybe you still have some questions about how to use git in your
          workflow? Great! You've made it this far and you will be rewarded with
          a basic flow of using git from working locally to adding to github.
        </p>
        <h2>Git Init</h2>
        <p>
          In your command line (for example, Visual Studio Code's terminal which
          you can open and close with "ctrl + ~"), move to the directory that
          you want keep track of. Once here, our first step is to initialize
          git, with:
        </p>
        <code>git init</code>
        <p>What did that do?</p>
        <p>
          <code>git init</code> is essentially giving the command to use the
          initialization protocol within git. This will serve as a reference for
          all of your working files. By default, you will not actaully see the
          folder created to store the git inormation because the folder begins
          with a ".", as in ".git".
        </p>
        <h2>Git Steps After Setup</h2>
        <ol>
          <li>git add *</li>
          <li>git commit -m "whatever note you have about changes"</li>
          <li>git push</li>
        </ol>
        <h2>Git Status</h2>
        <p>
          <code>git status</code> can be used to see the git status of files
          ready to be committed, and those not.
        </p>

        <h2>Github Steps Explained</h2>
        <h3>Create a New Respository</h3>
        <ul>
          <li>echo "# 0000" {">>"} README.md</li>
          <li>git init git add README.md</li>
          <li>git commit -m "first commit"</li>
          <li>git branch -M main</li>
          <li>
            git remote add origin https://github.com/ColbyWTaylor/0000.git
          </li>
          <li>git push -u origin main</li>
        </ul>
        <h3>Push Existing Repository from Command Line</h3>
        <ol>
          <li>
            git remote add origin https://github.com/ColbyWTaylor/0000.git
          </li>
          <li>git branch -M main</li>
          <li>git push -u origin main</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
