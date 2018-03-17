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
