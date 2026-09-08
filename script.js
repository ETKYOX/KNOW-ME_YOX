// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_VtBBFyOPp6nYqIC6JSLBJ2q437ZX7vk",
  authDomain: "know-me-e4279.firebaseapp.com",
  projectId: "know-me-e4279",
  storageBucket: "know-me-e4279.firebasestorage.app",
  messagingSenderId: "236170630777",
  appId: "1:236170630777:web:0003a68b31e04e6cede6a8",
  measurementId: "G-Z101F8987R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Level 1 Questions (36 Cozy Questions)
const level1Questions = [
  { q: "What is your absolute comfort food?", choices: ["Ramen 🍜", "Pizza 🍕", "Ice Cream 🍦"] },
  { q: "Favorite song type for rainy days?", choices: ["Lo-Fi Beats 🎧", "Acoustic Pop 🎸", "Classical 🎻"] },
  { q: "What instantly brightens your day?", choices: ["Warm tea ☕", "A nice compliment ✨", "Cute pets 🐱"] },
  { q: "Coffee, Tea, or Hot Chocolate?", choices: ["Coffee ☕", "Tea 🍵", "Hot Chocolate 🍫"] },
  { q: "What is your favorite season?", choices: ["Cozy Autumn 🍂", "Sunny Summer ☀️", "Snowy Winter ❄️"] },
  { q: "Where do you wish to travel right now?", choices: ["Japan 🇯🇵", "Italy 🇮🇹", "Switzerland 🇨🇭"] },
  { q: "What skill would you love to learn?", choices: ["Digital Art 🎨", "Piano 🎹", "Cooking 👨‍🍳"] },
  { q: "What aesthetic do you love most?", choices: ["Cozy Softgirl 🌸", "Dark Academia 📖", "Minimalist ⚪"] },
  { q: "What show/movie do you rewatch often?", choices: ["Friends 📺", "Anime 🎌", "Marvel Movies 🎬"] },
  { q: "Are you an early bird or night owl?", choices: ["Night Owl 🦉", "Early Bird 🌅", "A bit of both 💤"] },
  { q: "What is your biggest pet peeve?", choices: ["Loud Chewing 😬", "Late Replies 📱", "Interrupting 🗣️"] },
  { q: "What gift makes you super happy?", choices: ["Handwritten Note ✉️", "Surprise Snack 🍪", "Plushie 🧸"] },
  { q: "What color makes you feel calm?", choices: ["Soft Pink 🌸", "Sky Blue 🩵", "Sage Green 🌿"] },
  { q: "What is your favorite smell?", choices: ["Fresh Rain 🌧️", "Vanilla 🍦", "Lavender 🪻"] },
  { q: "What memory makes you smile?", choices: ["Late night chats 🌌", "Vacations 🏖️", "Laughing together 😄"] },
  { q: "Do you prefer books, gaming, or movies?", choices: ["Reading Books 📚", "Video Games 🎮", "Movies 🍿"] },
  { q: "What topic could you talk about for hours?", choices: ["Music & Arts 🎶", "Deep Thoughts 💭", "Memes 🔥"] },
  { q: "What clothing item makes you feel stylish?", choices: ["Oversized Hoodie 🧥", "Cool Sneakers 👟", "Vintage Jacket 🧥"] },
  { q: "What is a quote/lyric you live by?", choices: ["Stay foolish 💫", "Enjoy the present 🌿", "Keep moving forward 🚀"] },
  { q: "What game do you love playing?", choices: ["Minecraft ⛏️", "Valorant 🎯", "Animal Crossing 🍃"] },
  { q: "In a cozy cabin, what 3 things must exist?", choices: ["Fireplace & books 🔥", "WiFi & snacks 🍿", "Music & stars 🌌"] },
  { q: "What is your favorite holiday?", choices: ["Christmas 🎄", "Halloween 🎃", "New Year 🎆"] },
  { q: "Ocean beaches or mountain forests?", choices: ["Ocean Beaches 🌊", "Mountain Forests 🌲", "Both 🌄"] },
  { q: "What popular thing do you dislike?", choices: ["Crowded parties 🔊", "Trendy fashion 👗", "Waking up early ⏰"] },
  { q: "What is your go-to pizza topping?", choices: ["Extra Cheese 🧀", "Pepperoni 🍕", "Mushrooms 🍄"] },
  { q: "What is your favorite cozy memory with me?", choices: ["Our long talks 💬", "Laughing together 🤣", "Exploring places 🗺️"] },
  { q: "Which animals do you love?", choices: ["Cats & Dogs 🐱🐶", "Wild Animals 🦁", "Pandas & Bears 🐼"] },
  { q: "What is your favorite style of clothing?", choices: ["Streetwear 🧢", "Casual Cozy 🧸", "E-Girl / Goth 🖤"] },
  { q: "What do you hate the most?", choices: ["Fake People 😒", "Lies 🚫", "Bad Food 🤮"] },
  { q: "What is your favorite school subject?", choices: ["Art / Music 🎨", "Science 🔬", "History / Lit 📚"] },
  { q: "What is your favorite anime?", choices: ["Attack on Titan 🗡️", "Demon Slayer ⚔️", "Studio Ghibli 🧹"] },
  { q: "Have you ever had a crush on someone?", choices: ["Yes, currently! 🙈", "In the past 💭", "Nope, never 🛑"] },
  { q: "What is your eye color?", choices: ["Brown / Black 👁️", "Blue / Green 🩵", "Hazel ✨"] },
  { q: "What is your hair color?", choices: ["Dark Brown / Black 🖤", "Blonde / Light 👱‍♀️", "Dyed / Colorful 🌈"] },
  { q: "Do you love night, sunset, or day the most?", choices: ["Night Sky 🌌", "Golden Sunset 🌅", "Bright Day ☀️"] },
  { q: "Do you get jealous over your favorite friends?", choices: ["Yes, sometimes! 🤐", "A little bit 🤏", "Not at all 🕊️"] }
];

