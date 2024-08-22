import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int length = scanner.nextInt();
		Deque deque = new Deque();

		for (int i = 0; i < length+1; i++) {
			String[] command = scanner.nextLine().split(" ");
			switch (command[0]) {
			case "push_front":
				deque.push_front(Integer.parseInt(command[1]));
				break;
			case "push_back":
				deque.push_back(Integer.parseInt(command[1]));
				break;
			case "pop_front":
				System.out.println(deque.pop_front());
				break;
			case "pop_back":
				System.out.println(deque.pop_back());
				break;
			case "front":
				System.out.println(deque.front());
				break;
			case "back":
				System.out.println(deque.back());
				break;
			case "size":
				System.out.println(deque.size());
				break;
			case "empty":
				System.out.println(deque.empty());
				break;
			}
		}
	}
}

class Deque {
	private int[] arr;

	public Deque() { // 생성자 배열 선언
		this.arr = new int[0];
	}

	public void push_back(int input) { //뒤에 추가
		int[] temp = new int[this.arr.length + 1]; // 기존 배열 한칸 늘린거 선언
		for (int i = 0; i < this.arr.length; i++) temp[i] = arr[i]; // 배열 복사
		temp[temp.length - 1] = input; // 입력값을 마지막에 추가
		this.arr = temp; // 배열 저장
	}

	public void push_front(int input) { //앞에 추가
		int[] temp = new int[this.arr.length + 1]; // 기존 배열 한칸 늘린거 선언
		temp[0] = input; // 입력값을 앞에 추가
		for (int i = 0; i < this.arr.length; i++) temp[i + 1] = arr[i]; // 기존 내용 복사
		this.arr = temp; // 배열 저장
	}

	public int pop_back() {
		if (arr.length == 0) return -1; // 배열 크기 0이면 -1 반환
		int back = arr[arr.length - 1]; // 출력값은 맨 뒤에 선택
		int[] temp = new int[this.arr.length - 1]; // 배열 한칸 줄인거 선언
		for (int i = 0; i < temp.length; i++) temp[i] = arr[i]; // 기존 내용 복사
		this.arr = temp; // 배열 저장
		return back; // 결과 반환

	}

	public int pop_front() {
		if (arr.length == 0) return -1; // 배열 크기 0이면 -1 반환
		int front = arr[0]; // 출력값은 맨 앞에 선택
		int[] temp = new int[this.arr.length - 1]; // 배열 한칸 줄인거 선언
		for (int i = 0; i < temp.length; i++) temp[i] = arr[i + 1]; // 기존 내용 복사
		this.arr = temp; // 배열 저장
		return front; // 결과 반환
	}

	public int front() {
		if (arr.length == 0) return -1; // 배열 크기 0이면 -1 반환
		return arr[0];
	}

	public int back() {
		if (arr.length == 0) return -1; // 배열 크기 0이면 -1 반환
		return arr[arr.length - 1];
	}

	public int size() {
		return arr.length;
	}

	public int empty() {
		return (arr.length > 0) ? 0 : 1;
	}
}
