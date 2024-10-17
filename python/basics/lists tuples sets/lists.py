
fruits = ['Apple','Banana','Cherry','Mango','Grapes']; # list or array of fruits

print(fruits); # ['Apple','Banana','Cherry','Mango','Grapes']
print(len(fruits)); # 5 it returns the length of list
print(fruits[0]); # Apple, it returns first element of list
print(fruits[-1]); # Grapes, it returns the last element of list or we can say it returns first element from right to left
print(fruits[0:2]); # ['Apple', 'Banana'], returns elements from index 0 to 1 (index 2 is exclusive)
print(fruits[:2]); # ['Apple', 'Banana'], it is another way (shorthand) to return all elements before 2nd index
print(fruits[2:]); # ['Cherry', 'Mango', 'Grapes'], it returning all elments from 2nd index to the last index element 

fruits.append('Lichi'); # it inserts or appends the element at end of list or array
print(fruits); # ['Apple', 'Banana', 'Cherry', 'Mango', 'Grapes', 'Lichi']

fruits.insert(3,'Pineapple'); # it inserts the element in list with passing the index at first argument and then the element in second argument
print(fruits); # ['Apple', 'Banana', 'Cherry', 'Pineapple', 'Mango', 'Grapes', 'Lichi']

more_fruits = ['Guava','Blackberry','Papaya'];

fruits.append(more_fruits); 
print(fruits); # ['Apple', 'Banana', 'Cherry', 'Pineapple', 'Mango', 'Grapes', 'Lichi', ['Guava', 'Blackberry', 'Papaya']]

fruits.extend(more_fruits); # it combines the fruits list with more_fruits list 
print(fruits);  # ['Apple', 'Banana', 'Cherry', 'Pineapple', 'Mango', 'Grapes', 'Lichi', 'Guava', 'Blackberry', 'Papaya']

print(fruits); # ['Apple', 'Banana', 'Cherry', 'Pineapple', 'Mango', 'Grapes', 'Lichi', 'Guava', 'Blackberry', 'Papaya', ['Guava', 'Blackberry', 'Papaya']]

fruits.remove('Lichi'); # it removes Lichi from list
fruits.pop(); # it removes the last element of list

fruits.reverse(); # it reverse all the elements of list
print(fruits); # ['Papaya', 'Blackberry', 'Guava', 'Grapes', 'Mango', 'Pineapple', 'Cherry', 'Banana', 'Apple']

nums = [4,2,9,1,16,3];
nums.sort();  # it sorts all elements with acsending order
nums.sort(reverse=True);  # sorts all with descending order
print(nums); # [16, 9, 4, 3, 2, 1]

fruits.sort(); # it sorts the elements with alphabetical order (only if when all elements are string) otherwise for numbers it sorts in ascending order
fruits.sort(reverse=True); # for descending order
print(fruits);  

# sort() method manipulate the original list, so, to avoid this issue, we have a another method to solve this issue
sorted_fruits = sorted(fruits); # this new method returns the manipulate sorted list into the variable
print(sorted_fruits);

print(max(nums)); # 16
print(min(nums)); # 1
print(sum(nums)); # 35

print(fruits.index('Guava')); # find index for the element
print('Cherry' in fruits); # True


# to create empty list 

fruits = [];
# or
fruits =  list();








# date: 09-10-2024
# source: https://www.youtube.com/watch?v=W8KRzm-HUcc&list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU&index=4