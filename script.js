function validateForm() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (name == "" || password == "") {
        alert("All fields are required");
        return false;
    }

    if (password !== confirm) {
        alert("Passwords do not match");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
// Get course from URL
const params = new URLSearchParams(window.location.search);
const course = params.get("course");

// Course data
const courses = {
    web: {
        title: "Web Development",
        description: "Learn HTML, CSS, and JavaScript.",
        instructor: "John",
        duration: "3 Months",
        topics: ["HTML Basics", "CSS Styling", "JavaScript"]
    },
    python: {
        title: "Python Programming",
        description: "Learn Python from basics to advanced.",
        instructor: "Alice",
        duration: "2 Months",
        topics: ["Basics", "OOP", "Projects"]
    },
    fullstack: {
        title: "Full Stack Development",
        description: "Frontend + Backend development.",
        instructor: "Arinae",
        duration: "4 Months",
        topics: ["Frontend", "Backend", "Database"]
    },
    sql: {
        title: "SQL",
        description: "Learn database queries and design.",
        instructor: "Shiya",
        duration: "1 Month",
        topics: ["Queries", "Joins", "Indexes"]
    }
};

// Load data
const data = courses[course];

if (data) {
    document.getElementById("title").innerText = data.title;
    document.getElementById("description").innerText = data.description;
    document.getElementById("instructor").innerText = data.instructor;
    document.getElementById("duration").innerText = data.duration;

    let list = document.getElementById("curriculum");
    data.topics.forEach(topic => {
        let li = document.createElement("li");
        li.innerText = topic;
        list.appendChild(li);
    });
}

// Enroll confirmation
function confirmEnroll() {
    let result = confirm("Are you sure you want to enroll?");
    
    if (result) {
        alert("Enrollment Successful!");
    }
}