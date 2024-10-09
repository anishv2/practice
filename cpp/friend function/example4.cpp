// overloading of unary operator as friend function

#include <iostream>
using namespace std;

class Complex {
    private:
    int m, n;
    
    public:
    void input(int a, int b){
        m=a;
        n=b;
    };
    void display(){
        cout<<"M is "<<m<<endl<<"N is "<<n;
    };
    friend Complex operator-(Complex); 
};

Complex operator-(Complex c){
    Complex temp;
    temp.m=-c.m;
    temp.n=-c.n;
};

int main(){
    Complex e, f;
    e.input(5,7);    
    f=-e; // f=operator-(e);
    f.display();
    return 0;
};