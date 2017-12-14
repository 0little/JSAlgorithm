/*输入一个链表，输出该链表中倒数第k个结点。*/

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    if(head == null) {
        return false;
    }
    
    var tmp = head;
    var array = [];
    while(tmp != null) {
        array.push(tmp);
        tmp = tmp.next;
    }
    
    return array[array.length - k];
}