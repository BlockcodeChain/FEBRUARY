// Write a function which accepts a 2D array of integers and its size as arguments and displays the elements of middle row and the elements of middle column. (Assuming the 2D Array to be a square matrix with odd dimensions i.e. 3x3, 5x5, 7x7 etc...)
// only for odd matrix
// Input:
// 0  1 2 3 4

// 1 2 3 4 5
// 3 4 5 6 7
// 7 6 5 4 3
// 8 7 6 5 4
// 1 2 37 8 0
// Output:

//     3
//     5
// 7 6 5 4 3
//     6
//     37
#include<iostream>
using namespace std;

int main() {
    int n;
    cout<<"Enter size of square matrix: ";
    cin>>n;

    if(n % 2 == 0){
        cout<<"Matrix must be odd dimension.";
        return 0;
    }

    int arr[n][n];

    // Input
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cin>>arr[i][j];
        }
    }

    int mid = n/2;

    // Output middle row and column
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i == mid || j == mid)
                cout<<arr[i][j]<<" ";
            else
                cout<<"  ";
        }
        cout<<endl;
    }
}
