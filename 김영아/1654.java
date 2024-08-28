package 김영아;

import java.util.Scanner;
public class 1654 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int K = sc.nextInt(); // 이미 가지고 있는 랜선의 개수
        int N = sc.nextInt(); // 필요한 랜선의 개수

        long[] lanCables = new long[K];
        long max_length = 0;

        for (int i = 0; i < K; i++) {
            lanCables[i] = sc.nextLong();
            if (lanCables[i] > max_length) {
                max_length = lanCables[i];
            }
        }

        long left = 1;
        long right = max_length;
        long result = 0;

        // 이분 탐색 시작
        while (left <= right) {
            long mid = left + (right - left) / 2;

            if (countLanCables(lanCables, K, mid) >= N) {
                result = mid; // 현재 길이로 N개 이상의 랜선을 만들 수 있으므로, 이 길이를 저장
                left = mid + 1; // 더 긴 길이로도 가능한지 확인
            } else {
                right = mid - 1; // N개를 만들 수 없으므로, 더 짧은 길이를 탐색
            }
        }

        System.out.println(result);
    }

    // 랜선을 주어진 길이로 자를 수 있는 개수를 계산하는 함수
    private static long countLanCables(long[] lanCables, int K, long length) {
        long count = 0;
        for (int i = 0; i < K; i++) {
            count += lanCables[i] / length;
        }
        return count;
    }
}
