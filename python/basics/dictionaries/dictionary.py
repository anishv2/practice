
person = {
    'name': 'David',
    'age': 35,
    'city': 'New York'
};

print(person); # {'name': 'David', 'age': 35, 'city': 'New York'}

print(person.get('age')); # 35
print(person.get('email')); # None
print(person.get('email', 'Not found')); # Not found



# delete key from dictionary

del person['age'];
print(person); # {'name': 'Ram', 'city': 'Los Angeles'}

# to get value of deleted key and value
city = person.pop('city');
print(city); # Los Angeles

# see the keys of dictionary
print(person.keys()); # dict_keys(['name'])
print(person.values()); # dict_values(['Ram'])
print(len(person)); # 1
print(person.items()) # dict_items([('name', 'Ram')])

# updating with new values

person['name'] = 'Mark';
print(person); # {'name': 'Mark', 'age': 35, 'city': 'New York'}

# updating values with update method

person.update({ 'name': 'Ram', 'age': 30, 'city': 'Los Angeles' });
print(person); # {'name': 'Ram', 'age': 30, 'city': 'Los Angeles'}


# get keys and values with loop
for key, value in person.items():
    print(key, value);  # name Ram
                        # age 30
                        # city Los Angeles


anime={
    'name': 'Beyblade',
    'releasedYear': '2001',
    'language':'Japanese',
};


print('Anime has:');

for key, value in anime.items():
    print(f'key: {key}, value: {value}');


# conditional statement

if "language" in anime:
    print('Language key is exist');
else:
    print('Language key is not exist');  


