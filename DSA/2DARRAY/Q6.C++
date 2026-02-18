// ADDITION OF MATRIX

#include<iostream>
using namespace std;
int main()
{
// additon of matrix same row and column
int arr[3][3]={{1,2,13},{1,2,3},{1,12,33}};
int arr1[3][3]={{11,2,3},{1,12,3},{1,22,3}};

for(int i=0;i<3;i++){
    for(int j=0;j<3;j++){
      cout<<arr[i][j]+arr1[i][j]<<" ";
    }
    cout<<endl;
}  

}