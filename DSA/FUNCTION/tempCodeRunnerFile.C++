// wap to print all prime number from 2 to n
#include<iostream>
using namespace std;
vint  PrimeNum(int num){
if(num<2) return 0;
 for(int i= 2;i<num;i++){
   if(num%i==0){
return 0;
   }
return i;
 }
