
# example 1
print('Example 1');

# check developer 

# print('Enter your username');

# username = input();

# if username.lower() == 'anish':
#     print(f'Welcome back {username.lower()}');

# elif username.lower() == 'user':
#     print(f'Hello {username.lower()}');
# else:
#     print(f'Hi {username.lower()}, You are not developer');



# example 2
print('Example 2');

print('< < < < < LOGIN > > > > >');
print('Enter username');
username = input();
print('Enter password');
password = input();
is_logged_in = False;

if username.lower() == 'anish' and password == 'anish':
    is_logged_in = True;
    print(f'Hi {username}, you have loggedin succesfully ');
else:
    print('Invalid credentials');
    


# example 3
print('Example 3');

a = [1, 2, 3];
b = [1, 2, 3];

print(a == b); # True
print(a is b); # False because its created on different memory location, see below for both memory location
print(id(a)); # 134512661857472 this is memory location
print(id(b)); # 134512663820672


# example 4

print('Example 4');

# these all are consider as falsy values
# False
# None
# 0
# "", {}, [], ()


condition = 0;

if condition:
    print('True');
else:
    print('False');
