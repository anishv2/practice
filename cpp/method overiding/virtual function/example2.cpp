#include <iostream>
using namespace std;

class A {
    public:
        void f1() {
            cout << "A::f1()" << endl;
        };
        virtual void f2() {
            cout << "A::f2()" << endl;
        };
        virtual void f3() {
            cout << "A::f3()" << endl;
        };
        virtual void f4() {
            cout << "A::f4()" << endl;
        };
};

class B : public A {  // B inherits from A
    public:
        void f1() {  // B does not override f1, so early binding will happen
            cout << "B::f1()" << endl;
        }
        void f2() override {  // B overrides f2, so late binding will happen
            cout << "B::f2()" << endl;
        }
        void f4(int x) {  // This f4 is not related to A::f4, so early binding will happen
            cout << "B::f4(int)" << endl;
        }
};

int main () {
    A* p;
    B b;
    p = &b;  // p points to object of type B
    p->f1();  // will invoke A::f1() (early binding)
    p->f2();  // will invoke B::f2() (late binding)
    p->f3();  // will invoke A::f3() (late binding)
    p->f4();  // will invoke A::f4() (late binding)
    // b.f4(66); // direct call to B::f4(int)
    
    return 0;
}



// source: https://www.youtube.com/watch?v=Z_FiER8aAqM&list=PLLYz8uHU480j37APNXBdPz7YzAi4XlQUF&index=45