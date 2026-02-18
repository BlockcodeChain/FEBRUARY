// wave matrix
#include<iostream>
using namespace std;

int main() {
   int m,n;
   cout<<"Enter matrix1 row and column;";
   cin>>n>>m;
   int arr[m][n];
   for(int i=0;i<m;i++){
    for(int j=0;j<n;j++){
        cin>>arr[i][j];
    }
   }
    for(int i=0;i<m;i++){
    for(int j=0;j<n;j++){
        cout<<arr[i][j]<<" ";
    }
    cout<<endl;
   }
    for(int i=0;i<m;i++){
   if(i%2==0){
    for(int j=0;j<n;j++){
        cout<<arr[j][i]<<" ";
    }
   
   }
   else 
    for(int j=n-1;j>=0;j--){
  cout<<arr[j][i]<<" ";
    }
  
    }
}
