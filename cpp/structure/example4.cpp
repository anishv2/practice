/* here we are using member variables and member functions in structure and then using it in main function */
#include <iostream>
#include <conio.h>
using namespace std;

struct book {
    private:
    int bookid;
    char title[50];
    char author[50];
    float price;

    public:
    void input(){
        cin>>bookid>>title>>author>>price;
        if(bookid<0)
        bookid=-bookid;
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
