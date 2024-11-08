
message='Welcome to Python programming';
greeting='Happy Diwali!';
name='Anish';
message=greeting +', '+ name;   # concat two variables
print(message); # Happy Diwali!, Anish

# we can print same text with format string method (also with shorthand 'f')
message = '{}, {}. Welcome'.format(greeting, name); # method 1
message = f'{greeting}, {name}. Welcome' # method 2
print(message); # Happy Diwali!, Anish. Welcome

# more string methods
print(message.lower()); # welcome to python programming
print(message.upper()); # WELCOME TO PYTHON PROGRAMMING
print(message.count('t')); # 2
print(message.find('Python')); # 11
print(message.replace('programming', 'world')); # Welcome to Python world

print(dir(message)); # it returns all pre-defined methods of variable
print(help(message)); # it returns all pre-defined methods in details






# date: 08-10-2024
# source: https://www.youtube.com/watch?v=k9TUPpGqYTo&list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7&index=2