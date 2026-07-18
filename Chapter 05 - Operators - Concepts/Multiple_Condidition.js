let score = 85;
let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';
console.log(grade); // B    
if (grade === 'A') {
    console.log("Excellent!");
}  else if (grade === 'B') {
    console.log("Good job!");
} else if (grade === 'C') {
    console.log("You passed.");
}   
