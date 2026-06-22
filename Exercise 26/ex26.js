

function fetchStudent() {
    alert("Fetching student data...");
    return { id: 1, name: "Ali", grade: "A" };
}

console.log("Starting fetchStudent function");
const student = fetchStudent();
console.log("Data fetched:", student);
console.log("fetchStudent function completed");


console.log("-------------------------------------");
console.log("-------------------------------------");
console.log("-------------------------------------");
console.log("-------------------------------------");
console.log("-------------------------------------");
console.log("-------------------------------------");
console.log("-------------------------------------");


function nonBlockingDelay(callback) {
    setTimeout(() => {
        const user = { id: 1, name: "John Doe", age: 30, email: "KtM0v@example.com" };
        callback(user);
        console.log("Non-blocking delay completed.");
    }, 5000);
}
nonBlockingDelay(function(user) {
    console.log(user);
});
