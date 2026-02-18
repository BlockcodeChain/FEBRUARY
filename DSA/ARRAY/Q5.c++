// check pallindrome 
#include<iostream>
using namespace std;

int main(){
    int n;
    cin>>n;

    int arr[n];
    for(int i=0;i<n;i++)
        cin>>arr[i];
        int start=0,end=n-1;
        bool flag=true;
        while(start<=end){
            if(arr[start]!=arr[end]){
               flag=false;
               break;
            }
        start++;
        end--;
        }
        if(flag) cout<<"Pallindrome";
        else cout<<"Not pallindrome";        
}