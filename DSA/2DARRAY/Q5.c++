// wap to print sum of all the element of 2d matrix

#include<iostream>
using namespace std;
int main()
{
// rows=30->2 
// column=4 0->3
int arr[3][3]={{1,2,3},{1,2,3},{1,2,3}};
int sum=0;
for(int i=0;i<3;i++){
    for(int j=0;j<3;j++){
        sum+=arr[i][j];
    }
}  
cout<<"Sum of all element in array:"<<sum;
}