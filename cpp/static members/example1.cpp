
// Type 1: static local variable

#include<iostream>
#include<conio.h>

void set(){
    static int p; // static is used for when we need the value of p in throughtout the program, it's not depend on function invoke - by default it's value is zero
    int q; // this variable only runs when function invoked and will be destroy after the termination of function
};


// Type 2: static member variable

class Account {
    private:
    static float roi; // declaration of static member variable or class variable
    int balance; // declaration of instance member variable

    public:
    void set_balance(int bal){
        balance=bal;
    };
};

float Account:: roi=2.5; // definition of static memeber variable


// main function
int main(){ 
    Account acc;
    return 0;
}