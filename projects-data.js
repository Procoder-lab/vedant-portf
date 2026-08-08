window.localProjectsBackup = [
  {
    title: "LOGIN PAGE FOR BEGINNER",
    description: "A clean login interface designed with HTML5 and CSS3.",
    image_url: "./projects/login_page/preview1.jpg",
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

  // project 2 (Added)
  {
    title: "Simple Calculator (Python)",
    description:
      "I made this and trust me this is too simple for beginner project try it now.",
    image_url: "./projects/calculator/calculator.png",
    code_snippet: `a = int(input("a:"))
b = int(input("b:")) 
ope = str(input("ope:"))

if(ope) == "add":
    print("Total:",a + b)
     
if(ope) == "sub":
    print("Total",a - b)
     
if(ope) == "mul":
    print("Total",a * b)
           
if(ope) == "div":
    print("Total",a / b)
    
if(ope) == "per":
    print("Total",a % b)`,
  },

  //project 3rd

  {
    title: "Table Using Python (Extended Version)",
    description:
      "This is very expand and long boring method to create a table.",
    image_url: "./projects/table-maker/table.png",
    code_snippet: `# Now we are creating a system of Table creating In which user can input his number and 
    # he will got his maths table.

a = int(input("Enter Number : "))


table = ( a*1 )
print( a,"x 1 =",table)

table = ( a*2 )
print( a,"x 2 =",table)

table = ( a*3 )
print( a,"x 3 =",table)

table = ( a*4 )
print( a,"x 4 =",table)

table = ( a*5 )
print( a,"x 5 =",table)

table = ( a*6 )
print( a,"x 6 =",table)

table = ( a*7 )
print( a,"x 7 =",table)

table = ( a*8 )
print( a,"x 8 =",table)

table = ( a*9 )
print( a,"x 9 =",table)

table = ( a*10 )
print( a,"x 10 =",table)
`,
  },

  //project 4

  {
    title: "Table Using Python (Fastest Version)",
    description:
      "This is the simplest and easiest method or fast to create a table.",
    image_url: "./projects/table-maker/easy-table.png",
    code_snippet: `n = int(input("Enter a number:"))
    a = 1
    while a <= 10:
    print(f"{n} X {a} = {n * a}")
    a += 1`,
  },

  //project 5 (Fun Game)

  {
    title: "Guessing Game (fun)",
    description: "This game is like a little Fun try it now.",
    image_url: "./projects/Guessing-game/guess-img.png",
    code_snippet: `
    #Make sure that indentation is very important in this type of games.
    import random

    secret_num = random.randint(1, 100)
    print("Welcome to the Guessing game")
    print("I have picked a secret number between 1 and 100")
    game_over = False

    while not game_over:
    guess = int(input("Enter your Guess: "))
    
        if guess < secret_num:
          print("To Low Try Again")
        elif guess > secret_num:
          print("To High Try Again")
        else:
          print(f"Congratulations Your Guessed number is {guess}")            
          game_over = True `,
  },

  //Project 6 (Pass Generator)

  {
    title: "Random Password Generator(python)",
    description:
      "This code will give you infinite password combination with 12 digits.",
    image_url: "./projects/pass_generator/pass_gene.png",
    code_snippet: `# Random Password Generator

import random
import string

char = string.ascii_letters
num = string.digits
sp_char = string.punctuation

pass_len = 12
whole = char + num + sp_char

password = ""
for i in range(pass_len):
    password += random.choice(whole)
    
print("Your Password is:",password)`,
  },

  //Project 7 (Guessing game V2)

  {
    title: "Guessing game V2 (python)",
    description:
      "This is the simplest begineer level understandable code V2",
    image_url: "./projects/Guessing-game/Guessing_gameV2/V2_game.png",
    code_snippet: `#Guessing game V2

import random

target = random.randint(1, 100)  

while True:
    user = int(input("Enter Your Guess:"))
    
    if(user == target):
        print("Congrats! Your Guess is",user)
        break
    elif(user > target):
        print("Your guess is too high! Try again")
    else:
        print("Your guess is too small! Try again")`,
  },
];