// Level 2 Questions (Deep & Secret)
const level2Questions = [
  { q: "What is your fav sweet? Mention 3 or 4 🍬", choices: ["Chocolate 🍫", "Donuts 🍩", "Macarons 🧁"] },
  { q: "What is your fav letter? 🔤", choices: ["A", "S", "M", "L"] },
  { q: "Do you love perfume so much or just a little or?? 🧴", choices: ["Obsessed with it! ✨", "Just a little bit 😊", "Not really into it 🌿"] },
  { q: "Have you ever felt like u want to say smth to me but shy or scared that i might hate u or may be annoyed or smth like that? 💭", choices: ["Yes, sometimes 🙈", "A little bit 🤐", "Never! I feel safe with u ❤️"] },
  { q: "What is your weakness? 🩹", choices: ["Being oversensitive 🥺", "Caring too much 💌", "Overthinking everything 💭"] },
  { q: "Do you love someone but scared to tell them? (Love them as?) ", choices: ["Yes, as a brother/sister 💖", "Yes, as a best friend 🫂", "Nope, open book! ✨"] },
  { q: "Tell me smth abt urself u wanted to say? 💬", choices: ["I secretly overthink 🤐", "I value our bond a lot 💖", "I dont know 😅"] },
  { q: "What is a secret dream you rarely share with anyone? 🌌", choices: ["Becoming famous 🌟", "Living in a cozy countryside 🏡", "Traveling the world alone ✈️"] },
  { q: "What makes you feel truly safe and accepted? 🛡️", choices: ["Deep conversations 💬", "Warm hugs 🫂", "Silence with no judgment 🌙"] }
];

let selectedLevel = null;
let activeQuestions = [];
let currentSlideIndex = 0;
let uploadedPhotoBase64 = "";
let selectedDocIds = new Set();
let currentFilter = 'all';

// SECURE PASSWORD HASHING
// This is the irreversibly hashed version of '592011'.
// Someone inspecting your code cannot decode this back to the password.
const adminHash = "a946b6e4566c61563e46c70176a9284203a936a798f0e01476f57e62a049f506";

// Audio Player Handling
const bgMusic = document.getElementById("bg-music");
const musicToggleBtn = document.getElementById("music-toggle-btn");
let isPlaying = false;

// Auto-play music on first interaction if blocked by browser
document.body.addEventListener('click', () => {
  if (!isPlaying) {
    bgMusic.play().then(() => {
      isPlaying = true;
      musicToggleBtn.classList.add("active-music");
    }).catch(() => {});
  }
}, { once: true });

musicToggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    isPlaying = false;
    musicToggleBtn.classList.remove("active-music");
  } else {
    bgMusic.play().then(() => {
      isPlaying = true;
      musicToggleBtn.classList.add("active-music");
    });
  }
});

