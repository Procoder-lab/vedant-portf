# Random Password Generator

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
    
print("Your Password is:",password)