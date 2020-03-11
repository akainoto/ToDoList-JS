
//No () on the function because we dont want to activate it
// we only want to export it to be used in app.js

exports.getDate = function() {

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  //gets an output out of the function
  return today.toLocaleDateString("en-US", options);

}

exports.getDay = function() {

  const today = new Date();

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);

}
