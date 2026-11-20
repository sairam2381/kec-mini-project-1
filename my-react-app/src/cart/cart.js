let arr1 = [2, 3, 4, 5];
const find1 = arr1.find((element) => element === 1);
if (find1 != undefined) {
  console.log("Element is existing");
} else {
  console.log("Element is not existing");
}
console.log("Find element:", find1);
const fun1 = () => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == 1) {
      return true;
    }
  }
  return false;
};

let ans = fun1();
console.log("Ans:" + ans);
