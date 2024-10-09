#include<iostream>
using namespace std;

class A {
    public:
    void set(){
        //...
    };
    void get(){
        //...
    }
};

class B {
    
    friend void A::set(); // scope resolution operator used for decalaration of set function of class A
    friend void A::get();

    // friend class A; // we can also declare this single line instead of multiple declaration, to make all friend functions of class A 
};