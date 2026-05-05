import datetime

# for d, filename, directory in os.walk('/code practice'):
#     print(directory)

# f = open('20251220.txt', 'r')

# print(f.read()) # to read file
# f.read(100) # it reads upto 100 characters
# print(f.readline()) # read first line 
# print(f.readlines()) # read all lines 

# f.write('I am Superman') # write content file

# print(f.readlines(), end="") # read all lines with end new line
# print(f.mode) # to see mode
# f.close()


# best way to handle file open/close

read_size=10
content=""

with open('20260124.txt', 'w+') as f:
    f.write('Hey Robin, updated on 20260124') 
    f.seek(0) # it start from beginning position 0
    f.write('Hey Robin, updated on 20260124') # it overwrite the file with same content from position 0

    f.seek(3)
    print(f.read());
    # f.write('Hey Batman')
    
    print(f.tell()) # find current position of file pointer, in this case its 10
    f.seek(0) # move cursor at the beginning or any position from current position

    while len(content) > 0:
        print(content, end="")
        print('content', content)
        content = f.read(read_size)
    pass

print('content',content)


# def copy_file(read_filename,write_filename, chunk_size):
#     with open(read_filename, 'r') as rf:
#         with open(write_filename, 'w') as wf:
#             chunk_data = rf.read(chunk_size)
#             while len(chunk_data) > 0:
#                 wf.write(chunk_data)
#                 chunk_data = rf.read(chunk_size)


# copy_file('20251220.txt', '20260124.txt', 10)

