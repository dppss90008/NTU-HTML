import java.util.Scanner;

public class F01 {

	public static void main(String[] args) {
		
		Scanner in = new Scanner(System.in);
		System.out.print("請輸入圓半徑: ");
		int r = in.nextInt();
		in.close();
		
		double Area = (double)r*r*3.1415;
		double Length = (double)2*r*3.1415;
		
		System.out.printf("圓周長為%.2f,圓面積為%.2f",Length,Area);
	}

}
