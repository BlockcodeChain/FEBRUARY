// wap to program to check number is  prime number or not
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

 if(PrimeNum(num)){
    cout<<"Prime number";}
else cout<<"Not a Prime Number";
}