// WAP to find the smallest missing positive element in the sorted Array that contains only positive elements.

#include<iostream>
#include <algorithm>  
using namespace std;
int main(){
    int arr[]={1,2,3,4,1};
    int n = sizeof(arr) / sizeof(arr[0]);
    sort(arr,arr+n);
    for(int i=1;i<n;i++){
     if(arr[i]==arr[i-1]) cout << "Duplicate found";
     return 0;
    }
       cout << "No duplicate";
    return 0;
}