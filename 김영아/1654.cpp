#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

//랜선 주어진 길이로 자를 수 있는 갯수
long long cut_cable(long long lan_cables[],int k, long long length) {
    long long count=0;
    for(int i=0;i<k;++i){
        count+=lan_cables[i]/length;
    }
    return count;
}
int main() {
    int K, N;
    cin >> K >> N;

    long long lan_cables[10000]; 
    long long max_length = 0;

    for (int i = 0; i < K; ++i) {
        cin >> lan_cables[i];
        if (lan_cables[i] > max_length) {
            max_length = lan_cables[i];
        }
    }

    // 이분 탐색 시작
    long long left = 1, right = max_length;
    long long result = 0;

    while (left <= right) {
        long long mid = (left + right) / 2;
        if (count_lan_cables(lan_cables, K, mid) >= N) {
            result = mid;  // 현재 길이로 N개 이상의 랜선을 만들 수 있으므로, 이 길이를 저장
            left = mid + 1;  // 더 긴 길이로도 가능한지 확인
        } else {
            right = mid - 1;  // N개를 만들 수 없으므로, 더 짧은 길이를 탐색
        }
    }

    cout << result << endl;

    return 0;
}