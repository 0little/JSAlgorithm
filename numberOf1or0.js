/*输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。*/

function NumberOf1(n)
{
    var count = 0;
    while(n) {
        count++;
        n = n & (n - 1);
    }
    
    return count;
}

/*输入一个整数，输出该数二进制表示中0的个数。其中负数用补码表示。*/

function NumberOf0(n)
{
    var count = 0;
    while(n + 1) {
        count++;
        n = n | (n + 1);
    }
    
    return count;
}