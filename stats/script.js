async function loadStats() {
    fetch("../stats.json")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("jurisdictions").textContent =
                data.jurisdictions;
            document.getElementById("completion").textContent = data.completion;
            document.getElementById("pages").textContent = data.pages;
            document.getElementById("population").textContent = data.population;
        })
        .catch((error) => console.error("Error fetching:", error));
}
