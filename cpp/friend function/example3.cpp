
#include <iostream>
using namespace std;

class Complex {
    private:
    int x, y;
    
    public:
    void input(int a, int b){
        x=a;
        y=b;
    };
    void display(){
        cout<<"X is "<<x<<endl<<"Y is "<<y;
    };
    friend Complex operator+(Complex, Complex); // friend function always declared in the class with friend keyword and must be defined outside the class
  
};

Complex operator+(Complex c, Complex d){
    Complex temp;
    temp.x=c.x+d.x;
    temp.y=c.y+d.y;
    return temp;
};

int main(){
    Complex c, d, e;
    c.input(4,5);
    d.input(7,8);
    e=operator+(c,d);
    e.display();
    return 0;
}; 