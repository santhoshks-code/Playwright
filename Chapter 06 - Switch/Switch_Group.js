let browser = "Chrome";

switch (browser) {

    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("This is Chromium project");
        break;
    case "Firefox":
        console.log ("This is Mozilla project");
        break;
    case "Safari":
        console.log ("This is Safari Project");
        break;
    default:
        console.log ("Unknown browers not matching browser");

}