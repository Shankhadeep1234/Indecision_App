console.log("App.js is running");

//JSX
const app = {
  title: "Indecision App",
  subTitle: "Put your in the hands of a computer"
};

const templateOne = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subTitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const userName = "Shankhadeep Bhadra";
const userAge = "24";
const userLocation = "West Bengal, India";
const templateTwo = (
  <div>
    <h1>Name: {userName}</h1>
    <p> age : {userAge}</p>
    <p>Location: {userLocation}</p>
  </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(templateOne, appRoot);
