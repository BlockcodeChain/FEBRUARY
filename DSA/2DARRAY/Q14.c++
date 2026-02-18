// Write a program to print the row number having the maximum sum in a given matrix.

// Input:

// 1 3 5 7
// 3 4 7 8
// 1 4 12 3
#include<iostream>
#include<climits>

using namespace std;

int main() {
    int m,n;
    cout<<"Enter row and column:";
    cin>>m>>n;
   int arr[m][n];
   int index;
    int maxsum=INT_MIN;
   for(int i=0;i<m;i++){
    for(int j=0;j<n;j++){
        cin>>arr[i][j];
    }
    
   }
    for(int i=0;i<m;i++){
        int sum=0;
    for(int j=0;j<n;j++){
        sum+=arr[i][j];
       
    }
   if(sum > maxsum){
    maxsum = sum;
    index = i;
}
   }
   cout<<"Maxium sum:"<<maxsum;
   cout<<endl<<index;
}