function getMessage(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Something went wrong!");
            }
        }, 2000);
    });
}

async function fetchMessage() {
    try {
        const message = await getMessage(true); // change to false to test
        console.log("Success:", message);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchMessage();