#include <iostream>
#include <conio.h>
using namespace std;

struct book {
    int bookid;
    char title[50];
    char author[50];
    float price;
};

book inputBook();
void displayBook(book);

book inputBook(){
    book b;
    cout<<"Enter Book_ID, Book_Title, Book_Author, Book_Price";
    cin>>b.bookid>>b.title>>b.author>>b.price;
    return b;
}

void displayBook(book b){
    cout<<"===== YOUR BOOK DETAILS ====="<<endl<<endl;
    cout<<"ID: "<<b.bookid<<endl;
    cout<<"Price: "<<b.price<<endl;
    cout<<"Title: "<<b.title<<endl;
    cout<<"Author: "<<b.author<<endl;
}

int main(){
    clrscr();
    book b1;
    b1=inputBook();
    displayBook(b1);
    return 0;
}
