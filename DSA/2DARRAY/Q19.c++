// Write a program to print the matrix in wave form.

// Input :

// 1 2 3
// 4 5 6
// 7 8 9
// Output :

// 7 4 1 2 5 8 9 6 3

#include<iostream>
using namespace std;

int main() {
    int n;
    cout<<"Enter size of square matrix: ";
    cin>>n;
    int arr[n][n];
    // Input
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cin>>arr[i][j];
        }
    }
    for(int i=0;i<n;i++){
     if(i%2==0)  //even
     {
        for(int j=n-1;j>=0;j--){
            cout<<arr[j][i]<<" ";
        }
     }
     else 
      for(int j=0;j<n;j++){
            cout<<arr[j][i]<<" ";
        }
    }
}