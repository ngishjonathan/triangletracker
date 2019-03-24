function findOut() {
  var sideC =prompt("Enter sideA")
  var sideB =prompt("Enter sideB")
  var sideC =prompt("Enter sideC")
}
if (sideA === sideB && sideA === sideC) {
alert("Equilateral")
}
else if (sideA === sideB && sideB !== sideC) {
alert("isorceless")
}
else if (sideB === sideC && sideB !== sideA) {
alert("isorceless")
}
else if (sideC === sideB && sideC !== sideA) {
alert("isorceless")
}
else if (sideA !== sideB && sideA !== sideC) {
alert("scalene")
}
else if (sideB !== sidec && sideC !== sideA) {
alert("scalene")
}
else {
alert("not a triangle")
}
