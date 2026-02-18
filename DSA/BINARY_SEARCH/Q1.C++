// GIVEN AN SORTED INTEGER ARRAY AND AN INTEGER X FIND LOWER BOUND OF X
#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter number:";
    cin>>n;
    
    int arr[n];
      for(int i=0;i<n;i++){
            cin>>arr[i];
        
    }
    int target=16;
    int low=0,high=n-1;
    int ans=-1;
    while(high>=low){
    int mid=low+(high-low)/2;
   
    if(arr[mid]<=target){
      ans=mid;
      low=mid+1;

   }
   else  high=mid-1;  //right
    }
    cout<<ans;
}


