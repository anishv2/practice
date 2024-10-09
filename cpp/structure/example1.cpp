
/* Basic Structure Example */

#include <iostream>
#include <cstring>
using namespace std;

struct book {
    int bookid;
    float price;
    char title[50];
    char author[50];
};

int main(){
    book b1,b2;
    cout<<"===== ENTER BOOK DETAILS ====="<<endl<<endl;
    cout<<"Enter ID: ";
    cin>>b1.bookid;
    cout<<"Enter Price: ";
    cin>>b1.price;
    cout<<"Enter Title: ";
    cin>>b1.title;
    cout<<"Enter Author: ";
    cin>>b1.author;
    cout<<endl;
    cout<<"===== YOUR BOOK DETAILS ====="<<endl<<endl;
    cout<<"ID: "<<b1.bookid<<endl;
    cout<<"Price: "<<b1.price<<endl;
    cout<<"Title: "<<b1.title<<endl;
    strcpy(b1.title,"Hi book");
    cout<<"Author: "<<b1.author<<endl;
    return 0;
};

