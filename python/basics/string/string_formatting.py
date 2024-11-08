# string formatting


person = {
    'name': 'Olivia',
    'age': 25
};

s = ['Nick', 34];

message1 = 'I am {0[name]} and I am {0[age]} years old'.format(person);
message2 = 'I am {0[0]} and I am {0[1]} years old'.format(s);
print(message1); # I am Olivia and I am 25 years old
print(message2);  # I am Nick and I am 34 years old


# class 

class Person:
    def __init__(self, name, age):
        self.name = name;
        self.age = age;


pl = Person('Henry', 28);
message4 = 'I am {0.name} and I am {0.age} years old'.format(pl);

message5 = 'I am {name} and my age is {age}'.format(**person);

print(message5);



class Animal:
    def __init__(self, name, category):
        self.name = name;
        self.category = category;


an = Animal('Dog', 'Mammal');
message6 = 'I am {0.name} and I am a {0.category}'.format(an);
print(message6);

'''
Here,
{:02} is a formatting placeholder. Here's what it means:
{:02} ensures that the value of i is formatted as a two-digit number.
The 0 means "pad the number with leading zeros if necessary."
The 2 specifies that the width of the number should be 2 digits.

'''

for i in range(1,11):
    sentence = 'The value is {:02}'.format(i);
    print(sentence);



# decimal values

pi = 3.14159265

sentence = 'The pi value is {:.2f}'.format(pi);
print(sentence); # 3.14


# long sizes in bytes 
sentence = '1 MB is equal to {:,} bytes'.format(1000**2);

print(sentence) # 1 MB is equal to 1,000,000 bytes


# date time

import datetime

my_date = datetime.datetime(2024, 10, 24, 22, 30, 45);

print(my_date) # 2024-10-24 22:30:45

sentence = '{:%B %d, %Y}'.format(my_date);

print(sentence); # October 24, 2024

sentence = '{:%B %d, %Y} fell on a {} and was the {} day of the year'.format(
    my_date, my_date.strftime('%A'), my_date.timetuple().tm_yday
);

print(sentence)  # October 24, 2024 fell on a Thursday and was the 298 day of the year




# date time pyhon docs
# source: https://docs.python.org/3/library/datetime.html