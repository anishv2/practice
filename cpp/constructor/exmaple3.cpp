
#include <iostream>
#include <conio.h>
using namespace std;

class Complex {
    private:
    int x,y;

    public:
    Complex(){
        cout<<"Default Constructor called";
    };
    Complex(int a, int b){ // paratmeterize constructor function
        x=a;
        y=b;
        cout<<"Parameterised Constructor called";
    };
    Complex(int t){
        cout<<"Single param Constructor"<<t;
    };
    Complex(Complex &c){ // copy constructor it calls be default just like default constructor
        x=c.x;
        y=c.y;
        cout<<"Copy Constructor called";
    };
};

main(){
    Complex x(0,0); 
    Complex y(x); // it calling copy constructor because of y object intiliase with same object type which is Complex type;
};

