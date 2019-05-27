import java.util.Scanner;

public class F02 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner in = new Scanner(System.in);
		System.out.print("請輸入一個數字n: ");
		int n = in.nextInt();
		in.close();
		
		for(int i=0;i<n;i++) {
			
			for(int j=n-i;j>1;j--) {
				System.out.print(" ");
			}
			for(int j=0;j<i+1;j++) {
				System.out.print("* ");
			}
			
			System.out.println();
			
			
			
		}
		
		
	}

}
