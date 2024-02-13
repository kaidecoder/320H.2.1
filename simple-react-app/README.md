#GLAB 320H.2.1 - Building a Simple React Application

##Learning Objectives
After this lab, learners will have demonstrated the ability to:

- Use create-react-app to make a pre-configured React application.
- Create React components.
- Render React components within an application.
- Pass props to React components to modify their behavior.

## Instructions
If you have not yet installed Node.js and npm, please take the time to do so. If you have trouble installing Node, speak with your instructors.

The first step to creating a React application is making an App.js file inside of a project directory, but we have a tool for this, so we won't be doing it manually.

For this application, this is the only file we'll be working with. In future applications, you'll want to compartmentalize your applications components, features, and other elements in order to stay organized.


## Create-React-App
There is a wonderful tool that allows us to focus on code, rather than build, called Create React App. We will use this tool to setup our application.

It is important to note that create-react-app is now deprecated by the React team. Though it remains functional, developers are encouraged to use alternative tools and frameworks. Since these frameworks are beyond the scope of this course, we will continue to use create-react-app for our purposes.

We encourage exploration of other React frameworks like Next.js, Vite, and Remix as part of your learning efforts.

To create a project, run the following command:

npx create-react-app simple-react-application
Once complete, you should have a fully-configured application file system!

Note that there is a recommendation to run the following two commands, which you should do:

cd simple-react-application
npm start
This should open your broswer to localhost:3000 and display the template application.

Note: If your application displays an error, it is most likely a Windows-specific issue that can be easily resolved. Check that the casing of your file path in the command line is the same as the one seen by Node (/documents/simple-react-app is not the same as /Documents/simple-react-app). Navigate to the correctly cased file path. If the error persists, speak to your instructors.

Explore the Default App
Take some time to look through the default application's file structure and contents.

We have a node_modules folder, which holes all of our external packages and dependancies.
The public folder contains all of the files that will be served directly to the client.
The src folder contains our application files, including our .css files.
In a fully-fledged application, you'll want to create additional folders for things like features, components, and styles, but for this simple application we will work solely within the src/App.js file. Open that file in your code editor of choice.

Modifying App.js
Currently, App.js looks like this:

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
We're going to scrap the entirety of the App's current contents, leaving us with a simple fragment with nothing inside. We also don't need either of these imports, for now.

function App() {
  return (
    <>

    </>
  );
}

export default App;
Now, let's create a few simple components to display some content. We'll make a header, a footer, and a content component. You can fill these components with whatever content you wish.

function Header() {
  return (<h1>Simple React Application</h1>);
}

function Content() {
  return (<p>This is my first React Application, wish me luck!</p>);
}

function Footer() {
  return (<h1>Created by Me, of course.</h1>);
}

function App() {
  return (
    <>

    </>
  );
}

export default App;
Check your application at localhost:3000 (run npm start again if you need to). Notice that creating those components did nothing, because our only export is App(). Let's add our components to the App function.

function Header() {
  return (<h1>Simple React Application</h1>);
}

function Content() {
  return (<p>This is my first React Application, wish me luck!</p>);
}

function Footer() {
  return (<h1>Created by Me, of course.</h1>);
}

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
Now, looking at the application page should reflect our changes!

Let's continue by making the application just a little bit less simple. We'll add some props to our components, and some inline styling to make things look better. As you work through these steps, feel free to get creative! Not everything needs to look exactly as these examples show.

function Header() {
  return (<h1>Simple React Application</h1>);
}

function Content(props) {
  return (<p style={{color: props.color}}>{props.text}</p>);
}

function Footer() {
  return (<h1>Created by Me, of course.</h1>);
}

function App() {
  return (
    <>
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  );
}

export default App;
Take a look at your application again, and now it should be just a little bit more interesting!

Continue experimenting with the layout, styling, and other options within your application. If you have time, consider splitting your components into separate files, exporting them with export default, and importing them into App.js. Smaller files are always easier to work with, and these components could get much larger as our application's level of complexity increases.

There are other, newer ways to incorporate CSS into React as well. You can read about 4 Ways to Style React Components and try to use one of these methods to help style your React application. We will go over the styled-components library and other common React libraries in a future lesson.