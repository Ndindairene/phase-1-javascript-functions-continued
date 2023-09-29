// code your solution here
function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to " + activity + "!";
}

let mondayWork = function(activity = "go to the office") {
    return "This Monday, I will " + activity + ".";
}

function wrapAdjective(emphatic = '*') {
    return function(adjective) {
      return `You are ${emphatic}${adjective}${emphatic}!`;
    };
  }