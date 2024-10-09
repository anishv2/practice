#include <iostream>
using namespace std;

class B; // here we declare class B, because compiler not able to understand what is B in parenthesis at line 9 
class A{
    int a;
    
    public:
    void input(int m){
        a=m;
    };
    friend void func(A,B);
};

class B{
    int b;
    
    public:
    void input(int n){
        b=n;
    };
    friend void func(A,B);
};

void func(A obj1, B obj2){
    cout<<"Sum of A + B = "<<obj1.a+obj2.b;
};

int main(){
    A obj1;
    B obj2;
    obj1.input(35);
    obj2.input(35);
    func(obj1, obj2);
};