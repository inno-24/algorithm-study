import java.io.*;
import java.util.*;

public class Main {

    public static int n;
    public static int[][] map;
    public static int[][] min;
    public static int[][] max;
    public static int[] dx = {0,-1,1};

    public static void main(String args[]) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        StringBuilder sb = new StringBuilder();

        n = Integer.parseInt(br.readLine());

        map = new int[n][3];
        min = new int[n][3];
        max = new int[n][3];

        for(int i=0;i<n;i++){
            st = new StringTokenizer(br.readLine(), " ");

            for(int j=0;j<3;j++){
                map[i][j] = Integer.parseInt(st.nextToken());

                if(i>0){

                    for(int k=0;k<3;k++){
                        int x = i-1;
                        int y = j+dx[k];

                        if(x<0 || x>=n || y<0 || y>=3) continue;

                        if(min[i][j] == 0){
                            min[i][j] = map[i][j] + min[x][y];
                        }
                        else if(min[i][j] > map[i][j] + min[x][y]){
                            min[i][j] = map[i][j] + min[x][y];
                        }

                        if(max[i][j] < map[i][j] + max[x][y]){
                            max[i][j] = map[i][j] + max[x][y];
                        }

                    }


                }else{
                    min[i][j] =map[i][j];
                    max[i][j] =map[i][j];
                }

            }

        }

        int minNum=Integer.MAX_VALUE;
        int maxNum = 0;

        for(int i=0;i<3;i++){
            minNum = Math.min(min[n-1][i], minNum);
            maxNum = Math.max(max[n-1][i], maxNum);
        }

        System.out.println(maxNum + " " + minNum);
    }
}
