// multilevel inheritance

#include <iostream>

class Animal {
public:
    void sound() {
        std::cout << "Animal makes a sound." << std::endl;
    }
};

class Mammal : private Animal {
public:
    void walk() {
        std::cout << "Mammal walks." << std::endl;
    }
};

class Cat : public Mammal {
public:
    void meow() {
        std::cout << "Cat meows: Meow!" << std::endl;
    }
};

int main() {
    Cat myCat;
    // myCat.sound(); // Inherited from Animal, so that we cannot call private memmber function directly  
    myCat.walk();  // Inherited from Mammal
    myCat.meow();  // Cat's own method
    return 0;
}
