console.log (" - Confusing Comparisons in JS" );    


console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false   
console.log (null == 0); // Output: false
console.log (null === 0); // Output: false  
console.log(null > 0); // Output: false
console.log(null < 0); // Output: false
console.log(null >= 0); // Output: true
console.log(null == 0); // Output: false
console.log(null === 0); // Output: false

//Why null > 0 is false In JavaScript, null is not a number, but for relational comparisons like >, 
// it is converted to a numeric value first.
// null becomes 0
// 0 > 0 is false

//Why null >= 0 is true
//In JavaScript, relational operators convert null to a number before comparing.
//null is converted to 0
//null >= 0 is evaluated as !(null < 0)
// null < 0 becomes 0 < 0, which is false
// therefore null >= 0 becomes !false, which is true