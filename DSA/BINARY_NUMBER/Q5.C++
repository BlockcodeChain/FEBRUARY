// binary to hexadecimal
#include<iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter binary number: ";
    cin >> num;

    string hex = "";
    int power = 1;
    int decimal = 0;

    // STEP 1: Binary → Decimal
    while(num > 0) {
        int digit = num % 10;
        decimal += digit * power;
        power *= 2;
        num /= 10;
    }

    // STEP 2: Decimal → Hexadecimal
    while(decimal > 0) {
        int rem = decimal % 16;

        if(rem < 10)
            hex = char(rem + '0') + hex;
        else
            hex = char(rem - 10 + 'A') + hex;

        decimal /= 16;
    }

    cout << "Hexadecimal = " << hex;
}
