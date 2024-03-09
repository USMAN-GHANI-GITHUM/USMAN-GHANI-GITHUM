// LOWER CASE 
var personname = "Babar";
console.log("lowercase:", personname.toLowerCase());
// UPPER CASE 
console.log("uppercase:", personname.toLocaleUpperCase());
//TITLE CASE
console.log("titlecase:", personname.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
