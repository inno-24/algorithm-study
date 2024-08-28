import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int k = sc.nextInt();
        int n = sc.nextInt();
        int[] lan = new int[k];

        for (int i = 0; i < k; i++) {
            lan[i] = sc.nextInt();
        }

        Arrays.sort(lan);

        long left = 1;
        long right = lan[k - 1];
        long answer = 0;

        while (left <= right) {

            long mid = (left + right) / 2;
            long count = 0;

            for (int i = 0; i < k; i++) {
                count += lan[i]/mid;
            }

            if (count >= n) {
                answer = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }

        }

        System.out.println(answer);
    }
}