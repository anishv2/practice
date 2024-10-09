// Overloading of insertion and extraction operator by friend function

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
    // friend Complex operator-(Complex); 
};


int main() {
    Complex c;
    cout<<"Enter complex number";
    // cin>>c; // cin.operator>>(c);
    return 0;
};