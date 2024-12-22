document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const username = document.getElementById("username").value.trim();
    const projectTitle = document.getElementById("projectTitle").value.trim();
    const codeSnippet = document.getElementById("codeSnippet").value.trim();

    // Validate form fields
    if (!username || !projectTitle || !codeSnippet) {
        alert("Please fill out all fields before submitting!");
        return;
    }

    // Display success message
    document.getElementById("uploadForm").classList.add("hidden");
    document.getElementById("successMessage").classList.remove("hidden");
});

function resetForm() {
    // Reset form
    document.getElementById("uploadForm").reset();
    document.getElementById("uploadForm").classList.remove("hidden");
    document.getElementById("successMessage").classList.add("hidden");
}
