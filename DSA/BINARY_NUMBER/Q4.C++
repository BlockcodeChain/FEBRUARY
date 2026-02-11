// binary to octal 
#include<iostream>
using namespace std;

int main(){
    int num;
    cout<<"Enter binary number: ";
    cin>>num;

    // STEP 1: Binary → Decimal
    int decimal = 0, power = 1;

    while(num > 0){
        int digit = num % 10;
        decimal += digit * power;
        power *= 2;
        num /= 10;
    }

    // STEP 2: Decimal → Octal
    int octal = 0, mul = 1;

    while(decimal > 0){
        int digit = decimal % 8;
        octal += digit * mul;
        mul *= 10;
        decimal /= 8;
    }

    cout<<"Octal = "<<octal;
}
