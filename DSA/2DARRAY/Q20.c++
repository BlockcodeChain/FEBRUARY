// Given a positive integer n, generate a n x n matrix filled with elements from 1 to n2 in spiral order.

// Input 1: n = 3 Output 1:

// [[1,2,3],[8,9,4],[7,6,5]]
// Input 2: n = 1 Output 2:

// [[1]]


#include<iostream>
using namespace std;
int main(){
    int n,m;
    cout<<"Enter row and column:";
    cin>>n>>m;

    int arr[n][n];
      for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cin>>arr[i][j];
        }
    }
 

 // Print result
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }

}