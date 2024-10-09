
#include <iostream>
#include <conio.h>
using namespace std;

class Complex {
    private:
    int x,y;

    public:
    Complex(){ // default constructor function
        cout<<"Constructor called";
    }
};

main(){
    Complex c;
};