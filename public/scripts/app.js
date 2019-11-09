"use strict";

console.log("App.js is running");

//JSX
var app = {
  title: "Indecision App",
  subTitle: "Put your in the hands of a computer"
};

var templateOne = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subTitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var userName = "Shankhadeep Bhadra";
var userAge = "24";
var userLocation = "West Bengal, India";
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Name: ",
    userName
  ),
  React.createElement(
    "p",
    null,
    " age : ",
    userAge
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    userLocation
  )
);

var appRoot = document.getElementById("app");
ReactDOM.render(templateOne, appRoot);
