import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String str = scanner.next();
		System.out.println(pikachu(str));		
	}
	
	public static String pikachu(String str) {
	    char[] arr = str.toCharArray();
	    int i = 0;
	    try {
	        while (i < arr.length) {
	            switch (arr[i]) {
	                case 'p':
	                    if (arr[i + 1] != 'i') return "NO";
	                    else i += 2;
	                    break;
	                case 'k':
	                    if (arr[i + 1] != 'a') return "NO";
	                    else i += 2;
	                    break;
	                case 'c':
	                    if (arr[i + 1] != 'h' || arr[i + 2] != 'u') return "NO";
	                    else i += 3;
	                    break;
	                default:
	                    return "NO";
	            }
	        }
	    } catch (ArrayIndexOutOfBoundsException e) {
	        return "NO";
	    }
	    return "YES";
	}
}
