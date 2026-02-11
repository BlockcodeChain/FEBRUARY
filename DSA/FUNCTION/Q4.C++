// wap to print all prime number from 2 to n
#include<iostream>
using namespace std;
bool  PrimeNum(int num){
if(num<2) return 0;
 for(int i= 2;i<num;i++){
   if(num%i==0){
    return 0;
   }
 }
 return 1;
}
int main(){
   int num;
   int r;
   cout<<"Enter number ";
   cin>>num;

   for(int i=2; i<=num; i++){
       if(PrimeNum(i))
           cout<<i<<" ";
   }
}