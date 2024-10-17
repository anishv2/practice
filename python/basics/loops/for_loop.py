# example 1
nums = [10, 2, 4, 23, 14];

for num in nums:
    if num == 4:
        print('Found', num);
        break;
    print('Not found');


# example 2
# range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and stops before a specified number.
# syntax: range(start, stop, step)

for i in range(10): # here range step is 10, starts from 0 and increments by 1
    print(i) # print numbers from 0 to 9


for i in range(10, 101, 5):
    print(i); # print numbers from 10 to 100


