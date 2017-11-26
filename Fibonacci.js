/*大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。*/

function Fibonacci(n)
{
    // write code here
    if(n == 0) {
        return 0;
    } 
    if(n == 1) {
        return 1;
    }
    
    var result;
    var tmp1 = 0, tmp2 = 1;
    var i = 2;
    
    do {
        result = tmp1 + tmp2;
        tmp1 = tmp2;
        tmp2 = result;
    } while (i++ != n);
    
    return result;
 }