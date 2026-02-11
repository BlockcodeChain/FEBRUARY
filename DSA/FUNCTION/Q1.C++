// calculate sum of digit of number

#include<iostream>
using namespace std;
void  SumOfDigit(int num){
    int sum=0;
   int count=0;
   while(num>9){
    sum=0;
    while(num>0){
    int digit=num%10;
    sum+=digit;
    num/=10;
    count++;
   }
   num=sum;
   }
    cout<<"Sum of digit is:"<<sum;
   cout<<endl<<"Count of digit :"<<count;
}
int main(){
   int num;
   cout<<"Enter number:";
   cin>>num;
   SumOfDigit(num);

}