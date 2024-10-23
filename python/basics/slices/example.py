
# Slice in List and String

# syntax: list[start:end:step]


# lists

numbers = [10,30,60,23,35,12,87,43,40];

print(numbers); # [10,30,60,23,35,12,87,43,40]

print(numbers[-2:1:-1])  # [43, 87, 12, 35, 23, 60]



# strings

text = "Welcome to Programming World";

print(text[::-1]); # dlroW gnimmargorP ot emocleW
print(text[-4]); # output is o, from right to left (-1 to -4)
