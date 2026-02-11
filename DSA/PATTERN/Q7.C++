// reverse triangle pattern
#include<iostream>
using namespace std;
int main(){
    int num;

    cout<<"Enter number:";
    cin>>num;
for(int i=1;i<=num;i++){
for(int j=i;j>0;j--){
    cout<<j<<" ";

}

cout<<endl;
}
}