import java.util.Arrays;

public class F03 {

	public static void main(String[] args) {
		
		// 使用變數產生五張卡片
		int[] Poker = new int[5];
		for (int i = 0; i < Poker.length; i++) {
			Poker[i] = getPoker();
		}
		
		// 測試結果使用
//		int[] Poker = { 37, 49, 45,1, 41 };

		int Point, Color;
		int[] Col = new int[5];
		int[] num = new int[5];
		int[] ct_Color = new int[4];
		int[] ct_Num = new int[13];

		System.out.println("您抽到的卡片為: ");
		
		
		for (int i = 0; i < Poker.length; i++) {
			Point = (Poker[i] - 1) / 4 + 1;
			Color = (Poker[i] - 1) % 4;
			num[i] = Point;
			Col[i] = Color;
			if (Color == 0)
				ct_Color[0] += 1;
			if (Color == 1)
				ct_Color[1] += 1;
			if (Color == 2)
				ct_Color[2] += 1;
			if (Color == 3)
				ct_Color[3] += 1;
		}
		// 計算花色
		// for (int i = 0; i < ct_Color.length; i++) {
		// System.out.println(ct_Color[i]);
		// }
		// 數字排列
		

		for (int i = 0; i < num.length; i++) {
			
			if(Col[i]==0) {
				System.out.print("梅花");
			}
			if(Col[i]==1) {
				System.out.print("菱形");
			}
			if(Col[i]==2) {
				System.out.print("愛心");
			}
			if(Col[i]==3) {
				System.out.print("黑桃");
			}
			System.out.println(num[i]);
		}
		
		System.out.println("您的結果為:");
		
		Arrays.sort(num);
		// 同花大順 及 同花順判斷
		for (int i = 0; i < ct_Color.length; i++) {
			if (ct_Color[i] == 5) {
				if (num[0] == 1 && num[1] == 10 && num[2] == 11 && num[3] == 12 && num[4] == 13) {
					System.out.println("同花大順");
					System.exit(0);
				}
				if (num[0] == num[1] - 1 && num[1] == num[2] - 1 && num[2] == num[3] - 1 && num[3] == num[4] - 1) {
					System.out.println("同花順");
					System.exit(0);
				}
			}
		}
		
		
		// 判斷四條
		for (int i = 0; i < num.length; i++) {
			for (int j = 0; j < ct_Num.length; j++) {
				if(num[i]-1 == j) {
					ct_Num[j] += 1;
				}
			}
		}
		
		for (int i = 0; i < ct_Num.length; i++) {
			if(ct_Num[i]==4) {
				System.out.println("四條");
				System.exit(0);
			}
		}
		
		// 判斷葫蘆
		for (int i = 0; i < ct_Num.length; i++) {
			if(ct_Num[i]==3) {
				for (int j = 0; j < ct_Num.length; j++) {
					if(ct_Num[j]==2) {
						System.out.println("葫蘆");
						System.exit(0);
					}
				}
			}
		}
		
		// 判斷同花
		for (int i = 0; i < ct_Color.length; i++) {
			if(ct_Color[i]==5) {
				System.out.println("同花");
				System.exit(0);
			}
		}
		
		// 判斷順子
		if (num[0] == num[1] - 1 && num[1] == num[2] - 1 && num[2] == num[3] - 1 && num[3] == num[4] - 1) {
			System.out.println("順子");
			System.exit(0);
		}
		
		// 判斷三條
		for (int i = 0; i < ct_Num.length; i++) {
			if(ct_Num[i]==3) {
				System.out.println("三條");
				System.exit(0);
			}
		}
		
		// 判斷兩對
		for (int i = 0; i < ct_Num.length; i++) {
			if(ct_Num[i]==2) {
				for (int j = i+1; j < ct_Num.length; j++) {
					if(ct_Num[j]==2) {
						System.out.println("兩對");
						System.exit(0);
					}
				}
			}
		}
		
		// 判斷一對
		
		for (int i = 0; i < ct_Num.length; i++) {
			if(ct_Num[i]==2) {
				System.out.println("一對");
				System.exit(0);
			}
		}
		
		System.out.println("散牌");
		System.exit(0);
	}

	public static int getPoker() {
		int ret = (int) (Math.floor(Math.random() * 52) + 1);
		return ret;
	}
}
