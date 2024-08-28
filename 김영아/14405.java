package 김영아;

public class 14405 {
    
    public static void main(String[] args){

        boolean yn=false;
        Scanner scanner=new Scanner(System.in);
        

        String input=scanner.nextLine();
        
        for (int i = 0; i < input.length(); ) {
            if (i + 1 < input.length() && input.substring(i, i + 2).equals("pi")) {
                i += 2;
            } else if (i + 1 < input.length() && input.substring(i, i + 2).equals("ka")) {
                i += 2;
            } else if (i + 2 < input.length() && input.substring(i, i + 3).equals("chu")) {
                i += 3;
            } else {
                yn = false;
                break;
            }
        }
        if (yn) {
            System.out.println("YES");
        } else {
            System.out.println("NO");
        }

        
    }
}
