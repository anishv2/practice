import os

os.chdir('test-page') 

for f in os.listdir():
    print(f,'f')
    file_name, file_ext = os.path.splitext(f)

    # if file_ext:
    print(file_name, file_ext)


print(os.getcwd()) # d:\code practice\test-page

text='Hi I am-Robin';

print(text[1:-1]);



