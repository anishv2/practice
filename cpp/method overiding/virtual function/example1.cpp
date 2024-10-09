

#include <iostream>
using namespace std;

class Car {
    public:
    virtual void changeGear(){      // Here we have used virtual keyword before function name because of late binding at run time of program
        cout<<"Gear changed of Car";
    };
};

class SportsCar:public Car {
    public:
    void changeGear(){
        cout<<"Gear changed of SportsCar";
    };
};

int main(){
    Car c, *p;
    SportsCar sc;
    p = &sc;
    p->changeGear();    // Demonstrating late binding with the virtual keyword in a method of the base class. If we remove the virtual keyword from the method, it defaults to early binding. When using a pointer of the Car type, it will call only the base class method, not the actual method of the derived class object.
};

