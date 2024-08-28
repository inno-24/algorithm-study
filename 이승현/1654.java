import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int K = scanner.nextInt();
        int N = scanner.nextInt();

        int[] arr = new int[K];
        long max = 0;

        for (int i = 0; i < K; i++) {
            arr[i] = scanner.nextInt();
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        long low = 1;
        long high = max;
        long result = 0;

        while (low <= high) {
            long mid = (low + high) / 2;
            long count = 0;

            for (int i = 0; i < K; i++) {
                count += arr[i] / mid;
            }

            if (count >= N) {
                result = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        System.out.println(result);
    }
}
