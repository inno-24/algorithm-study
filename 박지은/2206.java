// [2024-09-12] 박지은 #78 BOJ 2206 벽 부수고 이동하기
// https://www.acmicpc.net/problem/2206

import java.util.*;
import java.io.*;

public class Main {
  public static int[][] arr;
  public static boolean[][][] visit;
  public static ArrayList<Xy> list = new ArrayList<>();
  public static int N;
  public static int M;
  public static int[] dx = { 0, -1, 0, 1 };
  public static int[] dy = { 1, 0, -1, 0 };


  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine(), " ");
    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());
    arr = new int[N][M];
    for(int i = 0; i < N; i++) {
      String line = br.readLine();
      for(int j = 0; j < M; j++) {
        arr[i][j] = line.charAt(j) - '0';
      }
    }
    int bfs = bfs();
    System.out.println(bfs);
  }

  public static int bfs(){
    visit = new boolean[N][M][2];
    LinkedList<Xy> queue = new LinkedList<>();
    queue.add(new Xy(0, 0, 1, false));

    visit[0][0][0] = true;
    while(!queue.isEmpty()){
      Xy cur = queue.poll();
      if(cur.x == N-1 && cur.y == M-1) return cur.count;
      for(int i = 0 ; i < dx.length ; i++){
        int nx = cur.x + dx[i];
        int ny = cur.y + dy[i];
        if(nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        if(cur.curBreak && visit[nx][ny][1]) continue;
        if(!cur.curBreak && visit[nx][ny][0]) continue;
        if(cur.curBreak && arr[nx][ny] == 1) continue;
        boolean nextBreak = cur.curBreak || arr[nx][ny] == 1;
        queue.add(new Xy(nx, ny, cur.count+1, nextBreak));
        visit[nx][ny][nextBreak ? 1 : 0] = true;
      }
    }
    return -1;
  }

  static class Xy{
    int x;
    int y;
    int count;
    boolean curBreak;

    public Xy(int x, int y, int count, boolean curBreak){
      this.x = x;
      this.y = y;
      this.count = count;
      this.curBreak = curBreak;
    }
  }
}
