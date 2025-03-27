// Knowledge Base with Plant Requirements
const knowledgeBase = {
  troubleshooting: [
    // Nutrient Deficiencies
    {
      keywords: ["yellow leaves", "yellowing", "chlorosis", "yello", "yelow"],
      solution: "Yellow leaves often indicate a **nitrogen, iron, or magnesium deficiency**. Check your nutrient solution balance and adjust pH to 5.5–6.5. For nitrogen deficiency, add a nitrogen-rich fertilizer. For iron, use chelated iron supplements."
    },
    {
      keywords: ["yellow veins", "veins yellow", "green veins yellow leaves", "interveinal chlorosis"],
      solution: "Yellowing between leaf veins (interveinal chlorosis) is a sign of **magnesium deficiency**. Add Epsom salt (1 tsp/gallon) to your nutrient solution."
    },
    {
      keywords: ["purple leaves", "purple stems", "purpling", "purpl"],
      solution: "Purple leaves/stems indicate a **phosphorus deficiency**. Adjust your nutrient solution to include more phosphorus and ensure pH is between 5.5–6.5."
    },
    {
      keywords: ["brown tips", "leaf tips brown", "burnt tips", "tip burn"],
      solution: "Brown leaf tips suggest **nutrient burn** or **salt buildup**. Flush the system with pH-balanced water and reduce nutrient concentration."
    },
    {
      keywords: ["curling leaves", "leaves curling", "leaf curl"],
      solution: "Curling leaves may indicate **calcium deficiency** or **pest infestation**. Add cal-mag supplements and inspect for pests like aphids."
    },
    {
      keywords: ["zinc deficiency", "small leaves", "stunted growth", "leaf distortion"],
      solution: "Zinc deficiency causes small, distorted leaves. Add a zinc supplement or use a micronutrient mix to correct the imbalance."
    },
    {
      keywords: ["copper deficiency", "dark leaves", "wilting", "leaf dieback"],
      solution: "Copper deficiency leads to dark, wilted leaves. Add a copper supplement or use a micronutrient mix to resolve the issue."
    },

    // Root Issues
    {
      keywords: ["root rot", "roots brown", "slimy roots", "root smell", "rotten roots"],
      solution: "Root rot is caused by **overwatering/poor oxygenation**. Trim affected roots, add hydrogen peroxide (3% solution, 1 tbsp/gallon), and increase aeration with air stones."
    },
    {
      keywords: ["white roots", "healthy roots", "root color"],
      solution: "Healthy roots should be **white or cream-colored**. Brown roots indicate rot, while overly bright white roots may signal hydrogen peroxide overuse."
    },

    // Environmental Issues
    {
      keywords: ["wilting", "drooping", "wilted", "droppy"],
      solution: "Wilting can result from **underwatering, high temperatures, or root issues**. Check water levels, maintain 65–75°F (18–24°C), and inspect roots."
    },
    {
      keywords: ["leaf drop", "falling leaves", "leaves falling"],
      solution: "Sudden leaf drop is often due to **temperature stress** or **overwatering**. Stabilize the environment and adjust watering frequency."
    },
    {
      keywords: ["white spots", "powdery mildew", "fuzzy leaves"],
      solution: "White powdery spots indicate **powdery mildew**. Increase airflow, reduce humidity, and apply a baking soda spray (1 tsp baking soda + 1 quart water)."
    },
    {
      keywords: ["algae", "green water", "green slime"],
      solution: "Algae growth thrives in light-exposed water. Use **opaque reservoirs**, clean the system, and add 1–2 ml/gallon hydrogen peroxide to inhibit growth."
    },

    // pH and Nutrient Imbalance
    {
      keywords: ["ph imbalance", "ph high", "ph low", "acidic", "alkaline", "ph problm"],
      solution: "Ideal pH is **5.5–6.5**. Use pH up/down solutions to adjust. Flush the system if pH is outside this range."
    },
    {
      keywords: ["nutrient lockout", "lockout", "nute lock"],
      solution: "Nutrient lockout occurs when pH is imbalanced. Flush the system with pH-adjusted water and reintroduce nutrients gradually."
    },

    // Pests
    {
      keywords: ["aphids", "tiny bugs", "green bugs", "aphid"],
      solution: "Aphids can be controlled with **neem oil** (2 tbsp/gallon) or insecticidal soap. Introduce ladybugs as natural predators."
    },
    {
      keywords: ["spider mites", "webbing", "tiny mites", "spidermite"],
      solution: "Spider mites thrive in dry conditions. Increase humidity, spray plants with water, and apply neem oil every 3 days."
    },
    {
      keywords: ["fungus gnats", "small flies", "gnats"],
      solution: "Fungus gnats breed in wet soil/substrate. Use yellow sticky traps and let the growing medium dry slightly between waterings."
    },
    {
      keywords: ["thrips", "silvery leaves", "tiny black bugs"],
      solution: "Thrips cause silvery streaks on leaves. Use neem oil or spinosad-based insecticides to control infestations."
    },

    // Light and Temperature
    {
      keywords: ["legsy plants", "stretched", "thin stems", "leggy"],
      solution: "Leggy growth indicates **insufficient light**. Move plants closer to light sources or upgrade to stronger grow lights (e.g., 600W LED)."
    },
    {
      keywords: ["light burn", "bleached leaves", "burnt leaves", "too much light"],
      solution: "Light burn causes bleached or crispy leaves. Adjust light distance (12–24 inches from plants) and use a light meter to ensure 400–600 PPFD."
    },
    {
      keywords: ["cold damage", "too cold", "frost", "chill"],
      solution: "Cold damage causes dark, mushy leaves. Maintain temperatures above 60°F (15°C) and use heaters or insulation for hydroponic systems."
    },
    {
      keywords: ["heat stress", "too hot", "leaf scorch"],
      solution: "Heat stress causes wilting and leaf scorch. Maintain temperatures below 85°F (29°C) and use fans or cooling systems to regulate heat."
    },

    // Rare Issues
    {
      keywords: ["copper toxicity", "blue leaves", "copper buildup"],
      solution: "Copper toxicity causes blue-green leaves and stunted growth. Flush the system with clean water and avoid overusing copper-based nutrients."
    },
    {
      keywords: ["manganese deficiency", "yellow spots", "leaf mottling"],
      solution: "Manganese deficiency causes yellow spots and mottled leaves. Add a manganese supplement or use a micronutrient mix."
    },
    {
      keywords: ["boron deficiency", "brittle leaves", "hollow stems"],
      solution: "Boron deficiency leads to brittle leaves and hollow stems. Add a boron supplement or use a micronutrient mix."
    }
  ],

  plantRequirements: [
    {
      name: "Lettuce",
      pH: { min: 5.5, max: 6.5 },
      ec: { min: 0.8, max: 1.2 },
      temperature: "15-21°C",
      light: "12-16 hours daily",
      nutrients: "High nitrogen (N), moderate potassium (K)",
      growthTime: "30-45 days",
      details: {
        idealEC: "0.8-1.2",
        humidity: "40-60%",
        spacing: "6-8 inches",
        notes: "Fast-growing, ideal for beginners"
      }
    },
    {
      name: "Basil",
      pH: { min: 5.5, max: 6.5 },
      ec: { min: 1.0, max: 1.6 },
      temperature: "18-26°C",
      light: "14-18 hours daily",
      nutrients: "Balanced NPK with calcium (Ca)",
      growthTime: "60-75 days",
      details: {
        idealEC: "1.0-1.6",
        humidity: "40-70%",
        spacing: "8-12 inches",
        notes: "Prefers warmer temperatures"
      }
    },
    {
      name: "Tomato",
      pH: { min: 5.8, max: 6.8 },
      ec: { min: 2.0, max: 5.0 },
      temperature: "20-26°C",
      light: "16-18 hours daily",
      nutrients: "High potassium (K), phosphorus (P)",
      growthTime: "90-120 days",
      details: {
        idealEC: "2.0-5.0",
        humidity: "40-70%",
        spacing: "12-18 inches",
        notes: "Requires strong support structures"
      }
    },
    {
      name: "Strawberry",
      pH: { min: 5.5, max: 6.5 },
      ec: { min: 1.2, max: 1.8 },
      temperature: "18-24°C",
      light: "30,000-40,000 lux",
      nutrients: "High potassium, moderate phosphorus",
      growthTime: "90-120 days",
      details: {
        idealEC: "1.2-1.8",
        humidity: "50-70%",
        spacing: "8-12 inches",
        notes: "Day-neutral varieties work best"
      }
    }
  ]
};

