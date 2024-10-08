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

/**
 * fills each state based on percentage AND stores in state data
 */
async function stateFill() {
    fetch("stateProgress.json")
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
        abbreviation: "",
        percentage: 0,
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
    path.addEventListener("mouseenter", (event) => {
        const state = getState(event.target.getAttribute("id"));
        tooltipLabel.textContent = `${state.state}:`;
        tooltipStats.textContent = `${state.published_jurisdictions}/${state.total_jurisdictions} published (${state.percentage}%)`;
        tooltip.style.display = "block"; // Show tooltip
        tooltipLabel.style.display = "flex";
    });

    path.addEventListener("mousemove", (event) => {
        tooltip.style.left = event.pageX + 10 + "px"; //next to cursor
        tooltip.style.top = event.pageY + 10 + "px";
    });

    path.addEventListener("mouseleave", () => {
        tooltip.style.display = "none"; // Hide tooltip
    });
});
