
// Type 3: static member function

#include<iostream>
#include<conio.h>
using namespace std;


class Account {
    private:
    static float roi; // declaration of static member variable or class variable
    int balance; // declaration of instance member variable

    public:
    void set_balance(int bal){
        balance=bal;
    };
    static void set_rate_of_interest(float rate){ // static member function or class member function
        roi=rate;
    }
};

float Account:: roi=2.5; // definition of static memeber variable


// main function
int main(){ 
    Account acc;
    
    acc.set_rate_of_interest(3.0);
    Account::set_rate_of_interest(3.0); // reinitialize rate of interest with static member function
    return 0;
}