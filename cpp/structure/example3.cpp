/* here we are using member variables and member functions in structure and then using it in main function */
#include <iostream>
#include <conio.h>
using namespace std;

struct book {
    int bookid;
    char title[50];
    char author[50];
    float price;

    void input(){
        cin>>bookid>>title>>author>>price;
    }
    void display(){
         cout<<"===== YOUR BOOK DETAILS ====="<<endl<<endl;
        cout<<"ID: "<<bookid<<endl;
        cout<<"Price: "<<price<<endl;
        cout<<"Title: "<<title<<endl;
        cout<<"Author: "<<author<<endl;
    }
};

// book inputBook();
// void displayBook(book);


int main(){
    book b1;
    b1.input();
    b1.display();
    return 0;
}
