// holoow diamond patern

#include<iostream>
using namespace std;
int main(){
    int num;

    cout<<"Enter number:";
    cin>>num;
   for(int i=1;i<=num;i++){
    for(int space=num-i;space>=0;space--){
        cout<<" ";
    }
            cout<<"*";
            if(i > 1){
     for(int space=1;space<=2*i-3;space++){
        cout<<" ";
     }
    cout<<"*";
    
}
    cout<<endl;
   }
   for(int i=num;i>0;i--){
    for(int space=num-i;space>=0;space--){
        cout<<" ";
    }
            cout<<"*";
            if(i > 1){
     for(int space=1;space<=2*i-3;space++){
        cout<<" ";
     }
    cout<<"*";
    
}
    cout<<endl;
   }
  
    
  
}