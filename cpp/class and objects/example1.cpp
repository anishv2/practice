// struct example without use class
#include <iostream>
using namespace std;

struct Complex {
  private:
  int x,y;

  public:
  void input(int a, int b){
    x=a;
    y=b;
  };
  void display(){
    cout<<"first value: "<<x<<endl<<"second value: "<<y;
  };  
};

int main(){
    Complex a; // here a is a variable
    a.input(453,784);
    a.display();
    return 0;
};

// using with class
#include <iostream>
using namespace std;

class Complex {
  private: // here private access specifier is not mandatory in class, by default it consider as private 
  int x,y;

  public:
  void input(int a, int b){
    x=a;
    y=b;
  };
  void display(){
    cout<<"first value: "<<x<<endl<<"second value: "<<y;
  };  
};

int main(){
    Complex a; // here a is an object
    a.input(453,784);
    a.display();
    return 0;
};

