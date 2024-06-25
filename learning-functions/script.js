function add7(num) {
  return num + 7;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function capitalize(str) {
  initial = str.charAt(0).toUpperCase();
  restOfStr = str.slice(1).toLowerCase();

  return initial + restOfStr;
}

function lastLetter(str) {
  return str.charAt(str.length - 1);
}
