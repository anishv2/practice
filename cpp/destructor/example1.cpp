

#include <iostream>
#include <conio.h>
using namespace std;

class Complex {
    private:
    int x,y;

    public:
    ~Complex(){ // default destructor function it is indicate by prefix tilde (~) symbol before class name
        cout<<"Destructor called";
    };
};

main(){
    Complex c;
};