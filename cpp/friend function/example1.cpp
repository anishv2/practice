/* 
  1. Friend function is not a member function of a class
  2. It is declared in class with friend keyword
  3. it must be defined outside the class to which it is friend
  4. It has no caller object
  5. It doesn't need to be defined with membership label
  6. It cannot access class members directly, while it can access the class members only which is friend

*/

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
    friend void set(Complex); // friend function always declared in the class with friend keyword and must be defined outside the class
};

void set(Complex s){
    cout<<"Sum is "<<s.x + s.y;
};

int main(){
    Complex c;
    c.input(3,54);
    c.display();
    set(c);
    return 0;
};