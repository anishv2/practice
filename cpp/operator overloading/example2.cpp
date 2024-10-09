// unary operator overloading

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
   
    Complex operator-(){ 
        Complex z;
        z.x=-x;
        z.y=-y;
        return z;
    }
};

int main(){
    Complex c1, c2, c3;
    c1.input(5,6);
    c2=-c1; // unary operator overloading, it doesn't need two operands (uses only in binary operator) 
    c2.display();
    return 0;
}



// source: https://www.youtube.com/watch?v=HH5olQfQiRM&list=PLLYz8uHU480j37APNXBdPz7YzAi4XlQUF&index=29