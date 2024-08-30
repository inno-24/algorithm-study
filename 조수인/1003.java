import java.util.HashMap;
import java.util.Scanner;

public class Main {

    static HashMap<Integer, int[]> memo = new HashMap<>();

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        memo.put(0, new int[]{1, 0});
        memo.put(1, new int[]{0, 1});

        int t = sc.nextInt();

        for (int i = 0; i < t; i++) {

            int n = sc.nextInt();

            int[] result = fibonacci(n);

            System.out.println(result[0] + " " + result[1]);
        }
    }


    private static int[] fibonacci(int n) {

        for (int i = 2; i <= n; i++) {
            if (!memo.containsKey(i)) {
                int[] an1 = memo.get(i - 1);
                int[] an2 = memo.get(i - 2);

                memo.put(i, new int[]{
                        an1[0] + an2[0],
                        an1[1] + an2[1]
                });
            }
        }
        return memo.get(n);
    }

}