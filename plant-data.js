// Hydroponic plant database (50+ plants)
const plants = [
    {
        name: "Lettuce",
        pH: "5.5 - 6.5",
        temp: "15 - 21",
        light: "10,000 - 15,000",
        nutrients: "Nitrogen (N), Potassium (K)",
        growthTime: "30-45 days"
    },
    {
        name: "Basil",
        pH: "5.5 - 6.5",
        temp: "18 - 26",
        light: "25,000 - 35,000",
        nutrients: "Calcium (Ca), Magnesium (Mg)",
        growthTime: "60-75 days"
    },
    {
        name: "Tomato",
        pH: "5.8 - 6.8",
        temp: "20 - 26",
        light: "35,000 - 45,000",
        nutrients: "Phosphorus (P), Potassium (K)",
        growthTime: "90-120 days"
    },
    {
        name: "Kale",
        pH: "5.5 - 6.5",
        temp: "12 - 24",
        light: "20,000 - 35,000",
        nutrients: "Nitrogen (N), Calcium (Ca)",
        growthTime: "50-65 days"
    },
    {
        name: "Spinach",
        pH: "6.0 - 7.0",
        temp: "10 - 20",
        light: "12,000 - 20,000",
        nutrients: "Iron (Fe), Magnesium (Mg)",
        growthTime: "40-50 days"
    },
    {
        name: "Strawberry",
        pH: "5.5 - 6.5",
        temp: "18 - 22",
        light: "25,000 - 40,000",
        nutrients: "Calcium (Ca), Potassium (K)",
        growthTime: "60-90 days"
    },
    {
        name: "Bell Pepper",
        pH: "5.8 - 6.8",
        temp: "21 - 26",
        light: "35,000 - 45,000",
        nutrients: "Phosphorus (P), Calcium (Ca)",
        growthTime: "90-120 days"
    },
    {
        name: "Cucumber",
        pH: "5.8 - 6.0",
        temp: "21 - 24",
        light: "30,000 - 40,000",
        nutrients: "Potassium (K), Magnesium (Mg)",
        growthTime: "50-70 days"
    },
    {
        name: "Mint",
        pH: "6.0 - 7.0",
        temp: "18 - 22",
        light: "20,000 - 30,000",
        nutrients: "Nitrogen (N), Iron (Fe)",
        growthTime: "60-90 days"
    },
    {
        name: "Swiss Chard",
        pH: "6.0 - 6.5",
        temp: "15 - 24",
        light: "15,000 - 25,000",
        nutrients: "Potassium (K), Magnesium (Mg)",
        growthTime: "55-65 days"
    },
    {
        name: "Arugula",
        pH: "6.0 - 6.5",
        temp: "10 - 18",
        light: "10,000 - 20,000",
        nutrients: "Nitrogen (N), Calcium (Ca)",
        growthTime: "30-40 days"
    },
    {
        name: "Bok Choy",
        pH: "6.0 - 7.0",
        temp: "15 - 20",
        light: "15,000 - 25,000",
        nutrients: "Nitrogen (N), Potassium (K)",
        growthTime: "45-60 days"
    },
    {
        name: "Chives",
        pH: "6.0 - 6.5",
        temp: "15 - 21",
        light: "20,000 - 30,000",
        nutrients: "Nitrogen (N), Phosphorus (P)",
        growthTime: "60-90 days"
    },
    {
        name: "Cilantro",
        pH: "6.0 - 6.7",
        temp: "15 - 21",
        light: "15,000 - 25,000",
        nutrients: "Nitrogen (N), Potassium (K)",
        growthTime: "50-55 days"
    },
    {
        name: "Dill",
        pH: "5.8 - 6.5",
        temp: "18 - 24",
        light: "20,000 - 30,000",
        nutrients: "Nitrogen (N), Calcium (Ca)",
        growthTime: "70-90 days"
    },
    {
        name: "Fennel",
        pH: "6.0 - 7.0",
        temp: "15 - 21",
        light: "20,000 - 30,000",
        nutrients: "Potassium (K), Phosphorus (P)",
        growthTime: "80-100 days"
    },
    {
        name: "Green Beans",
        pH: "6.0 - 6.5",
        temp: "18 - 24",
        light: "25,000 - 35,000",
        nutrients: "Phosphorus (P), Potassium (K)",
        growthTime: "60-70 days"
    },
    {
        name: "Lemongrass",
        pH: "5.5 - 6.5",
        temp: "21 - 29",
        light: "30,000 - 40,000",
        nutrients: "Nitrogen (N), Potassium (K)",
        growthTime: "90-120 days"
    },
    {
        name: "Mustard Greens",
        pH: "6.0 - 6.8",
        temp: "15 - 20",
        light: "15,000 - 25,000",
        nutrients: "Nitrogen (N), Calcium (Ca)",
        growthTime: "40-50 days"
    },
    {
        name: "Oregano",
        pH: "6.0 - 7.0",
        temp: "18 - 24",
        light: "25,000 - 35,000",
        nutrients: "Nitrogen (N), Phosphorus (P)",
        growthTime: "80-90 days"
    },
    {
        name: "Parsley",
        pH: "6.0 - 7.0",
        temp: "15 - 21",
        light: "20,000 - 30,000",
        nutrients: "Nitrogen (N), Potassium (K)",
        growthTime: "70-90 days"
    },
    {
        name: "Peppermint",
        pH: "6.0 - 7.0",
        temp: "18 - 22",
        light: "20,000 - 30,000",
        nutrients: "Nitrogen (N), Iron (Fe)",
        growthTime: "90-120 days"
    },
    {
        name: "Radish",
        pH: "6.0 - 7.0",
        temp: "10 - 18",
        light: "10,000 - 20,000",
        nutrients: "Phosphorus (P), Potassium (K)",
        growthTime: "25-35 days"
    },
    {
        name: "Rosemary",
        pH: "5.5 - 6.5",
        temp: "18 - 24",
        light: "30,000 - 40,000",
        nutrients: "Calcium (Ca), Magnesium (Mg)",
        growthTime: "90-120 days"
    },
    {
        name: "Sage",
        pH: "5.5 - 6.5",
        temp: "18 - 24",
        light: "25,000 - 35,000",
        nutrients: "Nitrogen (N), Potassium (K)",
        growthTime: "75-90 days"
    },
    {
        name: "Thyme",
        pH: "5.5 - 6.5",
        temp: "18 - 24",
        light: "25,000 - 35,000",
        nutrients: "Calcium (Ca), Magnesium (Mg)",
        growthTime: "70-90 days"
    },
    {
        name: "Watercress",
        pH: "6.0 - 6.5",
        temp: "10 - 15",
        light: "10,000 - 20,000",
        nutrients: "Nitrogen (N), Iron (Fe)",
        growthTime: "30-40 days"
    },
    {
        name: "Zucchini",
        pH: "6.0 - 6.5",
        temp: "18 - 24",
        light: "30,000 - 40,000",
        nutrients: "Potassium (K), Phosphorus (P)",
        growthTime: "60-75 days"
    },
    {
        name: "Celery",
        pH: "6.0 - 6.5",
        temp: "15 - 21",
        light: "20,000 - 30,000",
        nutrients: "Nitrogen (N), Potassium (K)",
        growthTime: "120-140 days"
    },
    {
        name: "Endive",
        pH: "5.8 - 6.5",
        temp: "15 - 18",
        light: "15,000 - 25,000",
        nutrients: "Calcium (Ca), Magnesium (Mg)",
        growthTime: "80-90 days"
    },
    {
        name: "Kohlrabi",
        pH: "6.0 - 6.5",
        temp: "15 - 18",
        light: "15,000 - 25,000",
        nutrients: "Potassium (K), Phosphorus (P)",
        growthTime: "50-60 days"
    },
    {
        name: "Leeks",
        pH: "6.0 - 6.8",
        temp: "12 - 18",
        light: "15,000 - 25,000",
        nutrients: "Nitrogen (N), Potassium (K)",
        growthTime: "120-150 days"
    },
    {
        name: "Okra",
        pH: "6.0 - 6.5",
        temp: "21 - 29",
        light: "35,000 - 45,000",
        nutrients: "Phosphorus (P), Calcium (Ca)",
        growthTime: "90-120 days"
    },
    {
        name: "Peas",
        pH: "6.0 - 7.0",
        temp: "12 - 18",
        light: "20,000 - 30,000",
        nutrients: "Phosphorus (P), Potassium (K)",
        growthTime: "60-70 days"
    },
    {
        name: "Scallions",
        pH: "6.0 - 6.5",
        temp: "15 - 21",
        light: "15,000 - 25,000",
        nutrients: "Nitrogen (N), Potassium (K)",
        growthTime: "60-80 days"
    },
    {
        name: "Sorrel",
        pH: "5.5 - 6.5",
        temp: "15 - 20",
        light: "15,000 - 25,000",
        nutrients: "Nitrogen (N), Iron (Fe)",
        growthTime: "60-70 days"
    },
    {
        name: "Tatsoi",
        pH: "6.0 - 7.0",
        temp: "10 - 15",
        light: "15,000 - 25,000",
        nutrients: "Calcium (Ca), Magnesium (Mg)",
        growthTime: "45-50 days"
    },
    {
        name: "Turnip Greens",
        pH: "6.0 - 6.5",
        temp: "10 - 18",
        light: "15,000 - 25,000",
        nutrients: "Nitrogen (N), Potassium (K)",
        growthTime: "40-50 days"
    },
    {
        name: "Wasabi",
        pH: "6.0 - 7.0",
        temp: "10 - 15",
        light: "15,000 - 25,000",
        nutrients: "Calcium (Ca), Sulfur (S)",
        growthTime: "180-240 days"
    },
    {
        name: "Broccoli",
        pH: "6.0 - 6.5",
        temp: "15 - 18",
        light: "25,000 - 35,000",
        nutrients: "Nitrogen (N), Phosphorus (P)",
        growthTime: "90-120 days"
    },
    {
        name: "Cauliflower",
        pH: "6.0 - 6.5",
        temp: "15 - 18",
        light: "25,000 - 35,000",
        nutrients: "Boron (B), Molybdenum (Mo)",
        growthTime: "120-150 days"
    },
    {
        name: "Brussels Sprouts",
        pH: "6.0 - 6.5",
        temp: "15 - 18",
        light: "25,000 - 35,000",
        nutrients: "Nitrogen (N), Potassium (K)",
        growthTime: "150-180 days"
    },
    {
        name: "Eggplant",
        pH: "5.5 - 6.0",
        temp: "21 - 26",
        light: "35,000 - 45,000",
        nutrients: "Phosphorus (P), Potassium (K)",
        growthTime: "100-120 days"
    },
    {
        name: "Chard",
        pH: "6.0 - 6.5",
        temp: "15 - 21",
        light: "15,000 - 25,000",
        nutrients: "Nitrogen (N), Magnesium (Mg)",
        growthTime: "55-65 days"
    },
    {
        name: "Collard Greens",
        pH: "6.0 - 6.5",
        temp: "15 - 21",
        light: "20,000 - 30,000",
        nutrients: "Calcium (Ca), Magnesium (Mg)",
        growthTime: "60-75 days"
    },
    {
        name: "Garlic",
        pH: "6.0 - 6.5",
        temp: "10 - 15",
        light: "20,000 - 30,000",
        nutrients: "Sulfur (S), Phosphorus (P)",
        growthTime: "150-180 days"
    },
    {
        name: "Ginger",
        pH: "5.5 - 6.5",
        temp: "22 - 25",
        light: "20,000 - 30,000",
        nutrients: "Potassium (K), Phosphorus (P)",
        growthTime: "240-300 days"
    },
    {
        name: "Horseradish",
        pH: "6.0 - 6.5",
        temp: "15 - 20",
        light: "20,000 - 30,000",
        nutrients: "Potassium (K), Sulfur (S)",
        growthTime: "180-240 days"
    },
    {
        name: "Lavender",
        pH: "6.0 - 7.0",
        temp: "18 - 24",
        light: "30,000 - 40,000",
        nutrients: "Calcium (Ca), Magnesium (Mg)",
        growthTime: "90-120 days"
    },
    {
        name: "Marjoram",
        pH: "6.0 - 7.0",
        temp: "18 - 24",
        light: "25,000 - 35,000",
        nutrients: "Nitrogen (N), Potassium (K)",
        growthTime: "80-90 days"
    },
    {
        name: "Nasturtium",
        pH: "6.0 - 6.5",
        temp: "15 - 21",
        light: "20,000 - 30,000",
        nutrients: "Phosphorus (P), Potassium (K)",
        growthTime: "50-60 days"
    },
    {
        name: "Pak Choi",
        pH: "6.0 - 7.0",
        temp: "15 - 20",
        light: "15,000 - 25,000",
        nutrients: "Nitrogen (N), Calcium (Ca)",
        growthTime: "45-60 days"
    }
];

