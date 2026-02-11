// decimal to octal 
#include<iostream>
using namespace std;

int main(){
   int num;
   cout<<"Enter number:";
   cin>>num;
   int mul=1;
   int rev=0;
   while(num>0){
    int digit=num%8;
      rev=rev+digit*mul;
     num/=8;
     mul*=10;
   }
cout<<rev;
}