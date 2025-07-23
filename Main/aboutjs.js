// Function to switch between tabs
function openTab(tabName) {
    let tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// Scroll animation for the about section
document.addEventListener("DOMContentLoaded", function () {
    let aboutSection = document.getElementById("about");
    let observer = new IntersectionObserver(
        function (entries) {
            if (entries[0].isIntersecting) {
                aboutSection.classList.add("visible");
            }
        },
        { threshold: 0.5 }
    );

    observer.observe(aboutSection);
});


document.addEventListener("DOMContentLoaded", function() {
    const navButton = document.getElementById("nav-button");
    const navList = document.getElementById("nav-list");
    const overlay = document.createElement("div"); 
    overlay.id = "overlay"; 
    document.body.appendChild(overlay); 

    // Ensure navButton is always visible
    navButton.style.display = "block"; 
    overlay.style.display = "none";

    // Show/hide navigation menu
    function toggleNavList() {
        if (navList.style.right === "0px") {
            navList.style.right = "-250px"; 
            overlay.style.display = "none";
        } else {
            navList.style.right = "0px"; 
            overlay.style.display = "block";
        }
    }

    navButton.addEventListener("click", toggleNavList);

    overlay.addEventListener("click", function() {
        navList.style.right = "-250px"; 
        overlay.style.display = "none";
    });
});


