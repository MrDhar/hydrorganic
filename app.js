// Knowledge Base (Add this at the top of the file)
const knowledgeBase = [
  // Nutrient Deficiencies
  {
    keywords: ["yellow leaves", "yellowing", "chlorosis", "yello", "yelow"],
    solution: "Yellow leaves often indicate a **nitrogen, iron, or magnesium deficiency**. Check your nutrient solution balance and adjust pH to 5.5–6.5. For nitrogen deficiency, add a nitrogen-rich fertilizer. For iron, use chelated iron supplements.",
  },
  {
    keywords: ["yellow veins", "veins yellow", "green veins yellow leaves", "interveinal chlorosis"],
    solution: "Yellowing between leaf veins (interveinal chlorosis) is a sign of **magnesium deficiency**. Add Epsom salt (1 tsp/gallon) to your nutrient solution.",
  },
  {
    keywords: ["purple leaves", "purple stems", "purpling", "purpl"],
    solution: "Purple leaves/stems indicate a **phosphorus deficiency**. Adjust your nutrient solution to include more phosphorus and ensure pH is between 5.5–6.5.",
  },
  {
    keywords: ["brown tips", "leaf tips brown", "burnt tips", "tip burn"],
    solution: "Brown leaf tips suggest **nutrient burn** or **salt buildup**. Flush the system with pH-balanced water and reduce nutrient concentration.",
  },
  {
    keywords: ["curling leaves", "leaves curling", "leaf curl"],
    solution: "Curling leaves may indicate **calcium deficiency** or **pest infestation**. Add cal-mag supplements and inspect for pests like aphids.",
  },
  {
    keywords: ["zinc deficiency", "small leaves", "stunted growth", "leaf distortion"],
    solution: "Zinc deficiency causes small, distorted leaves. Add a zinc supplement or use a micronutrient mix to correct the imbalance.",
  },
  {
    keywords: ["copper deficiency", "dark leaves", "wilting", "leaf dieback"],
    solution: "Copper deficiency leads to dark, wilted leaves. Add a copper supplement or use a micronutrient mix to resolve the issue.",
  },

  // Root Issues
  {
    keywords: ["root rot", "roots brown", "slimy roots", "root smell", "rotten roots"],
    solution: "Root rot is caused by **overwatering/poor oxygenation**. Trim affected roots, add hydrogen peroxide (3% solution, 1 tbsp/gallon), and increase aeration with air stones.",
  },
  {
    keywords: ["white roots", "healthy roots", "root color"],
    solution: "Healthy roots should be **white or cream-colored**. Brown roots indicate rot, while overly bright white roots may signal hydrogen peroxide overuse.",
  },

  // Environmental Issues
  {
    keywords: ["wilting", "drooping", "wilted", "droppy"],
    solution: "Wilting can result from **underwatering, high temperatures, or root issues**. Check water levels, maintain 65–75°F (18–24°C), and inspect roots.",
  },
  {
    keywords: ["leaf drop", "falling leaves", "leaves falling"],
    solution: "Sudden leaf drop is often due to **temperature stress** or **overwatering**. Stabilize the environment and adjust watering frequency.",
  },
  {
    keywords: ["white spots", "powdery mildew", "fuzzy leaves"],
    solution: "White powdery spots indicate **powdery mildew**. Increase airflow, reduce humidity, and apply a baking soda spray (1 tsp baking soda + 1 quart water).",
  },
  {
    keywords: ["algae", "green water", "green slime"],
    solution: "Algae growth thrives in light-exposed water. Use **opaque reservoirs**, clean the system, and add 1–2 ml/gallon hydrogen peroxide to inhibit growth.",
  },

  // pH and Nutrient Imbalance
  {
    keywords: ["ph imbalance", "ph high", "ph low", "acidic", "alkaline", "ph problm"],
    solution: "Ideal pH is **5.5–6.5**. Use pH up/down solutions to adjust. Flush the system if pH is outside this range.",
  },
  {
    keywords: ["nutrient lockout", "lockout", "nute lock"],
    solution: "Nutrient lockout occurs when pH is imbalanced. Flush the system with pH-adjusted water and reintroduce nutrients gradually.",
  },

  // Pests
  {
    keywords: ["aphids", "tiny bugs", "green bugs", "aphid"],
    solution: "Aphids can be controlled with **neem oil** (2 tbsp/gallon) or insecticidal soap. Introduce ladybugs as natural predators.",
  },
  {
    keywords: ["spider mites", "webbing", "tiny mites", "spidermite"],
    solution: "Spider mites thrive in dry conditions. Increase humidity, spray plants with water, and apply neem oil every 3 days.",
  },
  {
    keywords: ["fungus gnats", "small flies", "gnats"],
    solution: "Fungus gnats breed in wet soil/substrate. Use yellow sticky traps and let the growing medium dry slightly between waterings.",
  },
  {
    keywords: ["thrips", "silvery leaves", "tiny black bugs"],
    solution: "Thrips cause silvery streaks on leaves. Use neem oil or spinosad-based insecticides to control infestations.",
  },

  // Light and Temperature
  {
    keywords: ["legsy plants", "stretched", "thin stems", "leggy"],
    solution: "Leggy growth indicates **insufficient light**. Move plants closer to light sources or upgrade to stronger grow lights (e.g., 600W LED).",
  },
  {
    keywords: ["light burn", "bleached leaves", "burnt leaves", "too much light"],
    solution: "Light burn causes bleached or crispy leaves. Adjust light distance (12–24 inches from plants) and use a light meter to ensure 400–600 PPFD.",
  },
  {
    keywords: ["cold damage", "too cold", "frost", "chill"],
    solution: "Cold damage causes dark, mushy leaves. Maintain temperatures above 60°F (15°C) and use heaters or insulation for hydroponic systems.",
  },
  {
    keywords: ["heat stress", "too hot", "leaf scorch"],
    solution: "Heat stress causes wilting and leaf scorch. Maintain temperatures below 85°F (29°C) and use fans or cooling systems to regulate heat.",
  },

  // Rare Issues
  {
    keywords: ["copper toxicity", "blue leaves", "copper buildup"],
    solution: "Copper toxicity causes blue-green leaves and stunted growth. Flush the system with clean water and avoid overusing copper-based nutrients.",
  },
  {
    keywords: ["manganese deficiency", "yellow spots", "leaf mottling"],
    solution: "Manganese deficiency causes yellow spots and mottled leaves. Add a manganese supplement or use a micronutrient mix.",
  },
  {
    keywords: ["boron deficiency", "brittle leaves", "hollow stems"],
    solution: "Boron deficiency leads to brittle leaves and hollow stems. Add a boron supplement or use a micronutrient mix.",
  },
];

