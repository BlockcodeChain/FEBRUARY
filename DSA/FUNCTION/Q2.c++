// calculate nCr bionaomial coefficient for n & r

#include<iostream>
using namespace std;
int factorial(int val){
    int fact=1;
    for(int i=1;i<=val;i++){
        fact*=i;
    }
    return fact;
}
int  BinomialCoefficinet(int num,int r){
 return  (factorial(num))/(factorial(r)*factorial(num-r));
}
int main(){
   int num;
   int r;
   cout<<"Enter number and r:";
   cin>>num>>r;
   if(r > num){
   cout<<"Invalid input";
   return 0;
}
 cout<< BinomialCoefficinet(num,r);

}