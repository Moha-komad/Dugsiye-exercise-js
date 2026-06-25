function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }
            return response.json();
        })
        .then(users => {
            console.log("Users:", users);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

getUsers();