// Display Plant Requirements
function displayPlantRequirements() {
  const container = document.querySelector('.requirements-grid');
  if (!container) return;

  container.innerHTML = knowledgeBase.plantRequirements.map(plant => `
    <div class="plant-card">
      <h3>${plant.name}</h3>
      <div class="parameter">
        <label>pH Range:</label>
        <span class="value">${plant.pH.min}-${plant.pH.max}</span>
      </div>
      <div class="parameter">
        <label>EC Range:</label>
        <span class="value">${plant.ec.min}-${plant.ec.max}</span>
      </div>
      <div class="parameter">
        <label>Temperature:</label>
        <span class="value">${plant.temperature}</span>
      </div>
      <div class="parameter">
        <label>Light:</label>
        <span class="value">${plant.light}</span>
      </div>
      <div class="parameter">
        <label>Nutrients:</label>
        <span class="value">${plant.nutrients}</span>
      </div>
      <div class="parameter">
        <label>Growth Time:</label>
        <span class="value">${plant.growthTime}</span>
      </div>
    </div>
  `).join('');
}

// Enhanced Troubleshooting Assistant
function checkSymptom() {
  const symptom = document.getElementById('symptom')?.value.trim();
  const solutionBox = document.getElementById('solution');

  if (!symptom || !solutionBox) return;

  solutionBox.innerHTML = "<p>Analyzing your issue...</p>";

  setTimeout(() => {
    const solution = getSolution(symptom);
    solutionBox.innerHTML = solution;
  }, 500);
}

