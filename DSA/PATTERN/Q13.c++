// butterfly pattern

#include<iostream>
using namespace std;
int main(){
    int num;

    cout<<"Enter number:";
    cin>>num;
    for(int i=1;i<=num;i++){
       for(int j=1;j<=i;j++){
        cout<<"*";
       }
    //    cout<<endl;
    
    for(int space=1;space<=2*(num-i);space++){
    cout<<" ";
    }
        
       for(int j=i;j>0;j--){
        cout<<"*";
    
    }
    cout<<endl;
}
 for(int i=num;i>0;i--){
       for(int j=1;j<=i;j++){
        cout<<"*";
       }
    //    cout<<endl;
    
    for(int space=1;space<=2*(num-i);space++){
    cout<<" ";
    }
        
       for(int j=i;j>0;j--){
        cout<<"*";
    
    }
    cout<<endl;
}
}