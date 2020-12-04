function getServices() {
    axios.get("../services.html")
    .then(function (response) {
        document.getElementById('content').innerHTML = response.data;
        console.log(response);
    });
}

function getContacts() {
    axios.get("../contacts.html")
    .then(function (response) {
        console.log(response);
        document.getElementById('content').innerHTML = response.data;
    });
}

console.log('lesson2 executed');