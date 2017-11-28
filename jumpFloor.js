/*一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。 */

/*无论是跳到哪一级，它的起跳地点只可能有两个，就是它的前一级或前两级，
我们只需要把跳到这两个起跳地点的方法数加起来就是结果*/

function jumpFloor(number)
{
    if(number == 0) {
        return 0;
    } else if(number == 1){
        return 1;
    } else if(number == 2) {
        return 2;
    }
    
    return jumpFloor(number-1) + jumpFloor(number-2);
}

/*一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。*/
function jumpFloorII(number)
{
    // write code here
    return  1<<--number; 
}