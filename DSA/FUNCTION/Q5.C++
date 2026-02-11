// WAFTO PRINT NTH FIBONNACI 
// calculate nCr bionaomial coefficient for n & r

#include<iostream>
using namespace std;
void  Fibonnaci(int num){
 int num1=0,num2=1,num3;
 while(num>0){
    cout<<num1<<" ";
    num3=num2+num1;
    num1=num2;
    num2=num3;
    
    num--;
 }
}
int main(){
   int num;
   int r;
   cout<<"Enter number ";
   cin>>num;
 Fibonnaci(num);

}