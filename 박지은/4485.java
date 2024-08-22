import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.PriorityQueue;

public class Main {

  public static int[] dx = {-1,1,0,0};// 상하 좌우
  public static int[] dy = {0,0,-1,1};

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(br.readLine());
    ArrayList<int[][]> list = new ArrayList<>();
    while (n != 0){
      list.add(new int[n][n]);
      for(int i = 0; i < n; i++){
        list.get(list.size()-1)[i] = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
      }
      n = Integer.parseInt(br.readLine());
    }

    StringBuilder sb = new StringBuilder();

    for(int i=0 ; i<list.size(); i++){
      sb.append(String.format("Problem %d: %d\n", i+1, result(list.get(i))));
    }
    System.out.println(sb);
  }

  public static int result(int[][] arr){
    PriorityQueue<Node> list = new PriorityQueue<>((x,y) -> x.sum - y.sum);
    list.add(new Node(0,0, arr[0][0]));
    int[][] distance = new int[arr.length][arr[0].length];
    for(int i = 0; i < distance.length; i++){
      for(int j = 0; j < distance.length; j++){
        distance[i][j] = Integer.MAX_VALUE;
      }
    }
    distance[0][0] = arr[0][0];
    while(!list.isEmpty()){
      Node cur = list.poll();
      for(int i=0; i<4 ;i++){
        int nextX = cur.x + dx[i];
        int nextY = cur.y + dy[i];
        if(nextX < 0 || nextY < 0 || nextX >= arr.length || nextY >= arr[0].length || (distance[cur.x][cur.y] + arr[nextX][nextY] >= distance[nextX][nextY])) continue;
        distance[nextX][nextY] = distance[cur.x][cur.y] + arr[nextX][nextY];
        list.add(new Node(nextX, nextY, distance[nextX][nextY]));
      }
    }
    return distance[arr.length-1][arr[0].length-1];
  }

  public static class Node {
    public int x;
    public int y;
    public int sum;

    public Node(int x, int y, int sum){
      this.x = x;
      this.y = y;
      this.sum = sum;
    }
  }
}
