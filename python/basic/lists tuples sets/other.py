
nums = [2,3,1,6,3,54,12,9];
fruits = ['Apple','Banana','Cherry','Mango','Grapes']; 


# for loop 
for num in nums:
    print(num); 
# output:-
# 2
# 3
# 1
# 6
# 3
# 54
# 12
# 9

# for loop with getting index
for index, num in enumerate(nums):
    print(f'{index} - {num}'); 

# output:-
# 0 - 2
# 1 - 3
# 2 - 1
# 3 - 6
# 4 - 3
# 5 - 54
# 6 - 12
# 7 - 9

# for loop with getting index and also explicitly set starting index
for index, num in enumerate(nums, start=1):
    print(f'{index} - {num}'); 

# output:-
# 1 - 2
# 2 - 3
# 3 - 1
# 4 - 6
# 5 - 3
# 6 - 54
# 7 - 12
# 8 - 9

fruits_str = ' - '.join(fruits); # it places (-) at every elements of the list and then join them
fruits_split =  fruits_str.split(' - '); # it splits the lists elements as same as above 
print(fruits_str); # Apple - Banana - Cherry - Mango - Grapes
print(fruits_split); # ['Apple', 'Banana', 'Cherry', 'Mango', 'Grapes']





# date: 09-10-2024
# source: https://www.youtube.com/watch?v=W8KRzm-HUcc&list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU&index=4