// inverted triangle pattern 

#include<iostream>
using namespace std;
int main(){
    int num;

    cout<<"Enter number:";
    cin>>num;
for(int i=0;i<num;i++){
    for(int space=0;space<i;space++){
        cout<<" ";
    }
for(int j=num;j>i;j--){
    cout<<char('A'+i);

}

cout<<endl;
}
}