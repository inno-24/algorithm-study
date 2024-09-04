import java.util.ArrayList;
import java.util.Scanner;

public class Main {	
	static ArrayList<Integer> array = new ArrayList();
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int length = scanner.nextInt();
		array.add(0);
		array.add(1);
		
		for (int i = 0; i < length; i++) {
			int n = scanner.nextInt();	
			if(n == 0) System.out.println("1 0");			
			else {
				if (n > array.size()-1) {
					setFibonaccis(n);				
				}
				System.out.println(array.get(n-1) + " " + array.get(n));
			}

		}
	}
	
	private static void setFibonaccis(int n) {
		int length = array.size();
		while(length <= n) {
			int add = array.get(length-2) + array.get(length-1);
			array.add(add);
			length++;
		}
	}
}
