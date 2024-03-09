// LOWER CASE 
let personname: string ="Babar"
console.log("lowercase:", personname.toLowerCase());

// UPPER CASE 
console.log("uppercase:", personname.toLocaleUpperCase());

//TITLE CASE
console.log("titlecase:", personname.replace(/\bw/g,c => c.toUpperCase()));