function getServices() {
    axios.get("../services.html")
    .then(function (response) {
        document.getElementById('content').innerHTML = response.data;
    });
}

function getContacts() {
    axios.get("../contacts.html")
    .then(function (response) {
        document.getElementById('content').innerHTML = response.data;
    });
}

function getVideos() {
    axios.get("../videos.html")
    .then(function (response) {
        document.getElementById('content').innerHTML = response.data;
    });
}

var d = new Date();

document.getElementById('current_year').innerHTML = d.getFullYear();