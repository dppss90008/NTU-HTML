
public class F04 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		double[] test = {1.3,1.2,2,3,4.55};
		double[] Clonetest = ArrayTools.clone(test);				
		ArrayTools.printAry(Clonetest);
		
		System.out.println();
		
		int[] test2 = {1,2,3,4,5};
		ArrayTools.reverse(test2);
		
		System.out.println();
		
		int[] random = ArrayTools.randomArray(5, 1, 52);
		ArrayTools.printAry(random);
		
		
	}

}
