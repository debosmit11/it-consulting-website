// ---- LOGIN / REGISTER SYSTEM ----
const loginForm = document.getElementById("loginForm");
const registerBtn = document.getElementById("registerBtn");
const loginMessage = document.getElementById("loginMessage");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem(username));

    if (storedUser && storedUser.password === password) {
      // Save active session
      sessionStorage.setItem("activeUser", JSON.stringify(storedUser));
      loginMessage.textContent = "✅ Login successful!";
      loginMessage.style.color = "green";
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    } else {
      loginMessage.textContent = "❌ Invalid credentials!";
      loginMessage.style.color = "red";
    }
  });

  registerBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
      const userProfile = {
        username: username,
        password: password,
        created: new Date().toLocaleDateString()
      };
      localStorage.setItem(username, JSON.stringify(userProfile));
      loginMessage.textContent = "✅ User registered successfully!";
      loginMessage.style.color = "green";
    } else {
      loginMessage.textContent = "❌ Please fill all fields!";
      loginMessage.style.color = "red";
    }
  });
}

// ---- DASHBOARD PAGE ----
const welcomeMessage = document.getElementById("welcomeMessage");
const profileName = document.getElementById("profileName");
const profileDate = document.getElementById("profileDate");
const logoutBtn = document.getElementById("logoutBtn");

if (welcomeMessage && profileName && profileDate) {
  const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));

  if (activeUser) {
    welcomeMessage.textContent = `Welcome, ${activeUser.username}!`;
    profileName.textContent = activeUser.username;
    profileDate.textContent = activeUser.created;
  } else {
    // Redirect if no session
    window.location.href = "index.html";
  }
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("activeUser");
    window.location.href = "index.html";
  });
}

// ---- FEEDBACK FORM ----
const feedbackForm = document.getElementById("feedbackForm");
if (feedbackForm) {
  const feedbackResponse = document.getElementById("feedbackResponse");
  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    feedbackResponse.textContent = "✅ Thank you for reaching out!";
    feedbackForm.reset();
  });
}
// ---- DASHBOARD FEEDBACK FORM ----
const dashFeedbackForm = document.getElementById("dashFeedbackForm");
if (dashFeedbackForm) {
  const dashFeedbackResponse = document.getElementById("dashFeedbackResponse");
  dashFeedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    dashFeedbackResponse.textContent = "✅ Thank you for your feedback!";
    dashFeedbackForm.reset();
  });
}
