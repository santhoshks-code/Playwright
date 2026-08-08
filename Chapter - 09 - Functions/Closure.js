// closure when an inner functin remembers the outer variable

function startBrowser() {
    let name = "Edge";

    function installBrowser() {
        console.log(name);
    }

    return installBrowser;
}

const runTC = startBrowser()
runTC();