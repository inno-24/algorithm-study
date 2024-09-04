import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    static int[] arr;
    static int n, s, result = 0;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");

        n = Integer.parseInt(input[0]);
        s = Integer.parseInt(input[1]);

        arr = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();

        backtraking(0, 0);

        System.out.println(result);
    }

    public static void backtraking(int idx, int sum) {
        int newSum = sum + arr[idx];

        if (newSum == s) {
            result++;
        }

        if (idx == n - 1) {
            return;
        }

        backtraking(idx + 1, newSum);
        backtraking(idx + 1, sum);
    }
}