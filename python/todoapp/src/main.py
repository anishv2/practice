
# Todo Application in Python

from datetime import datetime, timezone

class Todo:
    def __init__(self, title, description):
        self.title = title
        self.description = description
        self.createdAt = datetime.now(timezone.utc)

    def display(self):
        print(f'title:{self.title}, description: {self.description}, createdAt: {self.createdAt}')
    
    def delete():
        print("Task deleted succesfully")
    
 

todo = Todo('cooking', 'making pizza')
print(todo.display())


