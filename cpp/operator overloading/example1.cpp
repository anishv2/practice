// operator overloading example

#include <iostream>
using namespace std;

class Complex {
    private: 
    int x, y;
    
    public:
    void input(int m, int n){
        x=m;
        y=n;
    };
    void display(){
        cout<<"X value= "<<x<<endl<<"Y value= "<<y;
    };
    // Complex add(Complex c){ // we can also replace add function by operator + keyword as operator +(Complex c)
    //     Complex z;
    //     z.x=x+c.x;
    //     z.y=y+c.y;
    //     return z;
    // }
    Complex operator+(Complex c){ 
        Complex z;
        z.x=x+c.x;
        z.y=y+c.y;
        return z;
    }
};

int main(){
    Complex c1, c2, c3;
    c1.input(5,6);
    c2.input(7,8);
    // c3=c1.add(c2); // we can also replace .add function by operator + keyword or c1+c2, because we defined our operator + to add in the above class
    c3=c1.operator+(c2); // we can add as like this 
    // c3=c1+c2; // it also works as normal plus opeartor
    c3.display();
    return 0;
}