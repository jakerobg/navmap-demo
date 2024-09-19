/**
 * converts the percentage attribute to a rgb for CSS fill value based on start and end ranges
 */
function percentageToColor(percentage) {
    const diffRed = Math.round(249 + (111 - 249) * percentage * 0.01);
    const diffGreen = Math.round(249 + (174 - 249) * percentage * 0.01);
    const diffBlue = Math.round(249 + (206 - 249) * percentage * 0.01);
    return `rgb(${diffRed}, ${diffGreen}, ${diffBlue})`;
}

/**
 * fills each state based on percentage
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
                //const { abbreviation, percentage } = state;
                const path = document.getElementById(state.abbreviation);

                if (path) {
                    const fillColor = percentageToColor(state.percentage);
                    path.setAttribute("fill", fillColor);
                }
            });
        })
        .catch((error) => {
            console.error("can't fetch:", error);
        });
}

const tooltip = document.getElementById("tooltip");

document.querySelectorAll("svg path").forEach((path) => {
    path.addEventListener("mouseenter", (event) => {
        tooltip.textContent = event.target.getAttribute("id");
        tooltip.style.display = "block"; // Show tooltip
    });

    path.addEventListener("mousemove", (event) => {
        tooltip.style.left = event.pageX + 10 + "px"; //next to cursor
        tooltip.style.top = event.pageY + 10 + "px";
    });

    path.addEventListener("mouseleave", () => {
        tooltip.style.display = "none"; // Hide tooltip
    });
});
