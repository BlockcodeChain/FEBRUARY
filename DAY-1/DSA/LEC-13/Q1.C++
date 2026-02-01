// ADD DIGITS
// num=123 sum=1+2+3=6
#include <iostream>
using namespace std;
int main(){
    int num;
    cout<<"Enter number:";
    cin>>num;
    int sum=0;
    while(num>0){
        int digit=num%10;
        sum+=digit;
        num/=10;
       if(sum>9){
        num=sum;
        sum=0;
       }
    }
    
    cout<<"Sum of digits:"<<sum;
}