// [2024-09-03] 박지은 #36 BOJ 2109 순회 강연
// https://www.acmicpc.net/problem/2109

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(br.readLine());
    if(n==0){
      System.out.println("0");
      return;
    }
    PriorityQueue<Info> pq = new PriorityQueue<>();
    StringTokenizer st;
    int maxD = 0;
    for (int i = 0; i < n; i++) {
      st = new StringTokenizer(br.readLine(), " ");
      int p = Integer.parseInt(st.nextToken());
      int d = Integer.parseInt(st.nextToken());
      maxD = Math.max(maxD, d);
      pq.add(new Info(p, d));
    }

    // 우선순위가 높은(페이가 높은) 강연을 가능한 날짜까지 미루며 강연 날짜를 정합니다.
    Info first = pq.poll();
    long sum = first.p;
    // ds는 강연 일정들을 pay로 저장합니다.
    int[] ds = new int[maxD+1];
    ds[first.d] = first.p;
    while(!pq.isEmpty()) {
      Info info = pq.poll();
      int curD = info.d;
      // 가능한 날짜를 찾습니다.
      while(curD > 0 && ds[curD] != 0){
        curD--;
      }
      if(curD!=0){
        ds[curD] = info.p;
        sum += info.p;
      }
    }
    System.out.println(sum);
  }

  static class Info implements Comparable<Info>{
    int p;
    int d;

    public Info(int p, int d) {
      this.p = p;
      this.d = d;
    }

    // 페이가 높은게 우선순위가 높아야합니다.
    @Override
    public int compareTo(Info o) {
      return Integer.compare(o.p, this.p);
    }
  }
}
