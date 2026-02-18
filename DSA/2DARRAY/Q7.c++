// wap to print transport of the matrix entere dby the user and stored it in new matrix

#include<iostream>
using namespace std;
int main()
{
// trnaspose row->column
// column->row
int arr[3][2]={{19,28},{11,20},{1,12}};

for(int i=0;i<3;i++){
    for(int j=0;j<2;j++){
      cout<<arr[i][j]<<" ";
    }
    cout<<endl;
} 
cout<<"TRNASPOSE "<<endl;
for(int i=0;i<2;i++){
    for(int j=0;j<3;j++){
      cout<<arr[j][i]<<" ";
    }
    cout<<endl;
}  

}