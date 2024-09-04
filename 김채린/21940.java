import java.util.Scanner;

class Main {

  public static void main(String[] args) {
    // input
    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();
    int m = sc.nextInt();

    int[][] arr = new int[n+1][n+1];
    int INF = Integer.MAX_VALUE;
    for (int i = 0; i < n+1; i++) {
      for (int j = 0; j < n+1; j++) {
        arr[i][j] = INF;
      }
      arr[i][i] = 0;
    }

    for (int i = 0; i < m; i++) {
      int a = sc.nextInt();
      int b = sc.nextInt();
      arr[a][b] = sc.nextInt();
    }

    int k = sc.nextInt();
    int[] f = new int[k];
    for (int i = 0; i < k; i++) {
      f[i] = sc.nextInt();
    }

    // 도시 간 최소 이동 거리 계산
    for (int g = 1; g <= n; g++) {
      for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
          int sum = arr[i][g] + arr[g][j];
          if (sum > 0 && sum < INF) { // 0과 INF 사이의 값만 적용
            arr[i][j] = Math.min(arr[i][j], arr[i][g] + arr[g][j]); // 왕복 거리 계산
          }
        }
      }
    }

    // 도시 별 최대 이동 거리 계산
    int[] max = new int[n+1];
    int min = Integer.MAX_VALUE;
    for (int i = 1; i <= n; i++) {
      for (int j = 0; j < k; j++) {
        max[i] = Math.max(max[i], arr[f[j]][i] + arr[i][f[j]]);
      }
      min = Math.min(min, max[i]);
    }

    // output
    for (int i = 1; i <= n; i++) {
      if (max[i] == min) {
        System.out.print(i + " ");
      }
    }

  }

}
