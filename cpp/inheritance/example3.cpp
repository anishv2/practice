// multiple inheritance

#include <iostream>

class Vehicle {
public:
    void drive() {
        std::cout << "Vehicle is driving." << std::endl;
    }
};

class Engine {
public:
    void start() {
        std::cout << "Engine starts." << std::endl;
    }
};

class Bus : public Vehicle, public Engine {
public:
    void displayInfo() {
        drive(); // From Vehicle
        start();  // From Engine
        std::cout << "This is a Bus." << std::endl;
    }
};

int main() {
    Bus myBus;
    myBus.displayInfo();
    return 0;
}
