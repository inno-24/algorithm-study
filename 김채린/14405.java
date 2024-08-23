import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String str = sc.next();

    if (str.contains("pi") || str.contains("ka") || str.contains("chu")) {
      str = str.replace("pi", " ");
      str = str.replace("ka", " ");
      str = str.replace("chu", " ");
    }

    str = str.replace(" ", "");

    if (str.length() == 0) {
      System.out.println("YES");
    } else {
      System.out.println("NO");
    }

  }

}