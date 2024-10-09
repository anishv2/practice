// hierarchical inheritance

#include <iostream>

class Animal {
public:
    void sound() {
        std::cout << "Animal makes a sound." << std::endl;
    }
};

// Derived class 1
class Dog : public Animal {
public:
    void bark() {
        std::cout << "Dog barks: Woof!" << std::endl;
    }
};

// Derived class 2
class Cat : public Animal {
public:
    void meow() {
        std::cout << "Cat meows: Meow!" << std::endl;
    }
};

// Derived class 3
class Cow : public Animal {
public:
    void moo() {
        std::cout << "Cow moos: Moo!" << std::endl;
    }
};

int main() {
    Dog myDog;
    Cat myCat;
    Cow myCow;

    myDog.sound(); // Inherited from Animal
    myDog.bark();  // Dog's own method

    myCat.sound(); // Inherited from Animal
    myCat.meow();  // Cat's own method

    myCow.sound(); // Inherited from Animal
    myCow.moo();   // Cow's own method

    return 0;
}