// Troubleshooting Assistant with Knowledge Base
function checkSymptom() {
  const symptom = document.getElementById('symptom').value.trim();

  if (!symptom) {
    document.getElementById('solution').innerText = "Please describe your plant's issue.";
    return;
  }

  // Show loading message
  document.getElementById('solution').innerText = "Analyzing your issue...";

  // Use the local knowledge base for troubleshooting
  const localSolution = getLocalSolution(symptom);
  document.getElementById('solution').innerText = localSolution;
}

// Local Knowledge Base Fallback
function getLocalSolution(symptom) {
  let solution = "No solution found. Try our community forum!";

  // Loop through the knowledge base
  for (const issue of knowledgeBase) {
    const match = issue.keywords.some(keyword => symptom.toLowerCase().includes(keyword.toLowerCase()));
    if (match) {
      solution = issue.solution;
      break;
    }
  }

  return solution;
}

// Nutrient Mixing Calculator
function calculateNutrients() {
  const waterVolume = document.getElementById('waterVolume').value;
  const nutrientAmount = waterVolume * 2; // Example: 2ml per liter
  document.getElementById('result').innerText = `Add ${nutrientAmount}ml of nutrients.`;
}

// Growing Calendar (Only runs on the calendar page)
if (window.location.pathname.includes("calendar.html")) {
  document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [], // Start with an empty event list
      editable: true, // Allow events to be dragged and resized
      eventClick: function(info) {
        // Confirm before deleting an event
        if (confirm(`Delete "${info.event.title}"?`)) {
          info.event.remove(); // Remove the event
        }
      },
    });

    // Render the calendar
    calendar.render();

    // Handle event form submission
    const eventForm = document.getElementById('event-form');
    if (eventForm) {
      eventForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        // Get event details
        const eventTitle = document.getElementById('event-title').value;
        const eventDate = document.getElementById('event-date').value;

        // Add the event to the calendar
        if (eventTitle && eventDate) {
          calendar.addEvent({
            title: eventTitle,
            start: eventDate,
          });

          // Clear the form
          eventForm.reset();
        }
      });
    }
  });
}

// User Feedback System
function submitFeedback(response) {
  const feedbackMessage = response === 'yes' ? "Thank you for your feedback!" : "We’ll improve this solution. Thank you!";
  alert(feedbackMessage);

  // Send feedback to the server (optional)
  console.log(`User feedback: ${response}`);
}

// Admin Dashboard Functionality (Only runs on the admin page)
if (window.location.pathname.includes("admin.html")) {
  const addEntryForm = document.getElementById('add-entry-form');
  addEntryForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const keywords = document.getElementById('keywords').value.split(',').map(k => k.trim());
    const solution = document.getElementById('solution').value;

    // Add the new entry to the knowledge base
    knowledgeBase.push({ keywords, solution });
    alert("Entry added successfully!");

    // Clear the form
    addEntryForm.reset();
  });
}