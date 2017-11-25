/*输入一个链表，从尾到头打印链表每个节点的值。*/

/*function ListNode(x){
 this.val = x;
 this.next = null;
 }*/
function printListFromTailToHead(head)
{
    // write code here
    var tmp = head;
    var stack = [];

    while(tmp) {
        stack.push(tmp.val);
        tmp = tmp.next;
    }
    return stack.reverse();
}

