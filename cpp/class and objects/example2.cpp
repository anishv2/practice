//  to add two complex numbers
// e.g. 5+6i and 5+2i 

#include <iostream>
using namespace std;

class Complex {
    private:
     int r, i;
    public:
     void input(int a, int b){
        r=a;
        i=b;
     };
     Complex add(Complex c){
        Complex sum;
        sum.r=r+c.r;
        sum.i=i+c.i;
        return sum;
     };
     void display(){
        cout<<"real value: "<<r<<endl<<"imaginary value: "<<i;
     }
};

int main(){
    Complex c1, c2, sum;
    c1.input(5,2);
    c2.input(5,6);
    sum=c1.add(c2);
    sum.display();
};

