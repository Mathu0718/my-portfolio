document.addEventListener("DOMContentLoaded", function () {
    const scriptURL = "https://script.google.com/macros/s/AKfycbyzr98PZxc_Hux4jRY4QYcYkDsF9ZR_O6mxwxoor-63whfpXegTQA0wP3XZKY99YBOV/exec"; // Replace with your script URL
    const form = document.forms["submit-to-google-sheet"];

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());

        console.log("Form Data:", formObject); // Debugging

        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                body: new URLSearchParams(formObject) // Ensures correct encoding
            });

            const result = await response.json();
            console.log("Server Response:", result);

            if (result.result === "success") {
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert("Submission failed: " + result.message);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            alert("Submission failed. Please check your internet connection.");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const navButton = document.getElementById("nav-button");
    const navList = document.getElementById("nav-list");
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    document.body.appendChild(overlay);

    navButton.style.display = "block"; 
    overlay.style.display = "none";  

    function toggleNavList() {
        if (navList.style.right === "0px") {
            navList.style.right = "-250px";
            overlay.style.display = "none";
            navButton.style.display = "block"; 
        } else {
            navList.style.right = "0px";
            overlay.style.display = "block";
            navButton.style.display = "none"; 
        }
    }

    navButton.addEventListener("click", toggleNavList);
    overlay.addEventListener("click", function() {
        navList.style.right = "-250px";
        overlay.style.display = "none";
        navButton.style.display = "block"; 
    });

    // Handle click on a project row
    const projectRows = document.querySelectorAll('.project-row');
    projectRows.forEach(row => {
        row.addEventListener('click', function() {
            const projectId = this.getAttribute('data-id');
            openDetailView(projectId);
        });
    });

    // Close detailed view
    function closeDetailView() {
        document.getElementById("detailed-view").style.display = "none";
    }

    // Open detailed view and load project content
    function openDetailView(projectId) {
        document.getElementById("detailed-view").style.display = "block";
        const title = document.getElementById("project-title");
        const description = document.getElementById("project-description");
        
        // Simulate loading the project data based on projectId
        if (projectId == "1") {
            title.innerHTML = "AI-Powered Cloud Assistant";
            description.innerHTML = "Detailed description of AI-powered cloud assistant project.";
        } else if (projectId == "2") {
            title.innerHTML = "Stock Price Prediction";
            description.innerHTML = "Detailed description of stock price prediction project.";
        }
    }
});