function fetchJSON() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('{"id":1,"name":"Ali","grade":"A"}');
        }, 4000);
    });
}

async function getData() {
    try {
        const jsonData = await fetchJSON();
        const data = JSON.parse(jsonData);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

console.log("Fetching data...");
getData();
console.log("Other code is running...");