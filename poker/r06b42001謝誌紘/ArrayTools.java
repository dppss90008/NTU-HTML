
public class ArrayTools {
	public static double[] clone(double ary[]) {
		
		double[] ret = new double[ary.length];
		for (int i = 0; i < ary.length; i++) {
			ret[i] = ary[i];
		}
		
		return ret;
	}
	
	public static void printAry(double ary[]) {
		for (int i = 0; i < ary.length; i++) {
			System.out.print(ary[i]+" ");
		}
	}
	
	public static void printAry(int ary[]) {
		for (int i = 0; i < ary.length; i++) {
			System.out.print(ary[i]+" ");
		}
	}
	
	public static void reverse(int ary[]) {
		
		for (int i = ary.length-1; i >= 0; i--) {
			System.out.print(ary[i]+" ");
		}
	}
	
	public static int[] randomArray(int n, int start, int end) {
		int[] retAry = new int[n];
		for (int i = 0; i < retAry.length; i++) {
			retAry[i] = (int) (Math.floor(Math.random() * end) + start);
		}
		
		return retAry;
	}
	
}