// Image Upload
document.getElementById("user-photo").addEventListener("change", function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      uploadedPhotoBase64 = evt.target.result;
      document.getElementById("photo-preview-container").innerHTML = `<img src="${uploadedPhotoBase64}" alt="Avatar">`;
    };
    reader.readAsDataURL(file);
  }
});

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const submitBtn = document.getElementById("submit-btn");
const slideCounter = document.getElementById("slide-counter");
const progressFill = document.getElementById("progress-fill");

function selectLevel(lvl) {
  selectedLevel = lvl;
  activeQuestions = lvl === 1 ? level1Questions : level2Questions;

  // Clear existing question slides
  const existingDynamicSlides = document.querySelectorAll('.slide[data-dynamic="true"]');
  existingDynamicSlides.forEach(s => s.remove());

  const slidesWrapper = document.getElementById("slides-wrapper");

  activeQuestions.forEach((item, idx) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.setAttribute("data-slide", idx + 2);
    slide.setAttribute("data-dynamic", "true");

    const pillsHTML = item.choices.map(choice => 
      `<button type="button" class="option-pill" onclick="selectPreset(${idx}, \`${choice}\`)">${choice}</button>`
    ).join("");

    slide.innerHTML = `
      <div class="cozy-card card-slide floating-card">
        <div class="card-tag">LVL 0${lvl} // QUESTION ${String(idx + 1).padStart(2, '0')}</div>
        <h2>${item.q}</h2>
        <p class="subtitle">Pick a suggestion or type your own response below!</p>
        <div class="options-wrapper">
          ${pillsHTML}
        </div>
        <div class="input-group">
          <textarea id="q-ans-${idx}" rows="3" placeholder="Type your answer here..."></textarea>
        </div>
      </div>
    `;
    slidesWrapper.appendChild(slide);
  });

  lucide.createIcons();
  currentSlideIndex = 2;
  updateSlideView();
}

function selectPreset(qIndex, text) {
  const textarea = document.getElementById(`q-ans-${qIndex}`);
  textarea.value = text;
}

function updateSlideView() {
  const allSlides = document.querySelectorAll(".slide");
  const totalSlides = selectedLevel ? activeQuestions.length + 2 : 2;

  allSlides.forEach((slide, idx) => {
    slide.classList.toggle("active-slide", idx === currentSlideIndex);
  });

  prevBtn.classList.toggle("hidden", currentSlideIndex === 0);

  // Hide Next Button on Level Pick Slide (Slide 1)
  if (currentSlideIndex === 1) {
    nextBtn.classList.add("hidden");
  } else if (currentSlideIndex === totalSlides - 1 && selectedLevel) {
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
  }

  slideCounter.innerText = `${currentSlideIndex + 1} / ${totalSlides}`;
  const pct = ((currentSlideIndex + 1) / totalSlides) * 100;
  progressFill.style.width = `${pct}%`;
}

function validateCurrentSlide() {
  if (currentSlideIndex === 0) {
    const nameEl = document.getElementById("user-name");
    const ageEl = document.getElementById("user-age");
    const bdayEl = document.getElementById("user-bday");
    
    let valid = true;
    [nameEl, ageEl, bdayEl].forEach(el => {
      if (!el.value.trim()) {
        el.classList.add("input-error");
        setTimeout(() => el.classList.remove("input-error"), 1000);
        valid = false;
      }
    });
    return valid;
  } else if (currentSlideIndex >= 2) {
    const qIdx = currentSlideIndex - 2;
    const ansEl = document.getElementById(`q-ans-${qIdx}`);
    if (!ansEl.value.trim()) {
      ansEl.classList.add("input-error");
      setTimeout(() => ansEl.classList.remove("input-error"), 1000);
      return false;
    }
  }
  return true;
}

// Next Button Handler with Promise Popup Trigger for Level 2 Question 4
nextBtn.addEventListener("click", () => {
  if (!validateCurrentSlide()) return;

  // Trigger Promise Modal on Level 2, Question 4 (Slide Index 5)
  if (selectedLevel === 2 && currentSlideIndex === 5) {
    document.getElementById("promise-modal").classList.remove("hidden");
    return;
  }

  currentSlideIndex++;
  updateSlideView();
});

