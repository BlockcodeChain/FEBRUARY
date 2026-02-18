// matrix multiplication
#include<iostream>
using namespace std;

int main() {
    int n,m;
    cout << "Enter matrix 1 rows and columns: ";
    cin >> n >> m;
    int m1[n][m];
    
    cout << "Enter matrix 1 elements:\n";
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin >> m1[i][j];
        }
    }

    int p,q;
    cout << "Enter matrix 2 rows and columns: ";
    cin >> p >> q;
    int m2[p][q];

    cout << "Enter matrix 2 elements:\n";
    for(int i=0;i<p;i++){
        for(int j=0;j<q;j++){
            cin >> m2[i][j];
        }
    }

    if(m != p) {
        cout << "Matrix multiplication not possible" << endl;
        return 0;
    }

    int res[n][q]; // result matrix

    // Initialize result matrix to 0
    for(int i=0;i<n;i++){
        for(int j=0;j<q;j++){
            res[i][j] = 0;
        }
    }

    // Matrix multiplication
    for(int i=0;i<n;i++){
        for(int j=0;j<q;j++){
            for(int k=0;k<m;k++){
                res[i][j] += m1[i][k] * m2[k][j];
            }
        }
    }

    // Print result
    cout << "Resultant matrix:\n";
    for(int i=0;i<n;i++){
        for(int j=0;j<q;j++){
            cout << res[i][j] << " ";
        }
        cout << endl;
    }
}
