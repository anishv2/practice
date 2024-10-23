
from operator import attrgetter;

# sort list

numbers = [5,2,50,4,20, 32, 10, 7,29];

# by sorted method
print(sorted(numbers)); # sort by ascending order by default
print(sorted(numbers, reverse=True)); # sort by descending order


# by list method
numbers.sort(); # sort by ascending order by default
print(numbers.sort(reverse=True)); # sort by descending order


# sort dictionary

di = { 'name': 'David', 'email': 'davidpaul@test.com', 'age': 23, 'address': 'h 30, street 11, newyork, USA' };

print(sorted(di)); # ['address', 'age', 'email', 'name']

my_list = [3,34,-4,-9,1,4];

# Here second param key=abs is responsible to execute to absolute order. Default is None
print(sorted(my_list, key=abs)); # [1, 3, -4, 4, -9, 34]




# class example

class Employee:
    def __init__(self, name, email, salary):
        self.name = name;
        self.email = email;
        self.salary = salary;

    def __repr__(self):
        return '{}, {}, ${}'.format(self.name, self.email, self.salary);


e1 = Employee('David', 'davidpaul@test.com', 30000);
e2 = Employee('Mark', 'markjohns@test.com', 32000);
e3 = Employee('Olivia', 'olivia@test.com', 30000);
e4 = Employee('Nick', 'nickjames@test.com', 35000);


employee_list = [e1,e2,e3,e4];

# print(sorted(employee_list)); # error

def sort_emp_list(emp, key):
    return f'{emp}.{key}';

# sorted_emps = sorted(employee_list, key=lambda emp: sort_emp_list(emp, 'email')); # by user defined function and lambda function
sorted_emps = sorted(employee_list, key=attrgetter('salary')); # by import attrgetter, it will sort the list based on key salary 

print(sorted_emps); # [David, davidpaul@test.com, $30000, Mark, markjohns@test.com, $32000, Nick, nickjames@test.com, $35000, Olivia, olivia@test.com, $30000]