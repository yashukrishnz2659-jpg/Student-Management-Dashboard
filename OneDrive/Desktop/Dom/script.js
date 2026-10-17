
const students = [
    {
        name: "Yashmitha",
        course: "Computer Science",
        skill: "HTML & CSS",
        status: "Completed"
    },
    {
        name: "Rahul",
        course: "Information Technology",
        skill: "JavaScript",
        status: "In Progress"
    },
    {
        name: "Priya",
        course: "Computer Science",
        skill: "Python",
        status: "Completed"
    },
    {
        name: "Arjun",
        course: "Information Science",
        skill: "React Basics",
        status: "Not Started"
    },
    {
        name: "Sneha",
        course: "Computer Science",
        skill: "Web Development",
        status: "In Progress"
    }
];

// Select and modify DOM elements
const heading = document.getElementById("pageTitle");
const profileContainer = document.querySelector("#profileContainer");
const studentCount = document.getElementById("studentCount");
const noticeTitle = document.getElementById("noticeTitle");
const noticeText = document.getElementById("noticeText");

// Change the heading
heading.textContent = "Student Management Dashboard";

// Create student profile cards dynamically
students.forEach(function(student) {

    const card = document.createElement("div");
    card.className = "card";

    const top = document.createElement("div");
    top.className = "card-top";

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = student.name.charAt(0);

    const studentInfo = document.createElement("div");

    const name = document.createElement("h3");
    name.className = "student-name";
    name.textContent = student.name;

    const label = document.createElement("p");
    label.className = "student-label";
    label.textContent = "Student Profile";

    studentInfo.appendChild(name);
    studentInfo.appendChild(label);

    top.appendChild(avatar);
    top.appendChild(studentInfo);

    const divider = document.createElement("div");
    divider.className = "card-divider";

    const courseLabel = document.createElement("p");
    courseLabel.className = "detail-label";
    courseLabel.textContent = "COURSE";

    const course = document.createElement("p");
    course.className = "course-name";
    course.textContent = student.course;

    const skillLabel = document.createElement("p");
    skillLabel.className = "detail-label";
    skillLabel.textContent = "PRIMARY SKILL";

    const skill = document.createElement("span");
    skill.className = "skill";
    skill.textContent = student.skill;

    const statusLabel = document.createElement("p");
    statusLabel.className = "detail-label";
    statusLabel.textContent = "LEARNING STATUS";

    const status = document.createElement("span");
    status.className = "status";
    status.textContent = student.status;

    if (student.status === "In Progress") {
        status.classList.add("in-progress");
    } else if (student.status === "Not Started") {
        status.classList.add("not-started");
    }

    // Add all elements to the student card
    card.appendChild(top);
    card.appendChild(divider);
    card.appendChild(courseLabel);
    card.appendChild(course);
    card.appendChild(skillLabel);
    card.appendChild(skill);
    card.appendChild(statusLabel);
    card.appendChild(status);

    // Add the card to the webpage
    profileContainer.appendChild(card);
});

// Highlight the first student card
const cards = profileContainer.querySelectorAll(".card");

if (cards.length > 0) {
    cards[0].classList.add("highlight");
}

// Remove the fifth student card automatically
if (cards.length > 4) {
    cards[4].remove();
}

// Update the count to match the cards displayed
studentCount.textContent =
    profileContainer.querySelectorAll(".card").length;

// Update the welcome notice
noticeTitle.textContent = "Welcome to StudentHub!";
noticeText.textContent =
    "Student profiles are ready. Explore their courses, skills, and learning progress.";
