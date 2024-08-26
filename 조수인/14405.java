import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String str = br.readLine();

        boolean flag = true;

        int i = 0;
        while (i < str.length()) {

            if (str.charAt(i) == ' ') {
                i++;
                continue;
            }

            if (str.charAt(i) == 'p' && strcmp("pi", str, i)) {
                i+=2;
            } else if (str.charAt(i) == 'k' && strcmp("ka", str, i)) {
                i+=2;

            } else if (str.charAt(i) == 'c' && strcmp("chu", str, i)) {
                i+=3;
            } else {
                flag = false;
                break;
            }
        }

        if (flag) {
            System.out.println("YES");
        } else {
            System.out.println("NO");
        }

    }

    private static boolean strcmp(String str1, String str2, int index) {

        if ( str1.length() > str2.length() - index) {
            return false;
        }

        for (int i = 0; i < str1.length(); i++) {
            if (str1.charAt(i) != str2.charAt(index + i)) {
                return false;
            }
        }
        return true;

    }

}