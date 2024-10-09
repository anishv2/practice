
// constructor and destructor in inheritance

#include <iostream>
using namespace std;

class A {
    int a;
    public:
    A(int k){ // constructor defined by user
        a = k;
    };
    ~A(){ // destructor called 

    }

};

class B : public A {
    int b;
    public:
    B(int x, int y): A(x) { // calling constructor of class A
        b = y;
    };
    ~B(){ // destructor called of class B but here dont need to call destructor of class A

    }
};

int main(){
    B obj(4,7); // values passing to constructor of class B
};