let responseCode = 404;

switch (responseCode) {

    case 200:
        console.log (" 200 OK");
        break;
    case 404:
        console.log ("Page not found");
        break;
    case 302:
        console.log ("Changes updated")
        break;
    default:
        console.log ("Not mathing with the status code");    
}