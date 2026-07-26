let browser = ["chrome", "firefox", "safari", "opera", "edge"];
console.log(browser.length);

browser.pop(); //remove last one which is Edge
console.log(browser);

let removed = browser.shift();
//browser.shift(); // remove first one which is chrome
console.log(browser);
console.log(removed);

for (let i = 0; i < browser.length; i ++){
    console.log(browser[i]);
   if (browser[i] === "opera") {
    console.log("Opera is not supported");
}
}