// Unified Solution Finder
function getSolution(query) {
  // 1. First check troubleshooting issues
  for (const issue of knowledgeBase.troubleshooting) {
    if (issue.keywords.some(kw => query.toLowerCase().includes(kw.toLowerCase()))) {
      return `<p><strong>Solution:</strong> ${issue.solution}</p>`;
    }
  }

  // 2. Check for plant names
  const plant = knowledgeBase.plantRequirements.find(p => 
    query.toLowerCase().includes(p.name.toLowerCase())
  );

  if (plant) {
    return `
      <h3>${plant.name} Requirements</h3>
      <ul>
        <li><strong>pH:</strong> ${plant.pH.min}-${plant.pH.max}</li>
        <li><strong>Temperature:</strong> ${plant.temperature}</li>
        <li><strong>Light:</strong> ${plant.light}</li>
        <li><strong>EC Range:</strong> ${plant.ec.min}-${plant.ec.max}</li>
        <li><strong>Nutrients:</strong> ${plant.nutrients}</li>
      </ul>
    `;
  }

  return "<p>No solution found. Try our community forum or check the Plant Requirements guide!</p>";
}

// Nutrient Mixing Calculator
function calculateNutrients() {
  const waterVolume = document.getElementById('waterVolume')?.value;
  const resultBox = document.getElementById('result');

  if (!waterVolume || !resultBox) return;

  const nutrientAmount = waterVolume * 2; // Example calculation
  resultBox.textContent = `Add ${nutrientAmount}ml of nutrients.`;
}

// User Feedback System
function submitFeedback(response) {
  const feedbackMessage = response === 'yes' ? "Thank you for your feedback!" : "We'll improve this solution. Thank you!";
  alert(feedbackMessage);
  console.log(`User feedback: ${response}`);
}

// Admin Dashboard Functionality
if (window.location.pathname.includes("admin.html")) {
  const addEntryForm = document.getElementById('add-entry-form');
  if (addEntryForm) {
    addEntryForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const keywords = document.getElementById('keywords').value.split(',').map(k => k.trim());
      const solution = document.getElementById('solution').value;
      knowledgeBase.troubleshooting.push({ keywords, solution });
      alert("Entry added successfully!");
      addEntryForm.reset();
    });
  }
}

// Initialize Features Based on Page
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.requirements-grid')) {
    displayPlantRequirements();
  }

  const symptomForm = document.getElementById('symptom-form');
  if (symptomForm) {
    symptomForm.addEventListener('submit', (e) => {
      e.preventDefault();
      checkSymptom();
    });
  }

  const calculatorForm = document.getElementById('calculator-form');
  if (calculatorForm) {
    calculatorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      calculateNutrients();
    });
  }
});
