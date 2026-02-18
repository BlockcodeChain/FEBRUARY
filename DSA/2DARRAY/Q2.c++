// MAXIMUM ELEMENT IN ARRAY
#include<iostream>
#include<climits>
using namespace std;
int main()
{
// rows=30->2 
// column=4 0->3
int arr[3][3]={{1,2,3},{4,5,6},{7,18,9}};
int max=INT_MIN;
for(int i=0;i<3;i++){
    for(int j=0;j<3;j++){
        if(max<arr[i][j]){
            max=arr[i][j];
        }
    }
}  
cout<<"Maximum element in array:"<<max;
}