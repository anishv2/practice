
# List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list.

# e.g.
numbers = [1,2,3,4,5,6];
letters = ['a',' b', 'c', 'd', 'e', 'f'];
my_list = [];


# # by common way
# for n in numbers:
#     list.append(n);
# print(list);

# by comprehension
my_list = [n for n in numbers];
print(my_list);

# my_list = [n for n in numbers if n%2 == 0];
# print(my_list);

# # map + lamda
# my_list = list(map(lambda n: n*n, numbers));
# print(my_list);


# two loops iteration - common way

# for l in letters:
#     for n in range(4):
#         list.append((l,n));
# print(my_list);



# by comprehension way

my_list = [(l,n) for l in letters for n in range(4)];
print(my_list);


# dictionary comprehension
names = ['Clark','Bruce','Steve','Barry'];
superheroes = ['Superman','Batman','Captain America', 'Flash'];

print(list(zip(names, superheroes))); # [('Clark', 'Superman'), ('Bruce', 'Batman'), ('Steve', 'Captain America'), ('Barry', 'Flash')]

# create dictionary by comprehension 

my_list = { name:hero for name, hero in zip (names,superheroes) };
print(my_list); # {'Clark': 'Superman', 'Bruce': 'Batman', 'Steve': 'Captain America', 'Barry': 'Flash'}


# Set comprehension

my_set = {};

my_set = { n for n in numbers };
print(my_set); # {1, 2, 3, 4, 5, 6}


# generator function

# def gen(nums):
#     for n in nums:
#         yield n*n;

# result = gen(numbers);

# for i in result:
#     print(i); 


# generator by comprehension

my_gen = (n*n for n in numbers);
for i in my_gen:
    print(i);