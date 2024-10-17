import random
import math
import example1
import datetime
import calendar
import os


print(random.choice(example1.brands));  # random value from brands list

rads = math.radians(90); 

print(rads); # 1.5707963267948966
print(math.sin(rads)); # 1.0



print(datetime.date.today());
print(calendar.isleap(2024)); # True

# operating system

print(os.getcwd());  # prints current working directory
print(os.__file__);  # prints the location of os file