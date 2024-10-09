
# Arithmetic Operators:
# Addition:       3 + 2
# Subtraction:    3 - 2
# Multiplication: 3 * 2
# Division:       3 / 2
# Floor Division: 3 // 2
# Exponent:       3 ** 2
# Modulus:        3 % 2


num = 45;
print(type(num)); # <class 'int'>

num = 3.14;
print(type(num)); # <class 'float'>

num = 5 // 2;
print(num); # 2

num = 5 ** 2;
print(num); # 25

num = 5 % 2;
print(num); # 1 because after division of 5 by 2 the remainder will be 1

# to increment shorthand
num += num; # num = num + 1 which will give output is 2
print(num);

num = -15;

# abs refer absolute value which returns the absolute value of any negative integer
print(abs(num)); # 15

num = 40.66;

# round returns the nearest upper value of any number
print(round(num)); # 41

# it takes also second argument (optional) which is digits, the number of decimals to use when rounding the number. default is 0
print(round(num, 1)); # 40.7
print(round(num, 2)); # 40.66



# Comparisons:
# Equal:            3 == 2
# Not Equal:        3 != 2
# Greater Than:     3 > 2
# Less Than:        3 < 2
# Greater or Equal: 3 >= 2
# Less or Equal:    3 <= 2


a = 12;
b = 10;

print(a > b); # True
print(a < b); # False
print(a == b); # False
print(a != b); # True
print(a >= b); # True
print(a <= b); # False

c = '3';
d = '6';

print(c < d); # True
print(c + d); # 36 because of it concat the both string
print(int(c) + int(d)); # 9

# date: 09-10-2024

# source: https://www.youtube.com/watch?v=khKv-8q7YmY&list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU&index=3