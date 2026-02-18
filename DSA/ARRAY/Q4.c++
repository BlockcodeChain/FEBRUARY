// unique element
#include<iostream>
using namespace std;

int main(){
    int n;
    cin>>n;

    int arr[n];
    for(int i=0;i<n;i++)
        cin>>arr[i];

    int result = 0;

    for(int i=0;i<n;i++)
        result ^= arr[i];

    cout<<"Unique element: "<<result;
}
// 1 2 3 1 2 
// 👉 a ^ a = 0
// 👉 a ^ 0 = a

// 1^2^3^1^2
// (1^1 )^(2^2)^3
// 0^0^3
// 3