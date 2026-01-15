

# check number is odd or not
def check_odd_or_not(num):
    if num % 2 == 0:
       return False
    else:
        return True


# sum of first N natural numbers
def sum_of_n_numbers(num):
    sum=0
    for i in range(num):
        sum = sum+i+1
    return sum

# sum of square of first N natural numbers
def sum_of_square_of_n_numbers(num):
    sum=0
    for i in range(num):
        sum=sum+(i+1)**2
    return sum

# swap two numbers 3,7
def swap_numbers(num1, num2):
    print('Before',num1,num2)
    # x=num1
    num1,num2=num2,num1
    print('After',num1,num2)


# get the opposite number of dice number
def get_opp_of_dice(num):
    return 7-num



print(get_opp_of_dice(2))
print(get_opp_of_dice(4))
print(get_opp_of_dice(1))
# print(check_odd_or_not(355))
# print('Sum of first 10 natural numbers is', sum_of_n_numbers(10))
# print('Sum of square of first 10 natural numbers is', sum_of_square_of_n_numbers(4))
# swap_numbers(3,7)