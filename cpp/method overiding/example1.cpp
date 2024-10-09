
#include <iostream>
using namespace std;

class Quadrilateral {
    public:
    int height;

    public:
    void set(){

    };
    void setHeight(){
        height = 40;
    };
};

class Rectangle: public Quadrilateral {
    public:
    int height;
    void set(){     // method overiding

    };
    void setHeight(int x){      // method hiding
        height = x;
    };
};


int main(){
    Rectangle rect;

    rect.set();     // it will call method of Rectagnle because it finds first in own class, if it is there then it will same
    // rect.setHeight();  // it will throw error because of no arguments
    rect.setHeight(88); 
};
