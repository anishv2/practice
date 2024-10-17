
# function to check leap year 
def is_leap_year(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0);

print(is_leap_year(2004));
print(is_leap_year(2001));
print(is_leap_year(2003));


# function to check to days in months

month_days = [0, 31,28,31,30,31,30,31,31,30,31,30,31];

def days_in_month(year, month):
    '''Returns number of days in month and year'''
    if not 1 <= month <= 12:
        return 'Invalid month';
    if month == 2 and is_leap_year(year):
        return 29;
    return month_days[month];

print(days_in_month(2002, 2));
print(days_in_month(2003, 3));



# function to find index of item in list

def find_index(search_list, target_item):
    ''' Find the index of value in a list '''
    for i, item in enumerate(search_list):
        if target_item == item:
            return i;
    return -1;

