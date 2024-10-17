
# different ways to import modules 

# from basic.functions import miscellaneous  # way 1 
# from basic.functions import miscellaneous # way 2
# from basic.functions.miscellaneous import find_index, days_in_month # way 3
# from basic.functions.miscellaneous import * # way 4

from basic.functions.miscellaneous import find_index as fi # way 4


brands = ['Samsung','Apple','Xiaomi','Motorola','Realme','Sony','Nokia','Oneplus'];

print(fi(brands, 'Realme'));



