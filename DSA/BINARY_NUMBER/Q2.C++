//  binary to deciaml 

#include<iostream>
#include<cmath>
using namespace std;

int main(){
   int num;
   cout<<"Enter number:";
   cin>>num;
//    int mul=0;
  int power=1;
   int rev=0;
   while(num>0){
    int digit=num%10;
  
       rev=rev+power*digit;
      power*=2;
     num/=10;
     
   }
cout<<rev;
}

// 10=>1010 