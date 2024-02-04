function sum (num1, num2) {
  return num1 + num2;
};

if("") console.log("this is truthy")
else console.log("this is falsey")

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

module.exports = { sum, compileAndroidCode };