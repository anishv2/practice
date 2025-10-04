
# Todo Application in Python


class Todo:
    def __init__(self, title, description):
        self.title = title;
        self.description = description;

    def display(self):
        print(f'title:{self.title}, description: {self.description}');


todo = Todo('cooking', 'making pizza');

print(todo.display());

