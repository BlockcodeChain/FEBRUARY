// Write a program to rotate the matrix by 90 degrees anti-clockwise.

// Input 1:

// 1 2 3
// 4 5 6
// 7 8 9
// Output 1:

// 3 6 9
// 2 5 8
// 1 4 7
#include<iostream>
using namespace std;
int main(){
    int n,m;
    cout<<"Enter row and column:";
    cin>>n>>m;
  if(n!=m){ cout<<"Row and column should be equal";
    return 0;}
    int arr[n][n];
      for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cin>>arr[i][j];
        }
    }
    // transpose of matrix
    for(int i=0;i<n;i++){
        for(int j=i+1;j<n;j++){
          swap(arr[i][j], arr[j][i]);
        }
      
    }
    for(int j=0;j<n;j++){
    int top = 0, bottom = n-1;
    while(top < bottom){
        swap(arr[top][j], arr[bottom][j]);
        top++;
        bottom--;
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