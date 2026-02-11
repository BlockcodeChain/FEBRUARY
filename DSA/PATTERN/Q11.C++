// pyramid triangle pattern 

#include<iostream>
using namespace std;
int main(){
    int num;

    cout<<"Enter number:";
    cin>>num;
    for(int i=1;i<=num;i++){
        for(int space=0;space<=(num-i)-1;space++){
             cout<<" ";
        }
        for(int j=1;j<=i;j++){
            cout<<j;
        }
        for(int j = i - 1; j >= 1; j--) {
            cout << j;
        }
          cout<<endl;
    }
  
    
  
}