// COUNTING
#include<iostream>
using namespace std;
int main(){
    int num;
    int count=1;
    cout<<"Enter number:";
    cin>>num;
for(int i=0;i<num;i++){
for(int j=0;j<num;j++){
    cout<<count<<" ";
    count++;
}

cout<<endl;
}
}