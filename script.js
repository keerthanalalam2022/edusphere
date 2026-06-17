function login() {
    window.location.href = "dashboard.html";
}

function searchSubjects() {

    let input = document.getElementById("searchBox").value.toLowerCase();

    let subjects = document.querySelectorAll("#subjects a");

    subjects.forEach(function(subject) {

        let text = subject.textContent.toLowerCase();

        if (text.includes(input)) {
            subject.style.display = "inline";
        } else {
            subject.style.display = "none";
        }

    });
}function searchSubjects() {

    let input = document.getElementById("searchBox").value.toLowerCase();

    let subjects = document.querySelectorAll("#subjects a");

    subjects.forEach(function(subject) {

        let text = subject.textContent.toLowerCase();

        if (text.includes(input)) {
            subject.style.display = "inline";
        } else {
            subject.style.display = "none";
        }

    });
}