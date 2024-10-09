// unary operator overloading
// Pre-increment/Post-increment operator overloading

#include <iostream>
using namespace std;

class Integer {
    private:
    int a;

    public:
    void input(int k){
        a=k;
    };
    void display() {
        cout<<"Value of A = "<<a;
    };
    Integer operator++(){ // pre-increment function
        Integer i;
        i.a=++a; // here first a is incremnt by one and then it will assign to i.a;
        return i;
    }
    Integer operator++(int){ // post-increment function, due to same name of both function, here int params is just for uniqueness to identify by compiler
        Integer i;
        i.a=a++; // here first a is assigned into i.a and then it will increment 
        return i;
    }
};

int main(){
    Integer i,k;
    i.input(34);
    // k=++i;
    // k.display();
    i.display();
    k=i++;
    i.display();
    k.display();
    return 0;
};