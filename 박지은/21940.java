import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st;
    st = new StringTokenizer(br.readLine(), " ");
    int n = Integer.parseInt(st.nextToken());
    int m = Integer.parseInt(st.nextToken());
    int[][] ms = new int[m][3];
    for (int i = 0; i < m; i++) {
      st = new StringTokenizer(br.readLine(), " ");
      for (int j = 0; j < 3; j++) {
        ms[i][j] = Integer.parseInt(st.nextToken());
      }
    }
    int[][] arr = new int[n][n];
    for (int i = 0; i < m; i++) {
      arr[ms[i][0]-1][ms[i][1]-1] = ms[i][2];
    }
    for(int i= 0 ; i < n ; i++){
      for(int j = 0 ; j < n ; j++){
        if(i == j){
          arr[i][j] = 0;
        }else if(arr[i][j] == 0){
          arr[i][j] = Integer.MAX_VALUE;
        }
      }
    }

    int k = Integer.parseInt(br.readLine());
    st = new StringTokenizer(br.readLine(), " ");
    int[] ks = new int[k];
    for (int i = 0; i < k; i++) {
      ks[i] = Integer.parseInt(st.nextToken()) - 1;
    }

    for(int z = 0 ; z < n ; z++){
      for(int i = 0 ; i < n ; i++){
        for(int j = 0 ; j < n ; j++){
          if(arr[i][z] == Integer.MAX_VALUE || arr[z][j] == Integer.MAX_VALUE){
            continue;
          }
          arr[i][j] = Math.min(arr[i][j], arr[i][z] + arr[z][j]);
        }
      }
    }
    Map<Integer, Count> map = new HashMap<>();
    PriorityQueue<Count> pq = new PriorityQueue<>();
    for(int i=0 ; i < ks.length ;i++){
      int ki = ks[i];
      for(int j=0; j<n ; j++){
        if(arr[ki][j] == Integer.MAX_VALUE || arr[j][ki] == Integer.MAX_VALUE ) continue;
        map.put(j, map.getOrDefault(j, new Count(j+1,0, 0L)).max(arr[ki][j] + arr[j][ki]));
        if(map.get(j).count == k){
          pq.add(map.get(j));
        }
      }
    }
    StringBuilder sb = new StringBuilder();

    Count c = pq.poll();
    long min = c.max;
    PriorityQueue<Integer> pq2 = new PriorityQueue<>();
    pq2.add(c.dosi);
    while(!pq.isEmpty()){
      c = pq.poll();
      if(min != c.max) break;
      pq2.add(c.dosi);
    }
    while(!pq2.isEmpty()){
      sb.append(pq2.poll()).append(" ");
    }
    System.out.println(sb);
  }
  static class Count implements Comparable<Count>{
    int dosi;
    int count;
    long max;

    public Count(int dosi, int count, long sum){
      this.dosi = dosi;
      this.count = count;
      this.max = sum;
    }

    public Count max(int plus){
      this.count++;
      this.max = Math.max(plus, this.max);
      return this;
    }

    @Override
    public int compareTo(Count o) {
      return Long.compare(this.max, o.max);
    }
  }
}
