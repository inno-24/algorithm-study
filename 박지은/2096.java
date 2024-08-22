import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {

  public static void main(String[] args) throws Exception{
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    Integer n = Integer.parseInt(br.readLine());
    int[] arr = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();

    int[] min = new int[arr.length];
    int[] max = new int[arr.length];
    for (int i = 0; i < arr.length; i++) {
      min[i] = arr[i];
      max[i] = arr[i];
    }
    for (int i = 1; i < n; i++) {
      arr = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();

      int[] nextMin = new int[arr.length];
      int[] nextMax = new int[arr.length];
      for (int j = 0; j < arr.length; j++) {
        Integer minV = Integer.MAX_VALUE;
        Integer maxV = 0;

        if(j>0){
          minV = Math.min(min[j-1]+arr[j], minV);
          maxV = Math.max(max[j-1]+arr[j], maxV);
        }
        if(j<arr.length-1){
          minV = Math.min(min[j+1]+arr[j], minV);
          maxV = Math.max(max[j+1]+arr[j], maxV);
        }
        minV = Math.min(min[j]+arr[j], minV);
        maxV = Math.max(max[j]+arr[j], maxV);
//        System.out.printf("min %d, %d: %d\n", i, j, minV);
//        System.out.printf("max %d, %d: %d\n", i, j, maxV);
        nextMin[j] = minV;
        nextMax[j] = maxV;
      }
      min = nextMin;
      max = nextMax;
    }
    int minV = Integer.MAX_VALUE;
    int maxV = 0;
    for(int i = 0; i < min.length; i++){
//      System.out.printf("min %d: %d\n", i, min[i]);
      minV = Math.min(min[i], minV);
      maxV = Math.max(max[i], maxV);
    }
    System.out.println(maxV+" "+minV);
  }

}
