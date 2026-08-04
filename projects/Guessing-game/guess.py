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
        game_over = True