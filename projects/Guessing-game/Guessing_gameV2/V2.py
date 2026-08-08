#Guessing game V2

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
        print("Your guess is too small! Try again")