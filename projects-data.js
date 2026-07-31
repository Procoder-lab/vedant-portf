window.localProjectsBackup = [
  {
    title: "LOGIN PAGE FOR BEGINNER",
    description: "A clean login interface designed with HTML5 and CSS3.",
    image_url:
      "https://pcscuwbjndjclknskohi.supabase.co/storage/v1/object/public/project-screenshots/projects/login_page/bg-img.jpg",
    code_snippet: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Animated Ninja Form</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="bg-overlay"></div>
  
  <main class="login-wrapper">
    <div class="login-card">
      <h2>LOGIN</h2>
      <form class="login-form">
        <div class="input-group">
          <input type="email" id="email" required placeholder=" " />
          <label for="email">Email</label>
        </div>
        
        <div class="input-group">
          <input type="password" id="password" required placeholder=" " />
          <label for="password">Password</label>
        </div>

        <div class="options-row">
          <label class="remember-me">
            <input type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a href="#" class="forgot-link">Forgot Password?</a>
        </div>

        <button type="submit" class="submit-btn">LOGIN</button>

        <p class="signup-text">
          Don't have an account? <a href="#" class="register-link">Register</a>
        </p>
      </form>
    </div>
  </main>
  <style>
  /* Reset & Base Setup */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('bg-img.jpg') no-repeat center center/cover;
}

/* Optional Dark Overlay for better contrast */
.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
}

/* Glassmorphism Form Container */
.login-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.login-card {
  width: 100%;
  max-width: 380px;
  padding: 40px 30px;
  background: rgba(20, 20, 20, 0.45);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  color: #ffffff;
  text-align: center;
  animation: fadeIn 0.8s ease-in-out;
}

.login-card h2 {
  font-size: 1.8rem;
  letter-spacing: 2px;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: 700;
}

/* Form Inputs */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.input-group {
  position: relative;
  width: 100%;
}

.input-group input {
  width: 100%;
  padding: 10px 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  outline: none;
  color: #fff;
  font-size: 0.95rem;
  transition: border-color 0.3s ease;
}

.input-group label {
  position: absolute;
  left: 0;
  top: 10px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  pointer-events: none;
  transition: all 0.3s ease;
}

/* Floating Label Animations */
.input-group input:focus ~ label,
.input-group input:not(:placeholder-shown) ~ label {
  top: -14px;
  font-size: 0.75rem;
  color: #ffffff;
}

.input-group input:focus {
  border-bottom-color: #ffffff;
}

/* Options Row (Remember Me & Forgot Password) */
.options-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.85);
  margin-top: -5px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.forgot-link, .register-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.2s;
}

.forgot-link:hover, .register-link:hover {
  text-decoration: underline;
  opacity: 0.8;
}

/* Submit Button */
.submit-btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 25px;
  background: rgba(230, 230, 230, 0.9);
  color: #111;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.submit-btn:hover {
  background: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
}

/* Signup Redirect */
.signup-text {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 10px;
}

/* Smooth Entrance Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
  </style>
</body>
</html>`,
  },
];
