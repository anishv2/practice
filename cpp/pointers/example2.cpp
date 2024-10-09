
#include <iostream>
using namespace std;

class Box {
    public:
    int l,b,h;
    void setDimension(int l, int b, int h){ // here we are using this pointer because of conflicting variable names 
        this->l = l;
        this->b = b;
        this->h = h;
    };
    void showDimension(){
        cout<<"\n Length: "<<l<<" Breadth :"<<b<<" Height: "<<h;
    }
};

int main(){
    Box box, *p;
    p = &box;
    p->setDimension(55, 34, 20);
    cout<<"Box dimension"<<endl;
    p->showDimension();
};



// *** Note ***

// this keyword

// this is a local object pointer in every instance member function containing address of the caller object.

// this pointer cannot be modify

// it is used to refer caller object in member function


