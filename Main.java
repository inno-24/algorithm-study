import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] kn = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        int K = kn[0]; // 가지고 있는 랜선 개수
        int N = kn[1]; // 구해야할 랜선 개수
        int[] arr = new int[K];
        int min = 1;
        int max = 0;

        for (int i = 0; i < K; i++) {
            arr[i] = Integer.parseInt(br.readLine());
            max = Math.max(max, arr[i]);
        }

        int mid = 0;
        long n = 0;
        
        while (min <= max) {
            mid = (max + min) / 2;
            long count = 0;
            for (int i = 0; i < K; i++) {
                count += (arr[i] / mid);
            }

            if (count >= N) {
                n = mid;
                min = mid + 1;
            } else {
                max = mid - 1;
            }
        }

        System.out.println(n);
    }
}