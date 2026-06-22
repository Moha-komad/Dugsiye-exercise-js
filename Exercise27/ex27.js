// function fetchData() {
//     return new Promise((resolve, reject) => {
//         const success = true;

//         setTimeout(() => {
//             if (success) {
//                 resolve({ id: 1, name: "Ali", grade: "A" });
//             } else {
//                 reject("Failed to fetch data.");
//             }
//         }, 5000);
//     });
// }

// fetchData()
//     .then(data => {
//         console.log("Data fetched:", data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// function getMessage() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data fetched successfully!");
//         }, 2000);
//     });
// }

// getMessage()
//     .then(message => {
//         console.log(message);
//     })
//     .catch(error => {
//         console.log(error);
//     });

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

getMessage(true) // change to false to test the catch block
    .then(message => {
        console.log("Success:", message);
    })
    .catch(error => {
        console.log("Error:", error);
    });
    