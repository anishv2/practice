
#include <iostream>
using namespace std;

class Box {
    public:
    int l,b,h;
    void setDimension(int x, int y, int z){
        l = x;
        b = y;
        h = z;
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