// Rest of your existing JavaScript code remains exactly the same...
document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector("#plant-table tbody");
    const searchInput = document.getElementById("plant-search");
    const searchBtn = document.getElementById("search-btn");
    const plantDetails = document.getElementById("plant-details");

    // 1. HIDE DETAILS BY DEFAULT and show empty table
    plantDetails.style.display = "none";
    showEmptyTable();

    // 2. Search functionality
    searchBtn.addEventListener("click", handleSearch);
    searchInput.addEventListener("keyup", function(e) {
        if (e.key === "Enter") handleSearch();
    });

    // 3. Click handler for table rows
    tableBody.addEventListener("click", function(e) {
        const row = e.target.closest("tr");
        if (row && row.getAttribute("data-plant")) {
            showPlantDetails(row.getAttribute("data-plant"));
        }
    });

    function handleSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (!searchTerm) {
            showEmptyTable();
            plantDetails.style.display = "none";
            return;
        }

        const filteredPlants = plants.filter(plant => 
            plant.name.toLowerCase().includes(searchTerm) ||
            plant.nutrients.toLowerCase().includes(searchTerm)
        );
        
        renderTable(filteredPlants);
        // Hide details when searching
        plantDetails.style.display = "none";
    }

    function showEmptyTable() {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" class="no-results">Search for a plant to see its requirements</td>
            </tr>
        `;
    }

    function renderTable(data) {
        tableBody.innerHTML = "";

        if (data.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="6" class="no-results">No plants found. Try another search.</td>
                </tr>
            `;
            return;
        }

        data.forEach(plant => {
            const row = document.createElement("tr");
            row.setAttribute("data-plant", plant.name.toLowerCase());
            row.innerHTML = `
                <td>${plant.name}</td>
                <td>${plant.pH}</td>
                <td>${plant.temp}</td>
                <td>${plant.light}</td>
                <td>${plant.nutrients}</td>
                <td>${plant.growthTime}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    function showPlantDetails(plantName) {
        const plant = plants.find(p => p.name.toLowerCase() === plantName.toLowerCase());
        if (!plant) return;

        plantDetails.innerHTML = `
            <h2>${plant.name}</h2>
            <div class="parameter-row">
                <div class="parameter-label">pH Range:</div>
                <div class="parameter-value">${plant.pH}</div>
            </div>
            <div class="parameter-row">
                <div class="parameter-label">Temperature:</div>
                <div class="parameter-value">${plant.temp}°C</div>
            </div>
            <div class="parameter-row">
                <div class="parameter-label">Light:</div>
                <div class="parameter-value">${plant.light}</div>
            </div>
            <div class="parameter-row">
                <div class="parameter-label">Nutrients:</div>
                <div class="parameter-value">${plant.nutrients}</div>
            </div>
            <div class="parameter-row">
                <div class="parameter-label">Growth Time:</div>
                <div class="parameter-value">${plant.growthTime}</div>
            </div>
        `;
        plantDetails.style.display = "block";
    }
});
