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

// 36 Deduplicated Custom Questions Data
const questionsData = [
  // Original List
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

  // Newly Added Unique Questions
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

let currentSlideIndex = 0;
let uploadedPhotoBase64 = "";

// Inject Question Cards
const slidesWrapper = document.getElementById("slides-wrapper");

questionsData.forEach((item, idx) => {
  const slide = document.createElement("div");
  slide.className = "slide";
  slide.setAttribute("data-slide", idx + 1);

  const pillsHTML = item.choices.map(choice => 
    `<button type="button" class="option-pill" onclick="selectPreset(${idx}, '${choice}')">${choice}</button>`
  ).join("");

  slide.innerHTML = `
    <div class="cozy-card card-slide">
      <div class="card-tag">QUESTION ${String(idx + 1).padStart(2, '0')}</div>
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

const totalSlides = questionsData.length + 1;
lucide.createIcons();

function selectPreset(qIndex, text) {
  const textarea = document.getElementById(`q-ans-${qIndex}`);
  textarea.value = text;
}

// Convert Image File
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

function updateSlideView() {
  const allSlides = document.querySelectorAll(".slide");
  allSlides.forEach((slide, idx) => {
    slide.classList.toggle("active-slide", idx === currentSlideIndex);
  });

  prevBtn.classList.toggle("hidden", currentSlideIndex === 0);
  if (currentSlideIndex === totalSlides - 1) {
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
  } else {
    const qIdx = currentSlideIndex - 1;
    const ansEl = document.getElementById(`q-ans-${qIdx}`);
    if (!ansEl.value.trim()) {
      ansEl.classList.add("input-error");
      setTimeout(() => ansEl.classList.remove("input-error"), 1000);
      return false;
    }
    return true;
  }
}

nextBtn.addEventListener("click", () => {
  if (!validateCurrentSlide()) return;
  if (currentSlideIndex < totalSlides - 1) {
    currentSlideIndex++;
    updateSlideView();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    updateSlideView();
  }
});

// Instant Popup Submission
submitBtn.addEventListener("click", () => {
  if (!validateCurrentSlide()) return;

  document.getElementById("success-modal").classList.remove("hidden");

  const answersArr = questionsData.map((item, idx) => ({
    question: item.q,
    answer: document.getElementById(`q-ans-${idx}`).value
  }));

  const payload = {
    name: document.getElementById("user-name").value,
    age: document.getElementById("user-age").value,
    birthday: document.getElementById("user-bday").value,
    photo: uploadedPhotoBase64 || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    answers: answersArr,
    createdAt: new Date().toISOString()
  };

  db.collection("responses").add(payload).catch(err => {
    console.error("Upload error:", err);
  });
});

function closeSuccessModal() {
  document.getElementById("success-modal").classList.add("hidden");
}

function resetAppView() {
  location.reload();
}

// Admin Logic
const adminTriggerBtn = document.getElementById("admin-trigger-btn");
const userFlow = document.getElementById("user-flow");
const adminView = document.getElementById("admin-view");
const exitAdminBtn = document.getElementById("exit-admin-btn");
const adminLoginBtn = document.getElementById("admin-login-btn");
const adminPassInput = document.getElementById("admin-pass-input");
const adminErrMsg = document.getElementById("admin-err-msg");
const adminAuthScreen = document.getElementById("admin-auth-screen");
const adminDashboardScreen = document.getElementById("admin-dashboard-screen");

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

adminLoginBtn.addEventListener("click", () => {
  if (adminPassInput.value === "592011") {
    adminAuthScreen.classList.add("hidden");
    adminDashboardScreen.classList.remove("hidden");
    loadAdminDashboard();
  } else {
    adminErrMsg.classList.remove("hidden");
  }
});

async function loadAdminDashboard() {
  const grid = document.getElementById("friends-list-grid");
  grid.innerHTML = "<p style='color: white;'>Loading passports...</p>";

  try {
    const snapshot = await db.collection("responses").get();
    grid.innerHTML = "";

    if (snapshot.empty) {
      grid.innerHTML = "<p style='color: white;'>No responses collected yet!</p>";
      return;
    }

    snapshot.forEach(doc => {
      const data = doc.data();
      const card = document.createElement("div");
      card.className = "friend-summary-card";
      card.innerHTML = `
        <img src="${data.photo}" alt="${data.name}">
        <h3 style="color: var(--text-main); font-size: 1.1rem;">${data.name}</h3>
        <p style="color: var(--text-muted); font-size: 0.85rem;">${data.age} y/o • ${data.birthday}</p>
      `;
      card.addEventListener("click", () => openDetailModal(data));
      grid.appendChild(card);
    });
  } catch (err) {
    grid.innerHTML = "<p style='color: white;'>Error loading responses.</p>";
  }
}

function openDetailModal(data) {
  const modal = document.getElementById("friend-detail-modal");
  const container = document.getElementById("passport-card-render");

  let answersHTML = "";

  if (Array.isArray(data.answers)) {
    answersHTML = data.answers.map(item => {
      const qText = item.question || item.q || "Question";
      const aText = item.answer || item.a || "No answer";
      return `
        <div class="passport-q-item">
          <strong>${qText}</strong>
          <span>${aText}</span>
        </div>
      `;
    }).join("");
  } else if (typeof data.answers === "object" && data.answers !== null) {
    answersHTML = Object.entries(data.answers).map(([key, val]) => `
      <div class="passport-q-item">
        <strong>${key}</strong>
        <span>${val}</span>
      </div>
    `).join("");
  } else {
    answersHTML = "<p>No recorded answers available.</p>";
  }

  container.innerHTML = `
    <div class="passport-card">
      <button class="close-modal-btn" onclick="closeDetailModal()">&times;</button>
      <div class="passport-header">
        <span>PASSPORT // KNOW ME</span>
        <span>LVL 1</span>
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
    </div>
  `;

  modal.classList.remove("hidden");
}

function closeDetailModal() {
  document.getElementById("friend-detail-modal").classList.add("hidden");
}

updateSlideView();