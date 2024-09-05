import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class Main {
    static int[] visit = new int[100001];
    static int N, K, fastest_time = Integer.MAX_VALUE, fastest_ways = 0;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");

        N = Integer.parseInt(input[0]);
        K = Integer.parseInt(input[1]);

        for (int i = 0; i < visit.length; i++) {
            visit[i] = Integer.MAX_VALUE;
        }

        bfs();

        System.out.println(fastest_time);
        System.out.println(fastest_ways);
    }

    static void bfs() {
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[]{N, 0});
        visit[N] = 0;

        while (!q.isEmpty()) {
            int[] current = q.poll();
            int pos = current[0];
            int time = current[1];

            if (fastest_time < time) break;

            if (pos == K) {
                if (fastest_time > time) {
                    fastest_ways = 0;
                }

                fastest_time = time;
                fastest_ways++;
                continue;
            }

            int[] nextPositions = {pos - 1, pos + 1, pos * 2};
            for (int next : nextPositions) {
                if (next < 0 || next > 100000) continue;

                if (visit[next] < time + 1) continue;

                visit[next] = time + 1;
                q.add(new int[]{next, time + 1});
            }
        }
    }
}