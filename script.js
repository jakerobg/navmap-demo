//floating tooltip
const tooltip = document.getElementById("tooltip");
const tooltipLabel = document.getElementById("tooltip-label");
const tooltipStats = document.getElementById("tooltip-stats");

//storing state data
const stateData = [];

const localData = [
    {
        state: "Alabama",
        abbreviation: "AL",
        percentage: 5,
        total_jurisdictions: 250,
        published_jurisdictions: 12,
    },
    {
        state: "Alaska",
        abbreviation: "AK",
        percentage: 1,
        total_jurisdictions: 315,
        published_jurisdictions: 3,
    },
    {
        state: "Arizona",
        abbreviation: "AZ",
        percentage: 30,
        total_jurisdictions: 400,
        published_jurisdictions: 120,
    },
    {
        state: "Arkansas",
        abbreviation: "AR",
        percentage: 50,
        total_jurisdictions: 450,
        published_jurisdictions: 225,
    },
    {
        state: "California",
        abbreviation: "CA",
        percentage: 23,
        total_jurisdictions: 200,
        published_jurisdictions: 46,
    },
    {
        state: "Colorado",
        abbreviation: "CO",
        percentage: 14,
        total_jurisdictions: 150,
        published_jurisdictions: 21,
    },
    {
        state: "Connecticut",
        abbreviation: "CT",
        percentage: 45,
        total_jurisdictions: 300,
        published_jurisdictions: 135,
    },
    {
        state: "Delaware",
        abbreviation: "DE",
        percentage: 20,
        total_jurisdictions: 180,
        published_jurisdictions: 36,
    },
    {
        state: "Florida",
        abbreviation: "FL",
        percentage: 14,
        total_jurisdictions: 250,
        published_jurisdictions: 35,
    },
    {
        state: "Georgia",
        abbreviation: "GA",
        percentage: 25,
        total_jurisdictions: 500,
        published_jurisdictions: 125,
    },
    {
        state: "Hawaii",
        abbreviation: "HI",
        percentage: 82,
        total_jurisdictions: 450,
        published_jurisdictions: 369,
    },
    {
        state: "Idaho",
        abbreviation: "ID",
        percentage: 19,
        total_jurisdictions: 150,
        published_jurisdictions: 28,
    },
    {
        state: "Illinois",
        abbreviation: "IL",
        percentage: 30,
        total_jurisdictions: 400,
        published_jurisdictions: 120,
    },
    {
        state: "Indiana",
        abbreviation: "IN",
        percentage: 23,
        total_jurisdictions: 350,
        published_jurisdictions: 80,
    },
    {
        state: "Iowa",
        abbreviation: "IA",
        percentage: 26,
        total_jurisdictions: 180,
        published_jurisdictions: 46,
    },
    {
        state: "Kansas",
        abbreviation: "KS",
        percentage: 10,
        total_jurisdictions: 120,
        published_jurisdictions: 12,
    },
    {
        state: "Kentucky",
        abbreviation: "KY",
        percentage: 39,
        total_jurisdictions: 250,
        published_jurisdictions: 97,
    },
    {
        state: "Louisiana",
        abbreviation: "LA",
        percentage: 0,
        total_jurisdictions: 100,
        published_jurisdictions: 0,
    },
    {
        state: "Maine",
        abbreviation: "ME",
        percentage: 0,
        total_jurisdictions: 150,
        published_jurisdictions: 0,
    },
    {
        state: "Maryland",
        abbreviation: "MD",
        percentage: 18,
        total_jurisdictions: 300,
        published_jurisdictions: 54,
    },
    {
        state: "Massachusetts",
        abbreviation: "MA",
        percentage: 90,
        total_jurisdictions: 450,
        published_jurisdictions: 405,
    },
    {
        state: "Michigan",
        abbreviation: "MI",
        percentage: 70,
        total_jurisdictions: 400,
        published_jurisdictions: 280,
    },
    {
        state: "Minnesota",
        abbreviation: "MN",
        percentage: 35,
        total_jurisdictions: 300,
        published_jurisdictions: 105,
    },
    {
        state: "Mississippi",
        abbreviation: "MS",
        percentage: 33,
        total_jurisdictions: 200,
        published_jurisdictions: 66,
    },
    {
        state: "Missouri",
        abbreviation: "MO",
        percentage: 22,
        total_jurisdictions: 150,
        published_jurisdictions: 33,
    },
    {
        state: "Montana",
        abbreviation: "MT",
        percentage: 64,
        total_jurisdictions: 300,
        published_jurisdictions: 192,
    },
    {
        state: "Nebraska",
        abbreviation: "NE",
        percentage: 28,
        total_jurisdictions: 120,
        published_jurisdictions: 33,
    },
    {
        state: "Nevada",
        abbreviation: "NV",
        percentage: 45,
        total_jurisdictions: 450,
        published_jurisdictions: 202,
    },
    {
        state: "New Hampshire",
        abbreviation: "NH",
        percentage: 97,
        total_jurisdictions: 100,
        published_jurisdictions: 97,
    },
    {
        state: "New Jersey",
        abbreviation: "NJ",
        percentage: 21,
        total_jurisdictions: 180,
        published_jurisdictions: 37,
    },
    {
        state: "New Mexico",
        abbreviation: "NM",
        percentage: 5,
        total_jurisdictions: 250,
        published_jurisdictions: 12,
    },
    {
        state: "New York",
        abbreviation: "NY",
        percentage: 95,
        total_jurisdictions: 500,
        published_jurisdictions: 475,
    },
    {
        state: "North Carolina",
        abbreviation: "NC",
        percentage: 46,
        total_jurisdictions: 250,
        published_jurisdictions: 115,
    },
    {
        state: "North Dakota",
        abbreviation: "ND",
        percentage: 55,
        total_jurisdictions: 300,
        published_jurisdictions: 165,
    },
    {
        state: "Ohio",
        abbreviation: "OH",
        percentage: 34,
        total_jurisdictions: 400,
        published_jurisdictions: 136,
    },
    {
        state: "Oklahoma",
        abbreviation: "OK",
        percentage: 59,
        total_jurisdictions: 450,
        published_jurisdictions: 265,
    },
    {
        state: "Oregon",
        abbreviation: "OR",
        percentage: 20,
        total_jurisdictions: 300,
        published_jurisdictions: 60,
    },
    {
        state: "Pennsylvania",
        abbreviation: "PA",
        percentage: 45,
        total_jurisdictions: 400,
        published_jurisdictions: 180,
    },
    {
        state: "Rhode Island",
        abbreviation: "RI",
        percentage: 69,
        total_jurisdictions: 200,
        published_jurisdictions: 138,
    },
    {
        state: "South Carolina",
        abbreviation: "SC",
        percentage: 66,
        total_jurisdictions: 250,
        published_jurisdictions: 165,
    },
    {
        state: "South Dakota",
        abbreviation: "SD",
        percentage: 62,
        total_jurisdictions: 350,
        published_jurisdictions: 217,
    },
    {
        state: "Tennessee",
        abbreviation: "TN",
        percentage: 77,
        total_jurisdictions: 400,
        published_jurisdictions: 308,
    },
    {
        state: "Texas",
        abbreviation: "TX",
        percentage: 85,
        total_jurisdictions: 500,
        published_jurisdictions: 425,
    },
    {
        state: "Utah",
        abbreviation: "UT",
        percentage: 70,
        total_jurisdictions: 200,
        published_jurisdictions: 140,
    },
    {
        state: "Vermont",
        abbreviation: "VT",
        percentage: 75,
        total_jurisdictions: 350,
        published_jurisdictions: 262,
    },
    {
        state: "Virginia",
        abbreviation: "VA",
        percentage: 88,
        total_jurisdictions: 400,
        published_jurisdictions: 352,
    },
    {
        state: "Washington",
        abbreviation: "WA",
        percentage: 90,
        total_jurisdictions: 450,
        published_jurisdictions: 405,
    },
    {
        state: "West Virginia",
        abbreviation: "WV",
        percentage: 30,
        total_jurisdictions: 300,
        published_jurisdictions: 90,
    },
    {
        state: "Wisconsin",
        abbreviation: "WI",
        percentage: 65,
        total_jurisdictions: 400,
        published_jurisdictions: 260,
    },
    {
        state: "Wyoming",
        abbreviation: "WY",
        percentage: 58,
        total_jurisdictions: 150,
        published_jurisdictions: 87,
    },
];

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
    localData.forEach((state) => {
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
        tooltip.style.display = "block";
    });

    path.addEventListener("mousemove", (event) => {
        const offsetX = 10; // Distance from the cursor
        const offsetY = 10; // Distance from the cursor

        // Calculate tooltip position
        let tooltipX = event.pageX + offsetX;
        let tooltipY = event.pageY + offsetY;

        // Prevent tooltip from going off the right side of the screen
        if (tooltipX + tooltip.offsetWidth > window.innerWidth) {
            tooltipX = event.pageX - tooltip.offsetWidth - offsetX;
        }

        // Prevent tooltip from going off the bottom of the screen
        if (tooltipY + tooltip.offsetHeight > window.innerHeight / 1.5) {
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
