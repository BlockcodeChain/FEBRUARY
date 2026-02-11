// deciaml to binary 

#include<iostream>
using namespace std;

int main(){
   int num;
   cout<<"Enter number:";
   cin>>num;
   int mul=1;
   int rev=0;
   while(num>0){
    int digit=num%2;
      rev=rev+digit*mul;
     num/=2;
     mul*=10;
   }
cout<<rev;
}

// 10=>1010 