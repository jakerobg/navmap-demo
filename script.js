//floating tooltip
const tooltip = document.getElementById("tooltip");
const tooltipLabel = document.getElementById("tooltip-label");
const tooltipStats = document.getElementById("tooltip-stats");

//storing state data
const stateData = [];

/**
 * converts the percentage attribute to a rgb for CSS fill value based on start and end ranges
 */
function percentageToColor(percentage) {
    const diffRed = Math.round(252 + (0 - 249) * percentage * 0.01);
    const diffGreen = Math.round(252 + (104 - 249) * percentage * 0.01);
    const diffBlue = Math.round(252 + (154 - 249) * percentage * 0.01);
    return `rgb(${diffRed}, ${diffGreen}, ${diffBlue})`;
}

function stateFillAlt() {
    localData.forEach((state) => {
        const path = document.getElementById(state.abbreviation);

        if (path) {
            const fillColor = percentageToColor(state.percentage);
            path.setAttribute("fill", fillColor);
        }
    });
}

/**
 * fills each state based on percentage AND stores in state data
 */
async function stateFill() {
    const url = "https://edit.zoningatlas.org/atlas/status/summary/state/";
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        //same as await response - returned from fetch
        .then((data) => {
            data.forEach((state) => {
                const path = document.getElementById(state.abbreviation);

                if (path) {
                    const fillColor = percentageToColor(state.percentage);
                    path.setAttribute("fill", fillColor);
                }
                //STORE
                stateData.push({
                    state: state.state,
                    abbreviation: state.abbreviation,
                    percentage: state.percentage,
                    published_jurisdictions: state.published_jurisdictions,
                    total_jurisdictions: state.total_jurisdictions,
                });
            });
        })
        .catch((error) => {
            console.error("can't fetch:", error);
        });
}

//SEARCHES STATE DATA FOR MATCHING STATE (slow but works)
function getState(abb) {
    var returnState = {
        state: "",
        percentage: 0,
        abbreviation: "",
    };
    stateData.forEach((state) => {
        if (state.abbreviation == abb) {
            returnState = state;
        }
    });

    return returnState;
}

//TOOLTIP
document.querySelectorAll("svg path").forEach((path) => {
    if (window.innerWidth <= 1000) {
        path.addEventListener("mouseenter", (event) => {
            const state = getState(event.target.getAttribute("id"));
            tooltipLabel.textContent = `${state.state}:`;
            tooltipStats.textContent = `${state.published_jurisdictions}/${state.total_jurisdictions} published (${state.percentage}%)`;

            const rect = event.target.getBoundingClientRect();
            tooltip.style.left = rect.left + window.scrollX + "px";
            tooltip.style.top =
                rect.top + window.scrollY + rect.height + 5 + "px"; // Position below the state
            tooltip.style.display = "block";
        });
    } else {
        path.addEventListener("mouseenter", (event) => {
            const state = getState(event.target.getAttribute("id"));
            tooltipLabel.textContent = `${state.state}:`;
            tooltipStats.textContent = `${state.published_jurisdictions}/${state.total_jurisdictions} published (${state.percentage}%)`;
            tooltip.style.display = "block";
        });
    }

    path.addEventListener("mousemove", (event) => {
        const offsetX = 10; // Distance from the cursor
        const offsetY = 10; // Distance from the cursor

        // tooltip pos
        let tooltipX = event.pageX + offsetX;
        let tooltipY = event.pageY + offsetY;

        // right side of the screen
        if (tooltipX + tooltip.offsetWidth > window.innerWidth - 20) {
            tooltipX = event.pageX - tooltip.offsetWidth - offsetX;
        }

        // bottom of the screen
        if (tooltipY + tooltip.offsetHeight > window.innerHeight - 10) {
            tooltipY = event.pageY - tooltip.offsetHeight - offsetY;
        }

        // Set the new position
        tooltip.style.left = tooltipX + "px";
        tooltip.style.top = tooltipY + "px";

        tooltip.style.display = "block";
    });

    path.addEventListener("mouseleave", () => {
        tooltip.style.display = "none"; // Hide tooltip
    });
});
