#include<iostream>
using namespace std;
int main()
{
// rows=30->2 
// column=4 0->3
int arr[3][3];
cout<<arr[0][0];   //unitiallized chodh degge toh garbage value aayegi isme 
arr[0][0]=4;
cout<<endl<<arr[0][0];   //4 value aayegi 
}