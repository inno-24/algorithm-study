// [2024-09-05] 박지은 #64 BOJ 12851 숨바꼭질
// https://www.acmicpc.net/problem/12851

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class Main {
  public static int minT = 0;
  public static int count = 0;
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer tokenizer = new StringTokenizer(br.readLine(), " ");
    int n=Integer.parseInt(tokenizer.nextToken());
    int k=Integer.parseInt(tokenizer.nextToken());
    if(n == k){
      System.out.println(0);
      System.out.println(1);
      return;
    }
    bfs(n, k);

    System.out.println(minT);
    System.out.println(count);
  }

  private static void bfs(int n, int k) {
    LinkedList<Info> list = new LinkedList<>();
    int[] arr = new int[Math.max(n, k)*2];
    list.add(new Info(n, 0));

    while(!list.isEmpty()){
      Info info = list.poll();
      int cur = info.point;
      int nextT = info.time+1;
      if(minT != 0 && minT < nextT){
        continue;
      }

      int[] nextPoint = {cur - 1, cur + 1, cur * 2};
      for(int point : nextPoint){
        if(point >= 0 && point < arr.length&& (arr[point] >= nextT || arr[point] == 0)){
          if(point == k){
            count++;
            minT = nextT;
            continue;
          }
          list.add(new Info(point, nextT));
          arr[point] = nextT;
        }
      }
    }
  }

  static class Info{
    int point;
    int time;

    public Info(int point, int time) {
      this.point = point;
      this.time = time;
    }
  }

}
// 5 17 4 2
// 4 8 16 17
// 10 9 18 17

// 1 4 -> 2 2
