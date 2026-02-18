// MINIMUM ELEMENT IN ARRAY
#include<iostream>
#include<climits>
using namespace std;
int main()
{
// rows=30->2 
// column=4 0->3
int arr[3][3]={{1,2,3},{4,5,6},{7,18,9}};
int min=INT_MAX;
for(int i=0;i<3;i++){
    for(int j=0;j<3;j++){
        if(min>arr[i][j]){
            min=arr[i][j];
        }
    }
}  
cout<<"Maximum element in array:"<<min;
}