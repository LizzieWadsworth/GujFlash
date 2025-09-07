// flashcards.js

let flashcards = [];
let currentIndex = 0;

// Load flashcards from external JSON file
async function loadFlashcards() {
  try {
    const response = await fetch("data-1000.json");
    if (!response.ok) throw new Error("Network error");
    flashcards = await response.json();
  } catch (err) {
    console.error("Could not load data-1000.json, using fallback set", err);
    flashcards = [
      { g: "હેલો", e: "Hello" },
      { g: "આભાર", e: "Thank you" },
      { g: "હા", e: "Yes" },
      { g: "ના", e: "No" },
      { g: "પાણી", e: "Water" }
      // … add more fallback words if desired
    ];
  }
  showFlashcard();
}

// Show the current flashcard
function showFlashcard() {
  if (flashcards.length === 0) return;
  const card = flashcards[currentIndex];
  document.getElementById("gujarati").innerText = card.g;
  document.getElementById("english").innerText = card.e;
}

// Next card
function nextFlashcard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showFlashcard();
}

// Previous card
function prevFlashcard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  showFlashcard();
}

// Event listeners
document.addEventListener("DOMContentLoaded", loadFlashcards);
document.getElementById("next").addEventListener("click", nextFlashcard);
document.getElementById("prev").addEventListener("click", prevFlashcard);
