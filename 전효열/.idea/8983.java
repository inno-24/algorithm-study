import java.io.*;
import java.util.Arrays;

public class Main {
    static int M, N, L;
    static int[] arr;
    static int cnt;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] sarr = br.readLine().split(" ");
        M = Integer.parseInt(sarr[0]);
        N = Integer.parseInt(sarr[1]);
        L = Integer.parseInt(sarr[2]);

        arr = new int[M];
        sarr = br.readLine().split(" ");
        for (int i = 0; i < M; i++)
            arr[i] = Integer.parseInt(sarr[i]);

        Arrays.sort(arr);

        for (int i = 0; i < N; i++) {
            sarr = br.readLine().split(" ");
            int x = Integer.parseInt(sarr[0]);
            int y = Integer.parseInt(sarr[1]);

            int pos = Arrays.binarySearch(arr, x);
            if (pos < 0) {
                pos = -(pos + 1);
            }

            if (isWithinRange(pos, x, y) || isWithinRange(pos - 1, x, y)) {
                cnt++;
            }
        }

        bw.write(cnt + "\n");
        bw.flush();
        br.close();
        bw.close();
    }

    static boolean isWithinRange(int pos, int x, int y) {
        if (pos >= 0 && pos < M) {
            int dist = Math.abs(arr[pos] - x) + y;
            return dist <= L;
        }
        return false;
    }
}
// 문제해석
