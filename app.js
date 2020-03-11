const express = require("express");
const bodyParser = require("body-parser");

//calling function from date.js exports
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');

// Allows us to use letiables from html file. eg: req.body.newItem
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  //we can initiate date() and its functions anywhere after it's imported.
  //let day = date.getDay(); also works here to only display the day.
  const day = date.getDate();
  //Pass over the entire array again with the new item added in it.
  //Essentially refreshing the entire array.
  res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems})
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});


// *** To find which day of the week it is ***
// let today = new Date();
// let currentDay = today.getDay();
// let day = "";
//
// switch (currentDay) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//   console.log("Error: Current day is equal to: " + currentDay);
// }

//** To find if it's a weekend or weekday **
//
// if (currentDay === 6 || currentDay === 0) {
//   day = "Weekend";
// } else {
//   day = "Weekday";
// }
//EJS will look inside the views folder and list.ejs.
//Directories must be set out like this for EJS or it won't find it.
// res.render("list", {
//   kindOfDay: day
// });
