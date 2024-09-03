import java.util.PriorityQueue;
import java.util.Scanner;

class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();
    PriorityQueue<Lecture> queue = new PriorityQueue<>();
    for (int i = 0; i < n; i++) {
      int p = sc.nextInt();
      int d = sc.nextInt();

      Lecture lecture = new Lecture(p, d);
      queue.add(lecture);
    }

    int answer = 0;
    boolean[] days = new boolean[10001]; // 가능한 기간
    while(!queue.isEmpty()) {
      Lecture lecture = queue.poll();

      for (int i = lecture.day; i > 0; i--) { // 제시한 기한 안에 강연이 가능한 날 찾기
        if (!days[i]) {
          days[i] = true;
          answer += lecture.price;
          break;
        }
      }

    }

    System.out.println(answer);

  }

  static class Lecture implements Comparable<Lecture> {
    int price;
    int day;

    public Lecture(int price, int day) {
      this.price = price;
      this.day = day;
    }

    @Override
    public int compareTo(Lecture o) {
      if (o.price == this.price) {
        return this.day - o.day;
      } else {
        return o.price - this.price;
      }
    }
  }

}
