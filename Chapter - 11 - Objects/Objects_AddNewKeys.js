const user = {
    name: "John",
    age: 55,
    address: "India"
};

console.log(user);

//Accessing properties
console.log(user.name);
console.log(user.address);
console.log(user["age"]);

//Adding or modifying properties
user.city = "NewYork";
user.age = 70
user.emailaddress = "hello@gmail.com";

console.log(user);