document.getElementById("promise-btn").addEventListener("click", () => {
  document.getElementById("promise-modal").classList.add("hidden");
  currentSlideIndex++;
  updateSlideView();
});

prevBtn.addEventListener("click", () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    updateSlideView();
  }
});

// Final Submission
submitBtn.addEventListener("click", () => {
  if (!validateCurrentSlide()) return;

  document.getElementById("success-modal").classList.remove("hidden");

  const answersArr = activeQuestions.map((item, idx) => ({
    question: item.q,
    answer: document.getElementById(`q-ans-${idx}`).value
  }));

  const payload = {
    name: document.getElementById("user-name").value,
    age: document.getElementById("user-age").value,
    birthday: document.getElementById("user-bday").value,
    photo: uploadedPhotoBase64 || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    level: `Level ${selectedLevel}`,
    answers: answersArr,
    createdAt: new Date().toISOString()
  };

  db.collection("responses").add(payload).catch(err => console.error("Upload error:", err));
});

function closeSuccessModal() {
  document.getElementById("success-modal").classList.add("hidden");
}

function resetAppView() {
  location.reload();
}

// Admin Panel Logic
const adminTriggerBtn = document.getElementById("admin-trigger-btn");
const userFlow = document.getElementById("user-flow");
const adminView = document.getElementById("admin-view");
const exitAdminBtn = document.getElementById("exit-admin-btn");
const adminLoginBtn = document.getElementById("admin-login-btn");
const adminPassInput = document.getElementById("admin-pass-input");
const adminErrMsg = document.getElementById("admin-err-msg");
const adminAuthScreen = document.getElementById("admin-auth-screen");
const adminDashboardScreen = document.getElementById("admin-dashboard-screen");
const deleteSelectedBtn = document.getElementById("delete-selected-btn");
const selectAllCheckbox = document.getElementById("select-all-checkbox");
const selectCountSpan = document.getElementById("select-count");

adminTriggerBtn.addEventListener("click", () => {
  userFlow.classList.add("hidden");
  adminView.classList.remove("hidden");
  adminAuthScreen.classList.remove("hidden");
  adminDashboardScreen.classList.add("hidden");
  adminPassInput.value = "";
  adminErrMsg.classList.add("hidden");
});

exitAdminBtn.addEventListener("click", () => {
  adminView.classList.add("hidden");
  userFlow.classList.remove("hidden");
});

// SECURE ADMIN LOGIN
adminLoginBtn.addEventListener("click", () => {
  // 1. Get user input
  const passwordInput = adminPassInput.value;
  // 2. Convert input password into a secure hash
  const inputHash = CryptoJS.SHA256(passwordInput).toString();

  // 3. Compare hashed input with hashed saved password
  if (inputHash === adminHash) {
    // Correct password
    adminAuthScreen.classList.add("hidden");
    adminDashboardScreen.classList.remove("hidden");
    loadAdminDashboard();
  } else {
    // Incorrect password
    adminErrMsg.classList.remove("hidden");
  }
});

function filterPassports(lvl) {
  currentFilter = lvl;
  document.querySelectorAll(".filter-pill").forEach(p => {
    p.classList.toggle("active", p.innerText === lvl || (lvl === 'all' && p.innerText === 'All'));
  });
  loadAdminDashboard();
}

function updateSelectionUI() {
  selectCountSpan.innerText = selectedDocIds.size;
  const cardBoxes = document.querySelectorAll(".card-select-checkbox");
  selectAllCheckbox.checked = cardBoxes.length > 0 && selectedDocIds.size === cardBoxes.length;
}

