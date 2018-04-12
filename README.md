# JSAlgorithm
Algorithm in javascript

### RestructionOfBinaryTree
Enter the preorder and inorder traversal of a binary tree,an then rebuild the binary tree and return.<br/>
eg:
preorder:{1,2,4,7,3,5,6,8},
inorder:{4,7,2,1,5,3,8,6}

### fromTailToHeadPrintLinkList
Enter a chain table and print it from tail to head.

### replaceSapce
Please write a function that replaces a space in a string with "%20"<br/>eg:
from"We Are Happy." to "We%20Are%20Happy."

### searchIn2DArray
In a two-dimensional array, each row is sorted in ascending order from left to right, and each column is sorted in 
ascending order from top to bottom.<br/>
Please complete a function, enter such a two-dimensional array and an integer, determine whether the array contains the integer.

### twoStackToQueue
Achieve a queue with two stacks, and then reslize the function of pop and push.The element in the queue is integer.

### Fibonacci
f(n) = f(n-1) + f(n-2)

### jumpFloor
a frog can move one step or two step every time, question: if the frog wants to jump to n level, how many methods are there?

### rectCover
use n small rectangles which is 2 * 1 to cover a big rectangle which is 2 * n.

### numberOf1or0
Enter a number, and calculate the number of 0 or 1 in the relevant binary number.

### findKthToTail
Enter a chain list and output the reciprocal K node in the list.

### 桶排序 （从小到大）
时间复杂度：O（M+N）<br/>
M表示桶的个数，N表示数字的个数 <br/>
思想：要排序的数的范围是什么就准备几个桶，遍历这些数，把他们放在以他们为下标的桶里面，再遍历这些桶，就会得到有序的输出 <br/>

### 冒泡排序
时间复杂度：O(N^2) <br/>
优化：设置一个裁判，如果在一轮遍历中没有元素进行交换，则排序提前完成 <br/>
思想：第一个元素跟第二元素比大小，如果第一个元素大，则他们交换位置，第二个和第三个比，也是谁大谁排在后面，以此类推，经过一轮遍历，最大的元素就会被放到末尾了，接着进行第二轮第三轮遍历...如果在一次遍历中，裁判法先没有元素交换位置，则排序结束。

### 选择排序
时间复杂度：O(N^2) <br/>
思想：让第一个元素与他后面所有的元素比大小，只有找到比他小的就交换位置，一直到数组末尾，然后然第二个元素和他后面所有的元素比大小，只有找到比他小的就交换位置，一直到数组末尾，以此类推，直到倒数第二个元素。

### 直接插入排序
时间复杂度：O(N^2)<br/>
思想：从第二个元素开始，遍历它前面的序列，如果找到一个比他大的数，就插在这个数前面，然后拿第三个数与它前面的序列比较，遇到比他大的就插入到前面，以此类推。

### 快速排序
时间复杂度：O（NlogN）
思想：首先确定一个基准点，通常为数组的第一个元素，然后派出两个哨兵i和j，i站在数组头，j站在数组尾，j开始往头部走，直到遇到一个比基准数小的数，停下来，然后i开始往右走，直到遇到一个比基准数大的数，停下来，两个数交换位置，然后就又开始向头部走，直到i和j相遇，然后将相遇位置的数和基准数交换位置，就得到一个序列：基准数的左边都比基准数小，基准数的右边都比基准数大，然后按照这样的方法给两侧的数组排序。
思考j先开始走而不是i先开始走的原因：保证相遇点的数一定比基准数小，这样他们才能交换。因为基准数在头部，如果该数组已经是升序排列，那么他们的相遇位置就在尾部，但尾部数不符合要求，导致排序失败。

### judgeSquare.js
#### 给出四个点的坐标，判断它们能不能构成正方形。

### jd2016.js
#### 京东2016年前端实习生编程题
小东和其他小朋友正在玩一个关于选举的游戏。选举是通过投票的方式进行的，得票最多的人将获胜。<br/>
小东是编号为1的候选者，此外还有其他的候选者参加选举。根据初步的调查情况，所有准备投票的小朋友都有一定的投票倾向性，小东如果要获得胜利，必须争取部分准备为其他候选人投票的小朋友。由于小东的资源较为有限，她希望用最小的代价赢得胜利，请你帮忙计算她最少需要争取的选票数。<br/>
输入<br/>
输入有若干组，每组包含两行，第一行为一个正整数n（2<=n<=100），表示候选者的数量，第二行为每个候选人预期得到的选票数，以空格分开，每人的预期得票数在1到1000之间（包含1和1000）。<br/>
经过小东的争取后，可能出现候选人得票数为0或超过1000的情况。<br/>
输出<br/>
对每组测试数据，单独输出一行，内容为小东最少需要争取的选票数。<br/>
样例输入<br/>
5<br/>
5 1 11 2 8<br/>
4<br/>
1 8 8 8<br/>
2<br/>
7 6<br/>
样例输出<br/>
4<br/>
6<br/>
0<br/>

### takeATaxi
 妞妞参加完Google Girl Hackathon之后,打车回到了牛家庄。
妞妞需要支付给出租车司机车费s元。妞妞身上一共有n个硬币，第i个硬币价值为p[i]元。
妞妞想选择尽量多的硬币，使其总价值足以支付s元车费(即大于等于s)。</br>

但是如果从妞妞支付的这些硬币中移除一个或者多个硬币，剩下的硬币总价值还是足以支付车费的话，出租车司机是不会接受的。例如: 妞妞使用价值为2，5，7的硬币去支付s=11的车费,出租车司机是不会接受的，因为价值为2这个硬币是可以移除的。<br>

妞妞希望能选取最大数量的硬币，使其总价值足以支付车费并且出租车司机能接受。妞妞希望你能帮她计算最多可以支付多少个硬币。 

输入描述：
输入包括两行, 第一行包括两个正整数n和s(1 <= n <= 10, 1 <= s <= 1000), 表示妞妞的硬币个数和需要支付的车费。
第二行包括n个正整数p[i] (1 <= p[i] <= 100)，表示第i个硬币的价值。
保证妞妞的n个硬币价值总和是大于等于s。
输出描述：
输出一个整数, 表示妞妞最多可以支付的硬币个数。

输入示例：<br>
5 9 <br>
4 1 3 5 4 <br>
输出示例：<br>
3

### 击鼓传花-动态规划
学校联欢晚会的时候，为了使每一个同学都能参与进来，主持人常常会带着同学们玩击鼓传花的游戏。游戏规则是这样的：n个同学坐着围成一个圆圈，指定一个同学手里拿着一束花，主持人在旁边背对着大家开始击鼓，鼓声开始之后拿着花的同学开始传花，每个同学都可以把花传给自己左右的两个同学中的一个（左右任意），当主持人停止击鼓时，传花停止，此时，正拿着花没传出去的那个同学就要给大家表演一个节目。<br>
 聪明的小赛提出一个有趣的问题：有多少种不同的方法可以使得从小赛手里开始传的花，传了m次以后，又回到小赛手里。对于传递的方法当且仅当这两种方法中，接到花的同学按接球顺序组成的序列是不同的，才视作两种传花的方法不同。比如有3个同学1号、2号、3号，并假设小赛为1号，花传了3次回到小赛手里的方式有1->2->3->1和1->3->2->1，共2种。<br>
输入<br>
输入共一行，有两个用空格隔开的整数n，m（3<=n<=30，1<=m<=30）<br>
输出<br>
输出共一行，有一个整数，表示符合题意的方法数<br>
样例输入：3 3<br>
样例输出：2


