// single inheritance

#include <iostream>
#include <conio.h>
using namespace std;

class Animal {
public:
    void sound() {
        cout << "Animal makes a sound." << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Dog barks: Woof!" << endl;
    }
};

int main() {
    Dog myDog;
    myDog.sound(); // Inherited from Animal
    myDog.bark();  // Dog's own method
    return 0;
}