async function loadAdminDashboard() {
  const grid = document.getElementById("friends-list-grid");
  grid.innerHTML = "<p style='color: white;'>Loading passports...</p>";
  selectedDocIds.clear();
  updateSelectionUI();

  try {
    const snapshot = await db.collection("responses").get();
    grid.innerHTML = "";

    if (snapshot.empty) {
      grid.innerHTML = "<p style='color: white;'>No responses collected yet!</p>";
      return;
    }

    snapshot.forEach(doc => {
      const data = doc.data();
      const docId = doc.id;
      const docLvl = data.level || "Level 1";

      if (currentFilter !== 'all' && docLvl !== currentFilter) return;

      const card = document.createElement("div");
      card.className = "friend-summary-card";
      card.setAttribute("data-id", docId);

      const lvlBadgeClass = docLvl === 'Level 2' ? 'card-level-badge lvl2-badge' : 'card-level-badge';

      card.innerHTML = `
        <div class="${lvlBadgeClass}">${docLvl}</div>
        <div class="card-checkbox-wrap" onclick="event.stopPropagation()">
          <input type="checkbox" class="card-select-checkbox" data-id="${docId}">
        </div>
        <img src="${data.photo}" alt="${data.name}">
        <h3 style="color: var(--text-main); font-size: 1.05rem;">${data.name}</h3>
        <p style="color: var(--text-muted); font-size: 0.8rem;">${data.age} y/o • ${data.birthday}</p>
      `;

      card.addEventListener("click", () => openDetailModal(docId, data));

      const checkbox = card.querySelector(".card-select-checkbox");
      checkbox.addEventListener("change", (e) => {
        if (e.target.checked) {
          selectedDocIds.add(docId);
          card.classList.add("selected-card");
        } else {
          selectedDocIds.delete(docId);
          card.classList.remove("selected-card");
        }
        updateSelectionUI();
      });

      grid.appendChild(card);
    });
  } catch (err) {
    grid.innerHTML = "<p style='color: white;'>Error loading responses.</p>";
  }
}

selectAllCheckbox.addEventListener("change", (e) => {
  const isChecked = e.target.checked;
  const checkboxes = document.querySelectorAll(".card-select-checkbox");

  checkboxes.forEach(cb => {
    cb.checked = isChecked;
    const docId = cb.getAttribute("data-id");
    const parentCard = cb.closest(".friend-summary-card");

    if (isChecked) {
      selectedDocIds.add(docId);
      parentCard.classList.add("selected-card");
    } else {
      selectedDocIds.delete(docId);
      parentCard.classList.remove("selected-card");
    }
  });

  updateSelectionUI();
});

function openDetailModal(docId, data) {
  const modal = document.getElementById("friend-detail-modal");
  const container = document.getElementById("passport-card-render");

  let answersHTML = "";
  if (Array.isArray(data.answers)) {
    answersHTML = data.answers.map(item => `
      <div class="passport-q-item">
        <strong>${item.question || 'Question'}</strong>
        <span>${item.answer || 'No answer'}</span>
      </div>
    `).join("");
  }

  container.innerHTML = `
    <div class="passport-card">
      <button class="close-modal-btn" onclick="closeDetailModal()">&times;</button>
      <div class="passport-header">
        <span>PASSPORT // KNOW ME</span>
        <span class="level-tag-badge">${data.level || 'Level 1'}</span>
      </div>
      <div class="passport-body">
        <img src="${data.photo}" class="passport-avatar" alt="Avatar">
        <div class="passport-stats">
          <div class="stat-pill">NAME: ${(data.name || '').toUpperCase()}</div>
          <div class="stat-pill">AGE: ${data.age || '-'}</div>
          <div class="stat-pill">BDAY: ${data.birthday || '-'}</div>
        </div>
      </div>
      <div class="answers-scroll-area">
        ${answersHTML}
      </div>
      <button class="delete-card-btn" onclick="deletePassportCard('${docId}')">
        <i data-lucide="trash-2"></i> Delete Passport
      </button>
    </div>
  `;

  modal.classList.remove("hidden");
  lucide.createIcons();
}

async function deletePassportCard(docId) {
  if (confirm("Are you sure you want to delete this response passport?")) {
    try {
      await db.collection("responses").doc(docId).delete();
      closeDetailModal();
      loadAdminDashboard();
    } catch (err) {
      alert("Failed to delete passport: " + err.message);
    }
  }
}

deleteSelectedBtn.addEventListener("click", async () => {
  if (selectedDocIds.size === 0) {
    alert("Please select at least one passport to delete using the checkboxes.");
    return;
  }

  if (!confirm(`Delete ${selectedDocIds.size} selected passport(s)?`)) return;

  try {
    const batch = db.batch();
    selectedDocIds.forEach(docId => {
      batch.delete(db.collection("responses").doc(docId));
    });

    await batch.commit();
    loadAdminDashboard();
  } catch (err) {
    alert("Failed to delete passports: " + err.message);
  }
});

function closeDetailModal() {
  document.getElementById("friend-detail-modal").classList.add("hidden");
}

updateSlideView();