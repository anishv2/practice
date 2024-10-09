
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
};

main(){
    Complex cs; // creating object for default constructor 
    Complex c(0,0); // first way
    // Complex c=Complex(0,0) // second way
    // Complex t=34; // third way  but it works only when constructor have single parameter 
};

