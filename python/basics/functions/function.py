
def print_name():
    print('Anish');


print_name();

def test_fun():
    pass;   # function definitions cannot be empty, but if you for some reason have a function definition with no content, put in the pass statement to avoid getting an error.

def dev_info():
    return {
        "name": "Anish",
        "email": "anish@test.com"
    };


print(dev_info()); 

print(dev_info()['name'].upper()) # this statement is called chaining because dev_info() is returning a dictionary as above and then we can access name keys which is a string and then calling a upper method of string


def greet(message):
    return '{} '.format(message); 

print(greet('Good Night')); # Good Night 


def greet2(message, name = 'Anish'):  # here name is a default params in function
    print('{} says {}'.format(name, message)); # Anish says Good Night, due to not returning anything in function its also it returning None after message
                                               

print(greet2('Good Night'));


# Positional-Only Arguments
# You can specify that a function can have ONLY positional arguments, or ONLY keyword arguments.
# To specify that a function can have only positional arguments, add (, /) after the arguments:

def pos_only_args(x, /):
  print(x);

pos_only_args(3);      # Works: positional argument
pos_only_args(x=3);    # Error: x cannot be passed as a keyword


# Keyword-Only Arguments
# To specify that a function can have only keyword arguments, add *, before the arguments:

def keys_only_args(*, x):
  print(x);

keys_only_args(x = 3); # 3



# Arbitrary Arguments, *args
# If you do not know how many arguments that will be passed into your function, add a * before the parameter name in the function definition.

def arb_args(*kids):
  print("The youngest child is " + kids[2]);

arb_args("Emil", "Tobias", "Linus"); # The youngest child is Linus



# Keyword Arguments
# You can also send arguments with the key = value syntax.

# This way the order of the arguments does not matter.

def key_args(child3, child2, child1):
  print("The youngest child is " + child1);

key_args(child1 = "Emil", child2 = "Tobias", child3 = "Linus"); # The youngest child is Linus



# Arbitrary Keyword Arguments, **kwargs
# If you do not know how many keyword arguments that will be passed into your function, add two asterisk: ** before the parameter name in the function definition.

# This way the function will receive a dictionary of arguments, and can access the items accordingly:

def arb_key_args(**kid):
  print("His last name is " + kid["lname"]);

arb_key_args(fname = "Tobias", lname = "Refsnes"); # His last name is Refsnes





def student_details(*courses, **stud):
  print("Courses and Student details:- ", courses, stud);


courses = ['Accountancy', 'Computer Science', 'Economics'];
student = { 'name': 'David', 'age': 19 };

student_details(courses, student); # Courses and Student details:-  (['Accountancy', 'Computer Science', 'Economics'], {'name': 'David', 'age': 19}) {}

# we can also unpack the dictionaries and lists
student_details(*courses, **student); # Courses and Student details:-  ('Accountancy', 'Computer Science', 'Economics') {'name': 'David', 'age': 19}

